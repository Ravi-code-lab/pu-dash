import React from 'react';
import './TopBar.scss';
import Notification from '../../assets/icon/Noti.svg'
import profile from '../../assets/images/teachers.png'
import group from '../../assets/icon/group.svg'
import setting from '../../assets/icon/setting.svg'
import file from '../../assets/icon/fill.svg'
export default function TopBar() {
    return (
        <div className="right-top-hedeer">
            <div className="togle">
            <a href="#!">
                <img src={group} alt="grop" />
            </a>
        </div>
            <nav>
              <a className="setting" href="#!"><img src={setting} alt=""/></a>
              <a className='profile' href="#!"><img src={profile} alt="Img"/></a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={file} alt=""/></a>
              </nav>              
        </div>
    )
}
