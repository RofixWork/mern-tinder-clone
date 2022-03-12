import Header from "./components/Header";
import SwiperButtons from "./components/SwiperButtons";
import TinderCards from "./components/TinderCards";
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-1 grid place-items-center">
        <TinderCards />
      </div>
      <SwiperButtons />
    </div>
  );
}

export default App;
