import React from 'react';
import './TopBar.scss';
import Notification from '../../assets/icon/Noti.svg'
import group from '../../assets/icon/group.svg'
// import setting from '../../assets/icon/setting.svg'
import file from '../../assets/icon/fill.svg'
export default function TopBar() {
    
    return (
        <div className="right-top-hedeer">
            <div className="togle" > 
            {/* onclick="toggleMenu();" */}
            <a href="#!">
                <img src={group} alt="grop" />
            </a>
            <h1>Desbord</h1>
        </div>
            <nav>
              {/* <a className="setting" href="#!"><img src={setting} alt=""/></a> */}
              <a className='profile' href="#!"><img src={profile} alt="Img"/>Kuldeep</a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={file} alt=""/></a>
              </nav>              
        </div>
    )
}
