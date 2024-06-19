import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-center p-4 bg-[#303030] mb-16">
        <h2 className="text-2xl font-[500]">Cap's click </h2>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
