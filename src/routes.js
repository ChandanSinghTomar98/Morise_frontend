import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const routes = [
    {
        auth: false,
        role: "user",
        title: "Home",
        Icon: "",
        route: "/",
        component: <Home />,
        bar: true
    },
    {
        auth: false,
        role: "user",
        title: "About",
        Icon: "",
        route: "/about-us",
        component: <About />,
        bar: true
    },
    {
        auth: false,
        role: "user",
        title: "Login",
        Icon: "",
        route: "/login",
        component: <Login />,
        bar: false
    },
    {
        auth: false,
        role: "user",
        title: "SignUp",
        Icon: "",
        route: "/sign-up",
        component: <Signup />,
        bar: false
    },
    {
        auth: true,
        role: "user",
        title: "Home",
        Icon: "",
        route: "/",
        component: <Home />,
        bar: false
    },
    {
        auth: true,
        role: "user",
        title: "Home",
        Icon: "",
        route: "/",
        component: <Home />,
        bar: false
    }
]






{/* <Routes>
<Route path="/" element={<Layout />}>
  Nested Routes 

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
  <Route path="morisecard" element={<MoriseCard />} />
</Route> 
 </Routes> */}