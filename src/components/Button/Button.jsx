import "./Button.css";

export default function Button({ label, onClick, disabled }) {
  return (
    <button
      className={`button ${disabled ? "button--disabled" : "button--active"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
