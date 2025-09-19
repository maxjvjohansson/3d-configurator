import { colorPick, finishPick } from "../../lib/configOptions";
import PatternSelector from "../PatternSelector/PatternSelector";
import RadioContainer from "../RadioContainer/RadioContainer";
import TextInput from "../TextInput/TextInput";
import "./ConfiguratorPanel.css";

export default function ConfiguratorPanel() {
  return (
    <section className="configPanel">
      <RadioContainer header="Color" name="color" options={colorPick} />
      <PatternSelector header="Pattern" />
      <RadioContainer header="Finish" name="finish" options={finishPick} />
      <TextInput label="Text" placeholder="Your text here..." />
    </section>
  );
}
