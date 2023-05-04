import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AuthComponent from './components/AuthComponent';

function App() {


  return (
    <div className="container">
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={
            <AuthComponent>
              <Admin/>
            </AuthComponent>
            }/>
          <Route path="*" element={<p>Route does not exist</p>}/>
       </Routes>

    </div>
  );
}


export default App;
