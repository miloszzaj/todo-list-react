import styled from 'styled-components';

export default styled.input`
	flex-grow: 14;
	margin: 10px;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.color.gallery};
	color: ${({ theme }) => theme.color.black};
`;
