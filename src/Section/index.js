import { Wrapper, Header } from './styled';

const Section = ({ title, body, headerContent }) => (
	<Wrapper>
		<Header>
			{title}
			{headerContent}
		</Header>
		<div>{body}</div>
	</Wrapper>
);

export default Section;
