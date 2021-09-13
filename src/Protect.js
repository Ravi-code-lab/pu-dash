import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { auth } from './firebase';
import Layout from './Layout';

function Protect() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div>
      {user ? <Layout/> : <Login />}
    </div>
  );
}

export default Protect;
