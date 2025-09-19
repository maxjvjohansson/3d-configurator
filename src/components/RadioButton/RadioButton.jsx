import "./RadioButton.css";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function RadioButton({ name, value, label, fillColor }) {
  const { color, setColor, finish, setFinish } = useConfigurator();

  const selectedValue = name === "color" ? color : finish;

  const handleChange = (e) => {
    if (name === "color") {
      setColor(e.target.value);
    } else if (name === "finish") {
      setFinish(e.target.value);
    }
  };

  return (
    <div className="radioInput">
      <div className="radioBtn">
        <input
          id={`${name}-${value}`}
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={handleChange}
          style={{ "--radio-fill": fillColor }}
        />
        {label && <label htmlFor={`${name}-${value}`}>{label}</label>}
      </div>
    </div>
  );
}
