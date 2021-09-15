import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import './Layout.scss';
import './global.scss'
import Pages from './components/Pages/Pages';
import Dashoard from './components/Dashboard/Dashoard';
import MyClass from './components/MyClass/MyClass';
import Spage from './components/Student/Student';
import Event from './components/Event/Event';
import Ebook from './components/Ebook/Ebook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function Layout() {
    return (
    <Router>
    <div className="main-body">
    <div className="column">
      <div className="top-left">
       
      </div>
      <div className="bottom Sidebar-border">
      <Sidebar></Sidebar>
      </div>
    </div>
    <div className="column right-column">
      <div className="top-right">
        <TopBar></TopBar>
      </div>
      <div className="bottom main-contaner">
      <Switch>
          
          {/* On Clike content Change  */}
         <Route path="/Event">
          <Event/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/Student">
          <Spage/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/Teachers">
          <Pages/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/MyClass">
          <MyClass/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/Ebook">
          <Ebook/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/Student">
          <Spage/>
          </Route>
          {/* On Clike content Change  */}
          <Route path="/">
           <Dashoard/>
          </Route>
        </Switch>
      </div>
    </div>
    </div>
  </Router>
  );
}

export default Layout;
