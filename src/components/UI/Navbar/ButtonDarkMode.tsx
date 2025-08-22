import type { ReactNode, MouseEventHandler } from "react";

type ButtonModeProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const ButtonDarkMode = ({ children, onClick}: ButtonModeProps) => {
  return (
    <>
      <div onClick={onClick}
           className={`cursor-pointer border rounded-lg border-zinc-200 p-2.5 hover:bg-zinc-200 dark:text-slate-200 dark:bg-slate-800 dark:border-zinc-600 dark:hover:bg-slate-700`}>

        {children}
      </div>
    </>
  )
}

export default ButtonDarkMode