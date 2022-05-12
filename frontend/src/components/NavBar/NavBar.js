import { Link } from 'react-router-dom';
import Style from './NavBar.module.css';
const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">ראשי</Link>
				</li>
				<li>
					<Link to="/CreatingGarden">הקמת גינה</Link>
				</li>
				<li>
					<Link to="/About">אודות</Link>
				</li>
				<li>
					<Link to="/Galery">גלריה</Link>
				</li>
				<li>
					<Link to="/Contact">יצירת קשר</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
