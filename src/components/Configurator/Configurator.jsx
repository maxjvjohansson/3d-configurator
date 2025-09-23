import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useConfigurator } from '../../context/ConfiguratorContext'

function CreditCard() {
	const { scene, materials, nodes } = useGLTF('../../../credit_card/scene.gltf')
	const { color, finish } = useConfigurator()

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
	}, [color, finish, materials, colorMap])

	return <primitive object={scene} scale={1.4} position={[0, -1.5, 0]} />
}

export default function Configurator() {
	return (
		<section className="configurator-section">
			<Canvas>
				<Environment preset="warehouse" environmentIntensity={0.5} />
				<directionalLight position={[-3, 2, -5]} intensity={4} />
				<directionalLight position={[2, 1, 2]} intensity={3} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
