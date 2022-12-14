import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import{Route,Routes} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import { authCheck } from "./store/actions/handleAuth";
import Account from "./pages/Account";
import AccountSetting from "./pages/AccountSettings";
import UploadImage from "./pages/UploadImage";
import UploadProfileImage from "./pages/UploadProfileImage";
import { getMainAccountData } from "./store/actions/handleMainAccount";
import { getProfilePhoto, getPhoto } from "./store/actions/handlePhoto";
import { getMainAccountUserName } from "./store/actions/handleAccounts";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheck())
    dispatch(getMainAccountData())
    dispatch(getProfilePhoto())
    dispatch(getMainAccountUserName())
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/:userName" element={<Account/>}/>
        <Route exact path="/:userName/settings" element={<AccountSetting/>}/>
        <Route exact path="/newPost" element={<UploadImage/>}/>
        <Route exact path="/ProfilePhoto" element={<UploadProfileImage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
