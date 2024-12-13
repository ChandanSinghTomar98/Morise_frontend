import MoriseCard from "./components/MoriseCard";
import QueryForm from "./components/QueryForm";
import About from "./pages/About";
import Account from "./pages/Account";
import Achievements from "./pages/Achievements";
import Certificate from "./pages/Certificate";
import Documents from "./pages/Documents";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Referals from "./pages/Referals";
import Rewards from "./pages/Rewards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment"
export const routes = [
  {
    auth: false,
    role: "user",
    title: "Home",
    Icon: "",
    route: "/",
    component: Home,
    bar: false,
  },
  {
    auth: false,
    role: "user",
    title: "Payment",
    Icon: "",
    route: "/payment",
    component: Payment ,
    bar: false,
  },
  {
    auth: false,
    role: "user",
    title: "About",
    Icon: "",
    route: "/about",
    component: About,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "Profile",
    Icon: "",
    route: "/profile",
    component: Profile,
    bar: false,
  },
  {
    auth: false,
    role: "user",
    title: "Achievements",
    Icon: "",
    route: "/achievements",
    component: Achievements,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "Certificates",
    Icon: "",
    route: "/certificate",
    component: Certificate,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "Documents",
    Icon: "",
    route: "/documents",
    component: Documents,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "Account",
    Icon: "",
    route: "/account",
    component: Account,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "referals",
    Icon: "",
    route: "/referals",
    component: Referals,
    bar: false,
  },
  {
    auth: true,
    role: "user",
    title: "rewards",
    Icon: "",
    route: "/rewards",
    component: Rewards,
    bar: false,
  },
  {
    auth: false,
    role: "user",
    title: "Morise Card",
    Icon: "",
    route: "/morisecard",
    component: MoriseCard,
  },
  {
    auth: false,
    role: "user",
    title: "Query Form",
    Icon: "",
    route: "/queryForm",
    component: QueryForm,
  },
  {
    auth: false,
    role: null,
    title: "Sign In",
    Icon: "",
    route: "/signin",
    component: Login,
  },
  {
    auth: false,
    role: null,
    title: "Sign Up",
    Icon: "",
    route: "/signup",
    component: Signup,
  },
];
