import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
function App() {
  return (
    <Routes>
      {" "}
      {/* Routes component holds all your routes */}
      {/* Layout Route: This will act as the wrapper for all nested routes */}
      <Route path="/" element={<Layout />}>
        {/* Nested Routes */}
        <Route index element={<Home />} /> Default route ("/")
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="documents" element={<Documents />} />
      </Route>
    </Routes>
  );
}

export default App;
