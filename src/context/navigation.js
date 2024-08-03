import { createContext, useState, useEffect } from 'react';

// Create context
const NavigationContext = createContext();

// Context Provider
function NavigationProvider({ children }) {
	// Current location path. Set default value from window.location.pathname on init (page load)
	// Updating state will call the children rerender, that's why we use it
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	// Create and remove event listeners on back/forward browser buttons click
	useEffect(() => {
		const eventHandler = () => {
			// Set current location path to currentPath state
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', eventHandler);

		return () => {
			window.removeEventListener('popstate', eventHandler);
		};
	}, []);

	// Callback function to push a new state (location) into history and update currentPath state
	const navigate = (to) => {
		window.history.pushState({}, '', to);
		setCurrentPath(to); // Will call rerender
	};

	// Return children which is wrapped by context provider.
	// Provider shares value (currentPath and navigate) with children component.
	return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}</NavigationContext.Provider>;
}

export { NavigationProvider };
export default NavigationContext;
