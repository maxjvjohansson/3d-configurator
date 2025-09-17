import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export function ConfiguratorProvider({ children }) {
  const [material, setMaterial] = useState("plastic");
  const [color, setColor] = useState("blue");
  const [pattern, setPattern] = useState("none");
  const [text, setText] = useState("John Doe");

  return (
    <ConfiguratorContext.Provider
      value={{
        material,
        setMaterial,
        color,
        setColor,
        pattern,
        setPattern,
        text,
        setText,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  return useContext(ConfiguratorContext);
}
