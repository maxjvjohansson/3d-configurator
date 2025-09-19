import "./PatternSelector.css";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function ({ header }) {
  const { pattern, setPattern } = useConfigurator();

  const handleChange = (e) => {
    setPattern(e.target.value);
  };

  return (
    <div className="pattern-selector">
      {header && (
        <h2 htmlFor="card-text" className="pattern-header">
          {header}
        </h2>
      )}
      <div className="selector-wrapper">
        <label>
          <input
            type="radio"
            name="pattern"
            value="none"
            checked={pattern === "none"}
            onChange={handleChange}
          />
          <span>None</span>
        </label>
        <label>
          <input
            type="radio"
            name="pattern"
            value="zigzag"
            checked={pattern === "zigzag"}
            onChange={handleChange}
          />
          <span>ZigZag</span>
        </label>
        <label>
          <input
            type="radio"
            name="pattern"
            value="halftone"
            checked={pattern === "halftone"}
            onChange={handleChange}
          />
          <span>Halftone</span>
        </label>
        <label>
          <input
            type="radio"
            name="pattern"
            value="swirly"
            checked={pattern === "swirly"}
            onChange={handleChange}
          />
          <span>Swirly</span>
        </label>
      </div>
    </div>
  );
}
