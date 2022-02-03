import { useRef, useEffect } from 'react';
import './App.scss';

function App() {

	const pianoElem = useRef(null);
	const contents = useRef(null);

	// class JavaScript function
	const showIt = () => {
		if (contents.current.innerHTML === '') {
			contents.current.innerHTML = 'succeeded';
		} else {
			contents.current.innerHTML = '';
		}
	}

	useEffect(() => {

		// make classic DOM element
		const para = document.createElement("p");
		para.innerText = "click this text";
		para.classList.add('clickText');

		// attach DOM element to page 
		pianoElem.current.appendChild(para);

		// manipulate DOM element
		pianoElem.current.style.color = 'red';

		// attach even to DOM element
		pianoElem.current.addEventListener("click", showIt)

	}, []);

	return (
		<div className="App">
			<h1>Testing DOM access from React with useRef</h1>
			<div ref={pianoElem}></div>
			<div ref={contents}></div>
		</div>
	);
}

export default App;