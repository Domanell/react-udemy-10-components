import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children, className, activeClassName }) {
	// Get navigate function from context (NavigationContext in navigation)
	const { navigate, currentPath } = useNavigation();

	// Set class name, inherit className, and ste active class if currentPath (active page) is equal to this link path
	const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

	const handlerClick = (event) => {
		// Check if CTRL is pressed. Return if true, it'll be opened in a new tab
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		// call navigate callback from navigation with 'to' param
		navigate(to);
	};

	return (
		<a onClick={handlerClick} href={to} className={classes}>
			{children}
		</a>
	);
}

export default Link;
