import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar.tsx";
import Hero from "./components/UI/Hero/Hero.tsx"

function App() {

  return (
    <div className="dark:bg-slate-900 dark:text-slate-100 min-h-screen">
      <Navbar />

      <div className="pt-14" />
      {/*<div className="h-38  bg-[length:100%_100%]" />*/}
      <div className="h-40 bg-[linear-gradient(135deg,_#a8e6cf_0%,_#a8e6cf_40%,_#a0e7ff_100%)] dark:bg-[linear-gradient(135deg,_#204e43_0%,_#204e43_40%,_#16495c_100%)] bg-[length:100%_100%]"></div>

      <main className="max-w-3xl mx-auto">
        <section className="">
          <Hero />
        </section>

        <section className="pt-8 text-neutral-500 dark:text-neutral-400">
          <h1 className="font-semibold text-gray-700 dark:text-white">Header 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>
      </main>
    </div>
  )
}

export default App
