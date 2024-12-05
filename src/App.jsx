import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import './App.css';

function App() {
	const [location, setLocation] = useFetch();
	const [locationId, setLocationId] = useState(3);

	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);

	return (
		<div>
			<div className="hero" />
			<div className="container">
				<Search setLocationId={setLocationId} />
				<CardInfo location={location} />
				<ResidentsList residents={location?.residents} />
			</div>
		</div>
	);
}

export default App;
