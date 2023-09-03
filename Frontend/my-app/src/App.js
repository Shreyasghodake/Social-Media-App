import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UseLogin';
import Home from "./components/Home";
import Layout from './components/Layout';
import NoPage from './components/Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="register" element={<UserRegistration />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
