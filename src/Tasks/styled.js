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
