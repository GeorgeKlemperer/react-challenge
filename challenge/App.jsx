import Greeting from "./Greeting.jsx";
import Shouter from "./Shouter.jsx";
import MouseTracker from "./MouseTracker.jsx";

function App() {
  return (
    <main>
      <Greeting name="George" />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;