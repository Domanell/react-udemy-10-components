import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

function Link({ to, children }) {
	// Get navigate function from context (NavigationContext in navigation)
	const { navigate } = useContext(NavigationContext);

	const classes = classNames('text-blue-500');

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
