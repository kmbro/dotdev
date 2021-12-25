import './app.css';

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-scroll w-screen h-screen font-mono bg-white snap-y snap-mandatory dark:bg-slate-700 dark:text-slate-200">
      <div className="flex flex-col justify-center items-center w-screen h-screen snap-start">
        <div className="typewriter">
          <h1 className="pb-1 text-5xl">Hi, I am Kyle</h1>
        </div>
        <span className="mt-6 text-xl motion-safe:animate-bounce text-slate-300 dark:text-slate-400">Scroll</span>
      </div>
      <div className="flex p-4 w-screen h-screen snap-start bg-orange-300 dark:bg-sky-900">
        <div className="typewriter">
          <h1 className="pb-1 text-5xl">Page 2</h1>
        </div>
      </div>
      <div className="flex p-4 w-screen h-screen snap-start">
        <div className="typewriter">
          <h1 className="pb-1 text-5xl">Page 3</h1>
        </div>
      </div>
      <div className="flex p-4 w-screen h-screen snap-start bg-orange-300 dark:bg-sky-900">
        <div className="typewriter">
          <h1 className="pb-1 text-5xl">Page 4</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
