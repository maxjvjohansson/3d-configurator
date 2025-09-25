import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Text, Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { pattern, color, finish, text } = useConfigurator()
	const modelPath = `/credit_card/${pattern}/${pattern}_${color}/${pattern}_${color}.gltf`

	console.log('Loading model:', modelPath)

	const { scene, materials } = useGLTF(modelPath)

	useEffect(() => {
		Object.values(materials).forEach((material) => {
			if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
				if (finish === 'matte') {
					material.metalness = 0
					material.roughness = 1
					material.envMapIntensity = 0.1
				} else if (finish === 'glossy') {
					material.metalness = 0.1
					material.roughness = 0.2
					material.envMapIntensity = 1
				} else if (finish === 'metallic') {
					material.metalness = 0.9
					material.roughness = 0.1
					material.envMapIntensity = 0.8
				}

				material.needsUpdate = true
			}
		})
	}, [materials, finish])

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
	)
}

export default function Configurator() {
	return (
		<section className="configurator-section">
			<Canvas>
				<Environment preset="warehouse" environmentIntensity={0.5} />
				<directionalLight position={[-3, 2, -5]} intensity={4} />
				<directionalLight position={[2, 1, 2]} intensity={3} />
				<CreditCard />
				<OrbitControls minDistance={3} maxDistance={15} />
			</Canvas>
		</section>
	)
}
