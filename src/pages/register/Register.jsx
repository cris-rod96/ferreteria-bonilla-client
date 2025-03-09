import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { toast, Toaster } from "sonner";
const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((credential) => ({
      ...credential,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentialsExists = Object.values(credentials).every(
      (data) => data !== ""
    );
    if (!credentialsExists) {
      toast.error("Todos los datos son obligatorios");
    }
  };
  return (
    <main className="w-full h-screen overflow-hidden flex flex-row">
      <section className="flex- w-[600px] mx-auto md:[400px] px-5 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="/public/mascota.png" alt="" className="w-32 h-32" />
          <img src="/public/encabezado.png" alt="" />
        </div>
        <form
          action=""
          className="w-full flex flex-col gap-y-5 mt-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xl font-bold">
              Correo electrónico
            </label>
            <div className="flex h-14 bg-white rounded-lg overflow-hidden border border-gray-200 focus-within:border-gray-300">
              <div className="w-[70px] bg-[#fd6c01] h-full flex justify-center items-center">
                <MdEmail size={30} color="white" />
              </div>
              <input
                type="email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                className="flex-1 h-full outline-none px-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xl font-bold">
              Contraseña
            </label>
            <div className="flex h-14 bg-white rounded-lg overflow-hidden border border-gray-200 focus-within:border-gray-300">
              <div className="w-[70px] bg-[#fd6c01] h-full flex justify-center items-center">
                <MdLock size={30} color="white" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="flex-1 h-full outline-none px-2"
              />
              <button
                type="button"
                className="w-[70px] h-full flex justify-center items-center cursor-pointer"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <FaEye size={25} color="#bdbdbd" />
                ) : (
                  <FaEyeSlash size={25} color="#bdbdbd" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#fd6c01] text-lg uppercase font-bold text-white py-4 flex justify-center items-center rounded-lg hover:bg-[#cb4d03] transition-colors cursor-pointer"
          >
            Iniciar sesión
          </button>
        </form>
      </section>

      <Toaster richColors position="bottom-right" />
    </main>
  );
};

export default Register;
