import "./Configurator.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Text, Environment } from "@react-three/drei";
import { useEffect } from "react";
import { useConfigurator } from "../../context/ConfiguratorContext";

function CreditCard() {
  const { pattern, color, finish, text } = useConfigurator();
  const modelPath = `/credit_card/${pattern}/${pattern}_${color}/${pattern}_${color}.gltf`;
  const { scene, materials } = useGLTF(modelPath);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
        if (finish === "matte") {
          material.metalness = 0;
          material.roughness = 1;
          material.envMapIntensity = 0.1;
        } else if (finish === "glossy") {
          material.metalness = 0.1;
          material.roughness = 0.2;
          material.envMapIntensity = 1;
        } else if (finish === "metallic") {
          material.metalness = 0.9;
          material.roughness = 0.1;
          material.envMapIntensity = 0.8;
        }

        material.needsUpdate = true;
      }
    });
  }, [materials, finish]);

  return (
    <group scale={1.4} position={[0, -1.5, 0]}>
      <primitive object={scene} />

      <Text
        position={[-2.36, -0.1, -0.0711]}
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
  const { finish } = useConfigurator();

  let environmentIntensity, lightIntensity1, lightIntensity2;

  if (finish === "matte") {
    environmentIntensity = 0.3;
    lightIntensity1 = 1;
    lightIntensity2 = 1;
  } else if (finish === "glossy") {
    environmentIntensity = 0.4;
    lightIntensity1 = 3;
    lightIntensity2 = 3;
  } else if (finish === "metallic") {
    environmentIntensity = 0.8;
    lightIntensity1 = 4;
    lightIntensity2 = 4;
  }

  return (
    <section className="configurator-section">
      <Canvas>
        <Environment
          preset="warehouse"
          environmentIntensity={environmentIntensity}
        />
        <directionalLight position={[-3, 2, -5]} intensity={lightIntensity1} />
        <directionalLight position={[2, 1, 2]} intensity={lightIntensity2} />
        <CreditCard />
        <OrbitControls minDistance={3} maxDistance={15} />
      </Canvas>
    </section>
  );
}
