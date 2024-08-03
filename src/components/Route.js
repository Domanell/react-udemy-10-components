import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
	const { currentPath } = useNavigation();

	// Filter to show children component of current path
	if (path === currentPath) {
		// Page content
		return children;
	}

	return null;
}

export default Route;
