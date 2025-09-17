import "./Configurator.css";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls, // Camera controls
  Environment, // Easy lighting/HDRI
  ContactShadows, // Ground shadows
  PresentationControls, // Alternative to OrbitControls
  Stage, // Quick scene setup
  Center, // Center objects
  Text, // 3D text
  Html, // HTML overlays in 3D space
  useGLTF, // Load GLTF/GLB models
  useTexture, // Load textures
  Bounds, // Auto-fit camera to objects
  AccumulativeShadows, // Realistic shadows
  RandomizedLight, // Multiple light setup
} from "@react-three/drei";
import * as THREE from "three";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function Configurator() {
  const { material, color, pattern, text } = useConfigurator();
  return (
    <section>
      <div></div>
    </section>
  );
}
