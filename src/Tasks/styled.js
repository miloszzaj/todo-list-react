import styled, { css } from 'styled-components';

export const List = styled.ul`
	margin: 10px;
	padding-left: 0;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	list-style-type: none;
	border-bottom: 1px solid rgb(240, 240, 240);
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
	${({ done }) =>
		done &&
		css`
			text-decoration: line-through;
		`}
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
		background-color: rgb(22, 207, 22);
	}

	${({ remove }) =>
		remove &&
		css`
			background-color: red;
			align-items: center;
			&:hover {
				background-color: rgb(255, 107, 107);
			}
		`}
`;
