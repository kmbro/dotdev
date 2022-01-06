import useOnScreen from 'hooks/use-on-screen';
import { useRef } from 'react';
import './app.css';
import Experience from './Experience';
import Hobbies from './Hobbies';
import NavBar from './NavBar';

function App() {
  const page2 = useRef<any>();
  const page3 = useRef<any>();
  const isVisible2 = useOnScreen(page2);
  const isVisible3 = useOnScreen(page3);

  return (
    <div className="overflow-x-hidden overflow-y-scroll w-screen h-screen font-mono bg-white snap-y snap-mandatory dark:bg-slate-700 dark:text-slate-200">
      <NavBar />
      <div className="flex flex-col justify-center items-center w-screen h-screen snap-start">
        <div className="mt-12 typewriter">
          <h1 className="pb-1 text-5xl">{'>'} Hi, I am Kyle</h1>
        </div>
        <span className="mt-6 text-xl motion-safe:animate-bounce text-slate-300 dark:text-slate-400">Scroll</span>
      </div>
      <div className="flex flex-col p-4 w-screen h-screen snap-start bg-orange-300 dark:bg-sky-900">
        <div ref={page2} className="mt-12 typewriter w-fit">
          {isVisible2 && <h1 className="pb-1 text-5xl">{'>'} experience</h1>}
        </div>
        <Experience />
      </div>
      <div className="flex p-4 w-screen h-screen snap-start terrain">
        <div ref={page3} className="mt-12 typewriter">
          {isVisible3 && <h1 className="pb-1 text-5xl">{'>'} hobbies</h1>}
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App;
