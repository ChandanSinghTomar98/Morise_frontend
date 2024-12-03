import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Layout from "./layouts/Layout";
function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const authlocals = localStorage.getItem("authlocal");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ auth, route, component }, index) => {
          if (auth && authlocals) {
            localStorage.removeItem("authlocal");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            return (
              <Route
                key={index}
                path={route}
                element={<Navigate to="/signin" />}
              />
            );
          }
          return <Route key={index} path={route} element={component} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
