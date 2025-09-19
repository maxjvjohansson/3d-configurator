import Configurator from "../Configurator/Configurator";
import ConfiguratorPanel from "../ConfiguratorPanel/ConfiguratorPanel";
import "./ConfiguratorSection.css";

export default function ConfiguratorSection() {
  return (
    <section className="contentContainer">
      <Configurator />
      <ConfiguratorPanel />
    </section>
  );
}
