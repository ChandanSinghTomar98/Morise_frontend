import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Layout from './layouts/Layout';
function App() {
  return (
    <Routes>  {/* Routes component holds all your routes */}
    {/* Layout Route: This will act as the wrapper for all nested routes */}
    <Route path="/" element={<Layout />}>
      {/* Nested Routes */}
      {/* <Route index element={<HomePage />} />  Default route ("/") */}
      {/* <Route path="profile" element={<ProfilePage />} />
      <Route path="aboutus" element={<AboutPage />} />
      <Route path="signup" element={<SignUpPage />} /> */}
      <Route path="signup" element={<Signup/>} />
    </Route>
  </Routes>
  );
}

export default App;
