import Navbar from "./components/Navbar/Navbar.jsx";
import ConfiguratorProvider from "./context/ConfiguratorContext.jsx";
import ConfiguratorSection from "./components/ConfiguratorSection/ConfiguratorSection.jsx";

function App() {
  return (
    <ConfiguratorProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <ConfiguratorSection />
      </main>
    </ConfiguratorProvider>
  );
}

export default App;
