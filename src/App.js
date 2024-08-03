import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap4 mt-4">
			{/* route links */}
			<Sidebar />

			{/* page content */}
			<div className="col-span-5">
				<Route path="/accordion">
					<AccordionPage />
				</Route>
				<Route path="/">
					<DropdownPage />
				</Route>
				<Route path="/buttons">
					<ButtonPage />
				</Route>
			</div>
		</div>
	);
}

export default App;
