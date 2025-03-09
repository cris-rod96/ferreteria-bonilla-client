import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to={"/inicio-sesion"}>Iniciar sesion</NavLink>
      <NavLink to={"/registro"}>Registro</NavLink>
    </div>
  );
};

export default Home;
