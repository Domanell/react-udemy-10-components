import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Route({ path, children }) {
	const { currentPath } = useContext(NavigationContext);

	// Filter to show children component of current path
	if (path === currentPath) {
		return children;
	}

	return null;
}

export default Route;
