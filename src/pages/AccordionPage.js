import Accordion from '../components/Accordion';

function AccordionPage() {
	const items = [
		{
			id: 1,
			label: 'Item 1',
			content: 'Content 1',
		},
		{
			id: 2,
			label: 'Item 2',
			content: 'Content 2',
		},
		{
			id: 3,
			label: 'Item 3',
			content: 'Content 3',
		},
	];

	return (
		<div className="App">
			{/* <ButtonPage></ButtonPage> */}
			<Accordion items={items}></Accordion>
		</div>
	);
}

export default AccordionPage;
