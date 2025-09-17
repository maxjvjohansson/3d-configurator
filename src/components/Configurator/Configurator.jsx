import './Configurator.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function CreditCard() {
	const { scene } = useGLTF('/models/credit_card/scene.gltf')
	return <primitive object={scene} />
}

export default function Configurator() {
	return (
		<section>
			<Canvas>
				<ambientLight intensity={3} />
				<CreditCard />
				<OrbitControls />
			</Canvas>
		</section>
	)
}
