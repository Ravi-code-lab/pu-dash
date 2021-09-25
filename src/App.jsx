import Layout from "./Layout";
import Login from "./components/Pages/Login/Login";
import RegisterForm from "./RegisterForm";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


export default function App() {
//  const [user, setUser] = useState(null);//for verifying if user is signeIn or signedOut
//  //const [registered, setRegistered] = useState(false);//for checking if student is registerd in database or not
//  // //for making the user sign in and sign out effect an change the page from signIn or Layout according to authantication
//  useEffect(() => {
//    const unsubscribe = auth.onAuthStateChanged(userAuth => {
//     // const userData= {email: userAuth.email, name:userAuth.displayName};
//     if(userAuth === null)
//     {
//       setUser(null)
//     }
//     else{
//       setUser(userAuth);
//     }
//    })
//    return unsubscribe
//   }, []);

  

  //console.log(registered);
  return (
    //for navigating to diffrent page based on registered logged in or not logged in
    <Router>
      <Switch>
        <Route path="/Dashboard" exact><Layout/></Route>
        <Route path="/Login" exact><Login/></Route>
        <Route path="/Register" exact><RegisterForm/></Route>
        <Redirect to="/Dashboard"/>
      </Switch>
    </Router>
  );
}


