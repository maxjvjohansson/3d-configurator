import Navbar from "./components/Navbar/Navbar.jsx";
import Configurator from "./components/Configurator/Configurator.jsx";
import ConfiguratorProvider from "./context/ConfiguratorContext.jsx";
import TextInput from "./components/TextInput/TextInput.jsx";
import { colorPick, finishPick } from "./lib/configOptions.js";
import RadioContainer from "./components/RadioContainer/RadioContainer.jsx";
import PatternSelector from "./components/PatternSelector/PatternSelector.jsx";
function App() {
  return (
    <ConfiguratorProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Configurator />
        <RadioContainer header="Color" name="color" options={colorPick} />
        <PatternSelector header="Pattern" />
        <RadioContainer header="Finish" name="finish" options={finishPick} />
        <TextInput label="Text" placeholder="Your text here..." />
      </main>
    </ConfiguratorProvider>
  );
}

export default App;
