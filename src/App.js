import React from 'react';
import './App.css';
import MainContent from './Components/Content/MainContent';
import RightContent from './Components/Content/RightContent/RightContent';
import MobileSideBar from './Components/Mobile/MobileSideBar';
import Sidebar from './Components/SideBar/sidebar';
import SideNav from './Components/SideNav/sideNav';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <SideNav/>
      <MainContent/>
      <RightContent/>
      <MobileSideBar/>
    </div>
  );
}

export default App;
