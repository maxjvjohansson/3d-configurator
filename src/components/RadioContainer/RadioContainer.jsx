import RadioButton from "../RadioButton/RadioButton.jsx";
import "./RadioContainer.css";

export default function RadioContainer({ header, name, options }) {
  return (
    <div className="radioContainer">
      <h2>{header}</h2>
      <div className="radioGroup">
        {Object.entries(options).map(([key, { label, fillColor }]) => (
          <RadioButton
            key={key}
            name={name}
            value={label.toLowerCase()}
            label={label}
            fillColor={fillColor}
          />
        ))}
      </div>
    </div>
  );
}
