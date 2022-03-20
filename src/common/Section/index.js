import { Wrapper, Header, Body } from './styled';

const Section = ({ title, body, headerContent }) => (
	<Wrapper>
		<Header>
			{title}
			{headerContent}
		</Header>
		<Body>{body}</Body>
	</Wrapper>
);

export default Section;
