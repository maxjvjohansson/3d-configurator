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

	return <primitive object={scene} scale={1.4} position={[0, -1.5, 0]} />
}

export default function Configurator() {
	return (
		<section className="configurator-section">
			<Canvas>
				<ambientLight intensity={1} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
