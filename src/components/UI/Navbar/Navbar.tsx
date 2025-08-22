import ButtonDarkMode from "./ButtonDarkMode.tsx";
import {useEffect, useState} from "react";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => setDarkMode(prev => !prev)

    useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode])

  return (
    <nav className={`h-14 flex px-8 fixed bg-stone-50/60 w-full border-b-[1px] border-b-neutral-300/50 backdrop-blur-sm dark:bg-slate-950 dark:border-b-zinc-800`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <h2 className={`dark:text-white`}>Z <span className="text-emerald-500 font-semibold dark:text-emerald-300">Vue 3</span> do <span className="text-sky-600 font-semibold dark:text-sky-300">React.js 19</span></h2>

        <div className="flex">
          <ButtonDarkMode onClick={toggleDarkMode} >
            { darkMode ?  <LuSun /> : <LuMoonStar /> }
          </ButtonDarkMode>
        </div>
      </div>
    </nav>
  )
}

export default Navbar