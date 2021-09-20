import React from 'react';
import './TopBar.scss';
import { Notification, file ,group} from '../Import';
import { auth, signOutGoogle } from '../../services/firebase';

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
              <button onClick={()=>signOutGoogle()}>Sign Out</button>
              <a className='profile' href="#!"><img src={auth.currentUser.photoURL} alt="Img"/>{auth.currentUser.displayName}</a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={Notification} alt=""/></a>
              <a href="#!"><img src={file} alt=""/></a>
             </nav>              
        </div>
    )
}
