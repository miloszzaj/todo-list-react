import styled from 'styled-components';

export const Wrapper = styled.form`
	display: flex;
	justify-content: space-around;
	margin: 10px;

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
	margin: 10px;
	padding: 5px;
	transition: 1s;
	&:hover {
		transform: scale(1.15);
	}
`;
