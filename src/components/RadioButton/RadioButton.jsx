import "./RadioButton.css";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function RadioButton({ name, value, label }) {
  const { color, setColor, finish, setFinish } = useConfigurator();

  // Figure out what’s the "current value" for this group
  const selectedValue = name === "color" ? color : finish;

  // Change handler
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
        />
        {label && <label htmlFor={`${name}-${value}`}>{label}</label>}
      </div>
    </div>
  );
}
