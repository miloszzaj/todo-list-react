import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const List = styled.ul`
	margin: 10px;
	padding-left: 0;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	list-style-type: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
	padding: 10px;
	line-height: 2;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;
export const Content = styled.span`
	margin-right: auto;
	margin: 10px;
	text-align: start;
	flex-basis: 100%;
	text-decoration: none;
	${({ done }) =>
		done &&
		css`
			text-decoration: line-through;
		`}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.color.black};
	&:hover {
		color: ${({ theme }) => theme.color.doveGray};
	}
`;

export const Button = styled.button`
	background-color: green;
	color: white;
	border: none;
	min-width: 32px;
	height: 32px;
	transition: background-color 0.5s ease;
	align-items: center;
	&:hover {
		background-color: ${({ theme }) => theme.color.malachite};
	}

	${({ remove }) =>
		remove &&
		css`
			background-color: ${({ theme }) => theme.color.milanoRed};
			align-items: center;
			&:hover {
				background-color: ${({ theme }) => theme.color.bittersweet};
			}
		`}
`;
