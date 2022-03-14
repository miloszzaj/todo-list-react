import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 900px;
	justify-content: center;
	word-break: break-word;
	margin: 0 auto;
	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
		margin: 0 7px;
	}
`;
