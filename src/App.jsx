import { useState } from "react";

// components
import Dropdown from "./components/Dropdown";

function App() {
	const [selection, setSelection] = useState(null);

	const handleSelect = (option) => {
		setSelection(option);
	};

	const options = [
		{ label: "Red", value: "red" },
		{ label: "Green", value: "green" },
		{ label: "Blue", value: "blue" },
	];

	return (
		<div className="flex m-4 gap-4 flex-wrap justify-center">
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	);
}

export default App;
