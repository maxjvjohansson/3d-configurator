import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Text, Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { pattern, color, finish, text } = useConfigurator()

	const modelPath = `../../../credit_card/${pattern || 'none'}.glb`
	const { scene, materials, nodes } = useGLTF(modelPath)

	const colorMap = {
		blue: '#31417D',
		pink: '#AD5681',
		red: '#8A1D16',
		silver: '#BCB9BB',
		gold: '#CCA149'
	}

	useEffect(() => {
		const materialName = Object.keys(materials).find(
			(name) => name.startsWith('Grund') || name.startsWith('Grud') //Adjusting for spelling error in glb file
		)

		if (materials[materialName]) {
			const material = materials[materialName]

			material.color.set(colorMap[color])

			if (finish === 'matte') {
				material.metalness = 0
				material.roughness = 1
				material.envMapIntensity = 0
			} else if (finish === 'shiny') {
				material.metalness = 0.1
				material.roughness = 0.3
				material.envMapIntensity = 1
			} else {
				material.metalness = 0.8
				material.roughness = 0.1
				material.envMapIntensity = 0
			}

			material.needsUpdate = true
		} else {
			console.warn(
				'Main card material not found. Available:',
				Object.keys(materials)
			)
		}
	}, [color, finish, materials]) // Removed colorMap from dependencies

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
