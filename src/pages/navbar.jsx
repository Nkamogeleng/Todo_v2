import useContextGetter from '../pages/useContext';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const {
		dispatch,
		state: { isUserLoggedIn },
	} = useContextGetter();
	const location = useLocation();

	const logout = () => {
		dispatch({
			type: 'LOGOUT',
		});
	};

	const renderNav = () => {
		if (!isUserLoggedIn && location.pathname === '/login') {
			return (
				<>
					<Link to='/register'>Register</Link>
				</>
			);
		}

		if (!isUserLoggedIn && location.pathname === '/register') {
			return (
				<>
					<Link to='/login'>Login</Link>
				</>
			);
		}

		if (isUserLoggedIn) {
			return (
				<>
					<Link to='/shopping-list'>My List</Link>
					<br />
					<span onClick={logout}>Logout</span>
				</>
			);
		}
	};

	return <nav>{renderNav()}</nav>;
}

export default Navbar;
  
// import useContextGetter from './useContext.jsx';
// import { Link } from 'react-router-dom';

// function Navbar() {
// 	const context = useContextGetter();

// 	const logout = () => {
// 		context.dispatch({
// 			type: 'LOGOUT',
// 		});
// 	};

// 	return (
// 		<nav>
// 			{context.state.isUserLoggedIn ? (
// 				<>
// 					<Link to='/todo'>My Todo</Link>
// 					<br />
// 					<span onClick={logout}>Logout</span>
// 				</>
// 			) : (
// 				<>
// 					<Link to='/login'>Login</Link>
// 					<br />
// 					<Link to='/register'>Register</Link>
// 					<br />
// 				</>
// 			)}
// 		</nav>
// 	);
// }

// export default Navbar;