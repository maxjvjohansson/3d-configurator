import Navbar from "./components/Navbar/Navbar.jsx";
import Configurator from "./components/Configurator/Configurator.jsx";
import ConfiguratorProvider from "./context/ConfiguratorContext.jsx";
import TextInput from "./components/TextInput/TextInput.jsx";
import { colorPick } from "./lib/configOptions.js";
import RadioContainer from "./components/RadioContainer/RadioContainer.jsx";
function App() {
  return (
    <ConfiguratorProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Configurator />
        <TextInput label="Text" placeholder="Your text here..." />
        <RadioContainer header="Color" name="color" options={colorPick} />
      </main>
    </ConfiguratorProvider>
  );
}

export default App;
