import { InputTodo } from './components/InputTodo';
import bgMobileLight from './assets/bg-mobile-light.jpg';
import moonIcon from './assets/icon-moon.svg';

function App() {
  return (
    <div className="flex flex-col items-center justify-center font-josefin-sans">
      <img src={bgMobileLight} alt="" className="absolute top-0 z-[-1]" />
      <div className="flex items-center w-[100%] mt-10 justify-between px-6">
        <h1 className="text-white tracking-[0.5rem] text-[1.5rem]">TODO</h1>

        <img src={moonIcon} alt="turn dark on" width={20} />
      </div>
      <InputTodo />
    </div>
  );
}

export default App;
