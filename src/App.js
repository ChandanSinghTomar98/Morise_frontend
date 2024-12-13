import { Routes, Route } from "react-router-dom";
import React,{Suspense} from "react";
import { routes } from "./routes";
import Layout from "./layouts/Layout";
//import ProtectedRoute from "./components/ProtectedRoutes";
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoutes"));
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ auth, route, component }, index) => (
          <Route
            key={index}
            path={route}
            element={
              <Suspense>
                <ProtectedRoute component={component} auth={auth} path={route}/>
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
