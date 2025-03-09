import { Route, Routes } from "react-router-dom";
import { Login, Register, Home } from "./pages/index.pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio-sesion" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
