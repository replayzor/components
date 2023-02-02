import { useState } from "react";

function Dropdown({ options }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const handleOptionClick = () => {
		// CLOSE DROPDOWN
		setIsOpen(false);
		// WHAT OPTION DID THE USER CLICK ON?
	};

	const renderedOptions = options.map((option) => {
		return (
			<div onClick={handleOptionClick} key={option.value}>
				{option.label}
			</div>
		);
	});
	return (
		<div>
			<div onClick={handleClick}>Search...</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
}

export default Dropdown;
