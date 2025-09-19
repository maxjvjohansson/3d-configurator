import { colorPick, finishPick } from "../../lib/configOptions";
import RadioContainer from "../RadioContainer/RadioContainer";
import TextInput from "../TextInput/TextInput";
import "./ConfiguratorPanel.css";

export default function ConfiguratorPanel() {
  return (
    <section className="configPanel">
      <RadioContainer header="Color" name="color" options={colorPick} />
      <div>Pattern goes here</div>
      <RadioContainer header="Finish" name="finish" options={finishPick} />
      <TextInput label="Text" placeholder="Nalle Namnlös" />
    </section>
  );
}
