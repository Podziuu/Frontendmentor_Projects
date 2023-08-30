import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center w-full h-screen">
      <Result />
      <Summary />
    </div>
  );
}

export default App;
