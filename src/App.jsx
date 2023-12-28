import "./App.css";

function App() {
  return (
    <>
    <div className="pl-[200px] pr-[200px] pt-20 pb-20">
      <h2 className="text-3xl mb-3">Todo App</h2>
      <form id="form">
        <div className="flex flex-col w-full pt-3 pb-3 gap-3">
        <input type="text" className="border border-slate-300 rounded-md h-10 hover:shadow-lg pr-2 pl-2" />
        <input type="text" className="border border-slate-300  rounded-md h-10 hover:shadow-lg pr-2 pl-2" />
        </div>
        <h4 className=" w-full font-semibold">Todo</h4>
        <div className="flex flex-col gap-3 pt-2">
        <input type="text" className="border border-slate-300  rounded-md pr-2 pl-2 h-8 hover:shadow-lg" placeholder="Your Todo..."/>
        <button className="border w-20 pt-1 pb-1 font-normal rounded-md hover:shadow-lg border-slate-300 ">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default App;
