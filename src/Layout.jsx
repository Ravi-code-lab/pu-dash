import { React } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Dashoard from './components/Pages/DashboardPages/Dashboard/Dashoard';
import Ebook from './components/Pages/DashboardPages/Ebook/Ebook';
import Event from './components/Pages/DashboardPages/Event/Event';
import MyClass from './components/Pages/DashboardPages/MyClass/MyClass';
import Spage from './components/Pages/DashboardPages/Student/Student';
import Teachers from './components/Pages/DashboardPages/Teachers/Teachers';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import './global.scss';
import './Layout.scss';

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
                <Event />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/Student">
                <Spage />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/Teachers">
                <Teachers />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/MyClass">
                <MyClass />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/Ebook">
                <Ebook />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/Student">
                <Spage />
              </Route>
              {/* On Clike content Change  */}
              <Route path="/Dashboard">
                <Dashoard />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
