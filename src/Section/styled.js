import styled from 'styled-components';

export const Wrapper = styled.section`
	background-color: rgb(255, 255, 255);
	width: 100%;
	box-shadow: 0 0 5px #ddd;
	margin: 5px;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	font-size: 1.3rem;
	font-weight: 700;
	padding: 20px;
	border-bottom: 1px solid rgb(240, 240, 240);
	@media (max-width: 500px) {
		text-align: center;
		flex-direction: column;
	}
`;
