import Navbar from "../components/navbar/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-col">
        <div>
          <Navbar />
        </div>
        <div dir="rtl" className="mt-[69px] lg:px-[145px]">
          body
        </div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default MainLayout;
