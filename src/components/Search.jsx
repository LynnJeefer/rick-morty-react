import { useRef, useState } from 'react';
import './../styles/Search.css';

function Search({ setLocationId }) {
	const [error, setError] = useState('');
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const id = parseInt(inputRef.current.value);

		if (isNaN(id)) {
			setError('❌ Invalid number');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		if (id < 1 || id > 126) {
			setError('❌ Hey! you must provide an id from 1 yo 126');

			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}
		setLocationId(id);
		e.target.reset();
	};

	return (
		<>
			<form onSubmit={onSubmit} className="search">
				<input ref={inputRef} type="text" className="search__input" />
				<button className="search__btn">Search</button>
				<p className="search__error">{error && error}</p>
			</form>
		</>
	);
}

export default Search;
