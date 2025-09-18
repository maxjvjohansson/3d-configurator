import Navbar from "./components/Navbar/Navbar.jsx";
import Configurator from "./components/Configurator/Configurator.jsx";
import ConfiguratorProvider from "./context/ConfiguratorContext.jsx";
import TextInput from "./components/TextInput/TextInput.jsx";

function App() {
  return (
    <ConfiguratorProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Configurator />
        <TextInput label="Text" placeholder="Your text here..." />
      </main>
    </ConfiguratorProvider>
  );
}

export default App;
