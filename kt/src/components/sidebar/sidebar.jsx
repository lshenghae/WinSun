import React from 'react'
import './sidebar.css'


export default function sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    {/* 사이드바 상단*/}
                    <div className='sidebarHeader'>
                        <div className='sidebarList'>
                            <li className='sidebarListItem mainImg on'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem filePlus'></li>
                        </div>
                    </div>

                    {/* 사이드바 중단*/}
                    <div className='sidebarContent'>
                        <div className='sidebarList'>
                            <li className='sidebarListItem bookMark on'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem bookSelf'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem desk'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem connection'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem account'></li>
                        </div>
                    </div>

                    {/* 사이드바 하단*/}
                    <div className='sidebarFooter'>
                        <div className='sidebarList'>
                            <li className='sidebarListItem waveArrow'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem exitArrow'></li>
                        </div>
                        <div className='sidebarList'>
                            <li className='sidebarListItem menuOpen'></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}