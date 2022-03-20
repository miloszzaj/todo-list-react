import styled from 'styled-components';

export const Wrapper = styled.form`
	display: flex;
	justify-content: space-around;
	margin: 0;

	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Button = styled.button`
	flex-grow: 1;
	background-color: teal;
	color: white;
	border-style: none;
	margin-left: 20px;
	padding: 10px;
	transition: 1s;
	&:hover {
		transform: scale(1.15);
	}
	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
		margin-left: 0;
		margin-top: 10px;
	}
`;
