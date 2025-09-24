import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Text, Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { pattern, color, finish, text } = useConfigurator()
	const { scene, materials, nodes } = useGLTF(
		`../../../credit_card/${pattern}.gltf`
	)

	const colorMap = {
		blue: '#31417D',
		pink: '#AD5681',
		red: '#8A1D16',
		silver: '#BCB9BB',
		gold: '#CCA149'
	}

	useEffect(() => {
		if (materials['Rosa']) {
			const material = materials['Rosa']

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
		}
	}, [color, finish, materials])

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
				<Environment preset="warehouse" environmentIntensity={0.8} />
				<directionalLight position={[-3, 2, -5]} intensity={4} />
				<directionalLight position={[2, 1, 2]} intensity={3} />
				<CreditCard />
				<OrbitControls minDistance={2} maxDistance={6} />
			</Canvas>
		</section>
	)
}
