import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export default function ConfiguratorProvider({ children }) {
  const [color, setColor] = useState("blue");
  const [pattern, setPattern] = useState("none");
  const [finish, setFinish] = useState("matte");
  const [text, setText] = useState("John Doe");

  return (
    <ConfiguratorContext.Provider
      value={{
        color,
        setColor,
        pattern,
        setPattern,
        finish,
        setFinish,
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
