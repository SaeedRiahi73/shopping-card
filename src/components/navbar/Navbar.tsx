import { useState, useEffect } from "react";
const Navbar: React.FC = () => {
  const [menuBurger, setMenuBurger] = useState<boolean>(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="text-gray-500 dark:text-white  p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setMenuBurger((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          dir="rtl"
          className={`items-center justify-start ${
            menuBurger ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                سبد خرید
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                درباره ما
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
{
  /* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
<div className="max-w-screen-xl flex flex-wrap flex-row items-center justify-between mx-auto p-4">
  {/* لوگو در سمت چپ */
}
// <div className="flex">
//   <a
//     href="#"
//     className="flex items-center space-x-3 rtl:space-x-reverse md:order-1"
//   >
//     <img
//       src="https://flowbite.com/docs/images/logo.svg"
//       className="h-8"
//       alt="Flowbite Logo"
//     />
//     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//       Shopping Cards
//     </span>
//   </a>
// </div>
{
  /* دکمه منو (موبایل) */
}
// <div className="flex md:hidden md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
//   <button
//     data-collapse-toggle="navbar-sticky"
//     type="button"
//     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//     aria-controls="navbar-sticky"
//     aria-expanded="false"
//     onClick={() => setMenuBurger((prev) => !prev)}
//   >
//     <span className="sr-only">Open main menu</span>
//     <svg
//       className="w-5 h-5"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 17 14"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M1 1h15M1 7h15M1 13h15"
//       />
//     </svg>
//   </button>
// </div>
{
  /* منو (لینک‌ها) */
}
//   <div
//     className={`items-center justify-start ${
//       menuBurger ? "" : "hidden"
//     } w-full md:flex md:w-auto md:order-1`}
//     id="navbar-sticky"
//   >
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a
//           href="#"
//           className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//         >
//           سبد خرید
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div className="flex">
//     <button
//       onClick={() => setDarkMode((prev) => !prev)}
//       className="text-gray-500 dark:text-white  p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//     >
//       {darkMode ? "🌙" : "☀️"}
//     </button>
//   </div>
// </div>
// </nav> */}
