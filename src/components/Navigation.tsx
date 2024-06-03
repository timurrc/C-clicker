import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="text-center py-4 text-2xl font-sans font-semibold">
        Clicker
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
