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
			const originalMaterial = materials['Rosa']
			let workingMaterial = originalMaterial.clone()

			workingMaterial.color.set(colorMap[color])

			if (finish === 'matte') {
				workingMaterial.metalness = 0
				workingMaterial.roughness = 1
			} else if (finish === 'shiny') {
				workingMaterial.metalness = 0
				workingMaterial.roughness = 0.1
			} else if (finish === 'metallic') {
				workingMaterial.metalness = 1
				workingMaterial.roughness = 0.2
			}

			if (nodes['KORT_front']) {
				nodes['KORT_front'].material = workingMaterial
			}
		}
	}, [color, finish, materials, nodes, colorMap])

	return <primitive object={scene} scale={1.4} position={[0, -1.5, 0]} />
}

export default function Configurator() {
	const { finish } = useConfigurator()

	return (
		<section className="configurator-section">
			<Canvas>
				{finish === 'metallic' && (
					<Environment
						preset="studio"
						background={false}
						environmentIntensity={0.3}
					/>
				)}
				<ambientLight intensity={1.5} />
				<directionalLight position={[3, 5, 8]} intensity={2} />
				<directionalLight position={[-3, 3, 5]} intensity={0.8} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
