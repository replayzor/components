import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		// console.log("STALE version of expendedIndex", expandedIndex);
		setExpandedIndex((currentExpendedIndex) => {
			// console.log("UP TO DATE version", currentExpendedIndex);
			if (currentExpendedIndex === nextIndex) {
				return -1;
			} else {
				return nextIndex;
			}
		});
	};

	const renderedItems = items.map((item, index) => {
		const { id, label, content } = item;

		const isExpended = index === expandedIndex;

		const icon = (
			<span className="text-xl">
				{isExpended ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);

		return (
			<div key={id}>
				<h3
					className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
					onClick={() => handleClick(index)}
				>
					{label}
					{icon}
				</h3>
				{isExpended && <p className="border-b p-5">{content}</p>}
			</div>
		);
	});

	return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
