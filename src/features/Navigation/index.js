import { toAuthor, toTasks } from '../../routes';
import { StyledNavLink } from './styled';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<StyledNavLink to={toTasks}>Zadania</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to={toAuthor}>O autorze</StyledNavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
