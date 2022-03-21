import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
		flex-direction: column;
		padding-top: 20px;
	}
`;

export const Button = styled.button`
	border: none;
	background-color: transparent;
	color: ${({ theme }) => theme.color.teal};
	font-size: 0.9rem;
	transition: color 0.5s ease;

	${({ disabled }) =>
		disabled &&
		css`
			color: ${({ theme }) => theme.color.doveGray};
			cursor: not-allowed;
		`}

	@media (max-width:${({ theme }) => theme.breakpoint.mobile}px) {
		margin: 10px;
	}

	&:hover {
		color: ${({ theme }) => theme.color.pacificBlue};
	}
	&:disabled {
		color: ${({ theme }) => theme.color.doveGray};
	}
`;
