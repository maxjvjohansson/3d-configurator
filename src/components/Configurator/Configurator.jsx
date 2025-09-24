import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Text, Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { pattern, color, finish, text } = useConfigurator()

	console.log('Current pattern value:', pattern) // Debug log
	const modelPath = `../../../credit_card/${pattern || 'none'}/${
		pattern || 'none'
	}.gltf`
	console.log('Attempting to load:', modelPath) // Debug log

	const { scene, materials, nodes } = useGLTF(modelPath)

	const colorMap = {
		blue: '#31417D',
		pink: '#AD5681',
		red: '#8A1D16',
		silver: '#BCB9BB',
		gold: '#CCA149'
	}

	useEffect(() => {
		// Try both "stripes" and "stripe" material names for compatibility
		const materialName = materials['stripes']
			? 'stripes'
			: materials['stripe']
			? 'stripe'
			: materials['patches']
			? 'patches'
			: null

		if (materials[materialName]) {
			const material = materials[materialName]

			// Always set the base color
			material.color.set(colorMap[color])

			// For textured patterns, handle differently based on the pattern
			if (pattern !== 'none') {
				// Set base color to white to let texture show through
				material.color.set('#ffffff')
				// Use emissive for the actual color
				material.emissive.set(colorMap[color])
				material.emissiveIntensity = 0.3
			} else {
				material.emissive.set('#000000')
				material.emissiveIntensity = 0
			}

			// Apply finish settings
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
		}
	}, [color, finish, materials, pattern])

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
				<Environment preset="warehouse" environmentIntensity={0.3} />
				<directionalLight position={[-3, 2, -5]} intensity={6} />
				<directionalLight position={[2, 1, 2]} intensity={6} />
				<CreditCard />
				<OrbitControls minDistance={3} maxDistance={15} />
			</Canvas>
		</section>
	)
}
