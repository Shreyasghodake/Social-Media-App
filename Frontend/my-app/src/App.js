import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UseLogin';
function App() {
  return (
    <div className="App">
     {// <UserRegistration/>
    }
      <UserLogin/>
    </div>
  );
}

export default App;
