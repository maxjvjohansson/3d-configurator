import Navbar from "./components/Navbar/Navbar.jsx";
import ConfiguratorProvider from "./context/ConfiguratorContext.jsx";

function App() {
  return (
    <ConfiguratorProvider>
      <header>
        <Navbar />
      </header>
      <main></main>
    </ConfiguratorProvider>
  );
}

export default App;
