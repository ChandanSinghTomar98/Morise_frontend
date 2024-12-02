import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Layout from "./layouts/Layout";
function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ auth, route, component }, index) => {
          if (auth && !isAuthenticated) {
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
