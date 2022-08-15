import Auth from "./pages/Authentication";
import SignUp from "./pages/Signup"
import{Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Auth/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
