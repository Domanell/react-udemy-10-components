// import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import Route from './components/Route';
import Link from './components/Link';

function App() {
	return (
		<div className="App">
			{/* route links */}
			<Link to="/accordion">Go to accordion</Link>
			<Link to="/dropdown">Go to dropdown</Link>

			{/* route content */}
			<Route path="/accordion">
				<AccordionPage />
			</Route>
			<Route path="/dropdown">
				<DropdownPage />
			</Route>
			{/* <Route path="/button">
				<ButtonPage />
			</Route> */}
		</div>
	);
}

export default App;
