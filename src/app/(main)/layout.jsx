import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
