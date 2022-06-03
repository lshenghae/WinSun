import { useEffect } from "react";
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/topbar'
import Contents from './components/contents/contents'
import './components/common/common.css'

function App() {
   
  return (
    <div className="App">
      <div className='container'>
          <Sidebar></Sidebar>
          <div className='others'>
            <Topbar></Topbar>
            <Contents></Contents>
          </div>
      </div>
    </div>
  );
}

export default App;
