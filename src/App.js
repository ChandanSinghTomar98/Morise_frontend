import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./components/ProtectedRoutes";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ auth, route, component }, index) => (
          <Route
            key={index}
            path={route}
            element={<ProtectedRoute component={component} auth={auth} />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
