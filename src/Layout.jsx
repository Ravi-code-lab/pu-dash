import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import Dashoard from './components/Pages/Dashboard/Dashoard';
import Ebook from './components/Pages/Ebook/Ebook';
import Event from './components/Pages/Event/Event';
import MyClass from './components/Pages/MyClass/MyClass';
import Pages from './components/Pages/Pages';
import Spage from './components/Pages/Student/Student';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import './global.scss';
import './Layout.scss';
import { auth, getFirebaseDocument } from './services/firebase';

function Layout() {
  //for redirecting to login if user is not login
  const [registerd, setregisterd] = useState(false);
  const [user, setUser] = useState(null);//for verifying if user is signeIn or signedOut
  // //for making the user sign in and sign out effect an change the page from signIn or Layout according to authantication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      // const userData= {email: userAuth.email, name:userAuth.displayName};
      if (userAuth === null) {
        setUser(null)
      }
      else {
        setUser(userAuth);
      }
    })
    return unsubscribe
  }, []);
  if (user === null) {
    console.log("login")
    return <Redirect to="/Login" />
  }
  
  let docId = user.email.split('@');
  docId.pop();
  docId = docId.join();
  console.log(docId);
  const querySnap = getFirebaseDocument("students", docId);
  console.log(docId);
  console.log(docId);
  if (querySnap.exist()) {
    setregisterd(true)
  } else {
    setregisterd(false)
  }

  if (!registerd) {
    console.log("register")
    return <Redirect to="/Register" />
  }

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
                <Pages />
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
