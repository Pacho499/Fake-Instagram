import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import{Route,Routes} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import {useEffect} from "react"
import { authCheck } from "./store/actions/handleAuth";
import Direct from "./pages/Direct";
import Account from "./pages/Account";
import AccountSetting from "./pages/AccountSettings";
import UploadImmage from "./pages/UploadImage";
function App() {

  const token = useSelector(state=> state.authReducer.token)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheck())
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Direct" element={<Direct/>}/>
        <Route exact path="/:userName" element={<Account/>}/>
        <Route exact path="/:userName/settings" element={<AccountSetting/>}/>
        <Route exact path="/newPost" element={<UploadImmage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
