import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei' // Added Environment
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { scene, materials, nodes } = useGLTF('../../../credit_card/scene.gltf')
	const { color, finish } = useConfigurator()

	const colorMap = {
		blue: '#446089',
		pink: '#F4B3FF',
		red: '#E17171',
		silver: '#C0C0C0',
		gold: '#FFD700'
	}

	useEffect(() => {
		if (materials['Gold plate1.002']) {
			const material = materials['Gold plate1.002']
			material.color.set(colorMap[color])

			if (finish === 'matte') {
				material.metalness = 0
				material.roughness = 1
				material.reflectivity = 0
			} else if (finish === 'glossy') {
				material.metalness = 0
				material.roughness = 0.05
				material.reflectivity = 1
			} else if (finish === 'holographic') {
				material.metalness = 0.5
				material.roughness = 0.1
				material.reflectivity = 1
			}

			material.needsUpdate = true
		}
	}, [color, finish, materials, colorMap])

	return <primitive object={scene} scale={1.4} position={[0, -1.5, 0]} />
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
	)
}
