import {
  CodeBracketIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-4 my-4 bg-gradient-to-r from-gray-200 from-90%  dark:bg-gradient-to-r dark:from-gray-950 dark:from-1%  rounded-xl">
      <div
        className="transition ease-in-out delay-150 flex justify-center items-center h-16 gap-2 w-36 
       bg-gradient-to-l from-gray-300 from-10% dark:bg-gradient-to-l dark:from-gray-500 dark:from-10% 
       rounded-xl dark:text-white font-black m-2  "
      >
        <CodeBracketIcon className="h-8 w-8" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-indigo-400 dark:from-indigo-500 dark:to-gray-100">
          {` { devcool } `}
        </span>
      </div>
      <label
        htmlFor="toggleTwo"
        className="flex items-center gap-1 cursor-pointer select-none text-dark dark:text-white mx-6"
      >
        <MoonIcon className="h-6 w-6" />
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            value=""
            className="sr-only peer"
          />
          <div className="block h-8 rounded-full bg-gray-300 dark:bg-gray-400  w-14"></div>
          <div className="absolute w-6 h-6 transition bg-white rounded-full dot dark:bg-dark-400 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
        </div>
        <SunIcon className="h-6 w-6" />
      </label>
    </nav>
  );
};
