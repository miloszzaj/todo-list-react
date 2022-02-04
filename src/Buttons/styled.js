import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 500px) {
		flex-direction: column;
		padding-top: 20px;
	}
`;

export const Button = styled.button`
	border: none;
	background-color: transparent;
	color: teal;
	font-size: 0.9rem;
	transition: color 0.5s ease;

	${({ disabled }) =>
		disabled &&
		css`
			color: rgb(107, 107, 107);
		`}

	@media (max-width: 500px) {
		margin: 10px;
	}

	&:hover {
		color: rgb(7, 182, 182);
	}
`;
