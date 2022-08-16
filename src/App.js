import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import{Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
        <Route exact path="/Home" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
