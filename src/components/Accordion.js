import { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1); // 0 - first will be expanded by default, -1  - all collapsed

	const handleClick = (clickedIndex) => {
		setExpandedIndex((currentExpandedIndex) => {
			// currentExpandedIndex is the current value of updated expandedIndex before the render
			if (currentExpandedIndex === clickedIndex) {
				return -1; // collapse the expanded item if it is clicked again
			} else {
				return clickedIndex;
			}
		});
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		/* const content = isExpanded && <div className="content">{item.content}</div>;
		if isExpanded is true, then render the content, if not - render nothing
		(React render only strings, numbers, or components,
		so if you want to render nothing, you can return null, undefined, or false)*/

		const icon = <span>{isExpanded ? <BsChevronLeft /> : <BsChevronDown />}</span>;

		return (
			<div key={item.id}>
				<div
					className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
					onClick={() => {
						handleClick(index);
					}}
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});

	return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
