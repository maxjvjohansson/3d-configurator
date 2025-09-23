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
		console.log('Available materials:', Object.keys(materials))
		console.log('Available nodes:', Object.keys(nodes))

		if (nodes['KORT_front']) {
			console.log('KORT_front material:', nodes['KORT_front'].material.name)
		}
	}, [materials, nodes])

	return <primitive object={scene} scale={1.4} position={[0, -1.5, 0]} />
}

export default function Configurator() {
	return (
		<section className="configurator-section">
			<Canvas>
				<ambientLight intensity={1} />
				<directionalLight position={[3, 2, 5]} intensity={8} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
