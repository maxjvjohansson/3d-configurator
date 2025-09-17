import Navbar from './components/Navbar/Navbar.jsx'
import Configurator from './components/Configurator/Configurator.jsx'
import ConfiguratorProvider from './context/ConfiguratorContext.jsx'

function App() {
	return (
		<ConfiguratorProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<Configurator />
			</main>
		</ConfiguratorProvider>
	)
}

export default App
