import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const eventHandler = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', eventHandler);

		return () => {
			window.removeEventListener('popstate', eventHandler);
		};
	}, []);

	const navigate = (to) => {
		window.history.pushState({}, '', to);
		setCurrentPath(to);
	};

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			{currentPath}
			{children}
		</NavigationContext.Provider>
	);
}

export { NavigationProvider };
export default NavigationContext;
