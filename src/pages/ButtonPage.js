import Button from '../components/Button';

function ButtonPage() {
	return (
		<div className="App">
			<Button primary className="mb-1">
				Primary
			</Button>
			<Button secondary className="mb-1">
				Secondary
			</Button>
			<Button success className="mb-1">
				Success
			</Button>
			<Button warning className="mb-1">
				Warning
			</Button>
			<Button danger className="mb-1">
				Danger
			</Button>
			<Button outline primary className="mb-1">
				Primary
			</Button>
			<Button outline secondary className="mb-1">
				Secondary
			</Button>
			<Button outline success className="mb-1">
				Success
			</Button>
			<Button outline warning className="mb-1">
				Warning
			</Button>
			<Button outline danger className="mb-1">
				Danger
			</Button>
		</div>
	);
}

export default ButtonPage;
