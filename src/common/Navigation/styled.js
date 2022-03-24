import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const activeClassName = 'active';

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeClassName,
}))`
	color: ${({ theme }) => theme.color.gallery};
	text-decoration: none;
	&.${activeClassName} {
		font-weight: 700;
	}
	&:hover {
		text-decoration: underline;
	}
`;

export const List = styled.ul`
	background: ${({ theme }) => theme.color.teal};
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	list-style: none;
`;

export const Item = styled.li`
	margin: 20px;
`;
