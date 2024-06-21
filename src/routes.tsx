import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Perfil from "./pages/perfil";
import Compare from "./pages/compare";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/compare" element={<Compare />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
