import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import{Route,Routes} from 'react-router-dom'
import Direct from "./pages/Direct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Direct" element={<Direct/>}/>
        <Route exact path="/account/:localId" element={<Direct/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
