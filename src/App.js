import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Certificate from "./pages/Certificate";
import Achievements from "./pages/Achievements";
import Documents from "./pages/Documents";
import Account from "./pages/Account";
import Referals from "./pages/Referals";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="achievement" element={<Achievements />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="documents" element={<Documents />} />
        <Route path="account" element={<Account />} />
        <Route path="referals" element={<Referals />} />
        <Route path="rewards" element={<Rewards />} />
      </Route>
    </Routes>
  );
}

export default App;
