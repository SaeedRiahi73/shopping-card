import Navbar from "../components/navbar/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto bg-white dark:bg-gray-900">
      <div className="flex-col">
        <div>
          <Navbar />
        </div>
        <div
          dir="rtl"
          className="max-w-screen-xl mt-[69px] lg:px-4 mx-auto dark:text-white"
        >
          body
        </div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default MainLayout;
