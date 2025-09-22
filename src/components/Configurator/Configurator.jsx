import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei' // Added Environment
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { scene, materials, nodes } = useGLTF('../../../credit_card/scene.gltf')
	const { color, finish } = useConfigurator()

	const colorMap = {
		blue: '#415797',
		pink: '#B565A7',
		red: '#a23a3f',
		silver: '#A3A8B0',
		gold: '#bea75b'
	}

	useEffect(() => {
		if (materials['Rosa']) {
			const material = materials['Rosa']

			material.color.set(colorMap[color])

			if (finish === 'matte') {
				material.metalness = 0
				material.roughness = 0.9
				material.clearcoat = 0
				material.clearcoatRoughness = 1
				material.reflectivity = 0.1
			} else if (finish === 'shiny') {
				material.metalness = 0
				material.roughness = 0.05
				material.clearcoat = 1
				material.clearcoatRoughness = 0
				material.reflectivity = 1
			} else if (finish === 'metallic') {
				material.metalness = 1
				material.roughness = 0.3
				material.clearcoat = 0
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
				<Environment
					preset="forest"
					backgroundIntensity={0.5}
					environmentIntensity={0.5}
				/>
				<ambientLight intensity={0.8} />
				<directionalLight position={[5, 8, 5]} intensity={0.8} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
