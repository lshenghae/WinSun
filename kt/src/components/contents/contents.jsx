import { useEffect , useState } from "react";
import './contents.css'
import '../common/common.css'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

export default function Contents({}){
     
    const [data , setData] = useState([]);
  
    useEffect(() => {
        getJson();
    }, []);

    async function getJson() {
        try {
        let response = await fetch('https://api.jsonbin.io/b/616cd47a9548541c29c49b36');
        let responseJson = await response.json();
        if(responseJson){
            setData(responseJson);
        }
        return responseJson.movies;

        } catch(error) {
            console.error(error);
        }
    }
    

    return (
        <div className='contentsWrap'>
            <div className='contentsTitle title-sm'>북마크 회전목마</div>
            <div className='contentsSwiper'>
            {data.length > 0 &&   
                <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={16}
                navigation
                centeredSlides={false}
                
                //watchSlidesVisibility={true}
                //centeredSlides={true}
                //overflow={invisible}
                // watchSlidesProgress={true}
                //slidesOffsetBefore={50}
                //slidesOffsetAfter={50}
                >
                {data.map((item,index) => {
                    return (
                    <SwiperSlide key={index}>
                        <div className="bookmarkWrap">
                            <div className="bookmarkTitle title-sm">{item.title}</div>
                            <div className="bookmarkDesc caption">{item.description}</div>
                        </div>
                    </SwiperSlide>
                    )
                })}
                </Swiper>
            }
            </div>
        </div>
    )
}