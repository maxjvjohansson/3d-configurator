import "./TextInput.css";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function TextInput({
  label = "Text",
  placeholder = "Your text here...",
}) {
  const { text, setText } = useConfigurator();

  return (
    <div className="text-input">
      {label && <label htmlFor="card-text">{label}</label>}
      <input
        id="card-text"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
