import styled from 'styled-components';

export const Title = styled.header`
	font-size: 2rem;
	font-weight: 700;
	align-self: flex-start;
	padding: 20px 0;
	margin-top: 30px;

	@media (max-width: 900px) {
		margin-left: 20px;
	}

	@media (max-width: 420px) {
		text-align: center;
		margin: 30px auto 0;
	}
`;
