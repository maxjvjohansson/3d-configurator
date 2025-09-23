import "./Configurator.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Text } from "@react-three/drei";
import { useEffect } from "react";
import { useConfigurator } from "../../context/ConfiguratorContext";
import { useGradientTexture } from "../../hooks/useGradientTexture";

function CreditCard() {
  const { scene, materials, nodes } = useGLTF(
    "../../../credit_card/scene.gltf"
  );
  const { color, finish, text } = useConfigurator();

  const colorMap = {
    blue: { type: "color", value: "#446089" },
    pink: { type: "color", value: "#F4B3FF" },
    red: { type: "color", value: "#E17171" },
    silver: { type: "gradient", value: ["#616060ff", "#b0b0b0ff"] },
    gold: { type: "gradient", value: ["#80600eff", "#e5b014ff"] },
  };

  const config = colorMap[color];

  // Always call hook, but pass defaults if not a gradient
  const gradientTexture = useGradientTexture(
    config.type === "gradient" ? config.value[0] : "#000000",
    config.type === "gradient" ? config.value[1] : "#000000"
  );

  useEffect(() => {
    if (materials["Gold plate1.002"]) {
      const material = materials["Gold plate1.002"];

      if (config.type === "color") {
        // flat colors
        material.color.set(config.value);
        material.map = null;

        if (finish === "matte") {
          material.metalness = 0;
          material.roughness = 1;
        } else if (finish === "glossy") {
          material.metalness = 0;
          material.roughness = 0.05;
        } else if (finish === "holographic") {
          material.metalness = 0.5;
          material.roughness = 0.1;
        }
        //modifies metalness and rougness if silver or gold is selected
      } else if (config.type === "gradient") {
        material.map = gradientTexture;
        material.color.set("#ffffff"); // so gradient shows

        if (finish === "matte") {
          material.metalness = 0.7;
          material.roughness = 0.5;
        } else if (finish === "glossy") {
          material.metalness = 0.9;
          material.roughness = 0.2;
        } else if (finish === "holographic") {
          material.metalness = 1.0;
          material.roughness = 0.1;
        }

      }

      material.needsUpdate = true;
    }
  }, [color, finish, materials, gradientTexture, config]);

  return (
    <group scale={1.4} position={[0, -1.5, 0]}>
      <primitive object={scene} />

      <Text
        position={[-2.38, -0.1, 0.132]}
        fontSize={0.175}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export default function Configurator() {
  return (
    <section className="configurator-section">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 1, 10]} intensity={1.5} castShadow />
        <spotLight
          position={[5, 0, 5]}
          angle={0.5}
          intensity={0.8}
          target-position={[0, 0, 0]}
        />
        <CreditCard />
        <OrbitControls />
      </Canvas>
    </section>
  );
}
