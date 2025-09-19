import "./Configurator.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
function CreditCard() {
  const { scene } = useGLTF("../../../credit_card/scene.gltf");
  return <primitive object={scene} scale={0.032} />;
}

export default function Configurator() {
  return (
    <section className="configurator-section">
      <Canvas>
        <ambientLight intensity={3} />
        <CreditCard />
        <OrbitControls />
      </Canvas>
    </section>
  );
}
