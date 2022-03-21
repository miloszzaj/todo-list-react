import Container from '../../common/Container';
import Header from '../../common/Header';
import Section from '../../common/Section';

const AuthorPage = () => (
	<Container>
		<Header title='O autorze' />
		<Section
			title='Miłosz Zajączkowski'
			body={
				<>
					<div>A man aspiring to the title of a junior frontend developer</div>
					<p>
						In the meantime, he plays guitar &#127928;, travels the world &#127757; and reads about technological news &#9881;
					</p>
					<p>This App is a part of the YouCode course</p>
				</>
			}
		/>
	</Container>
);

export default AuthorPage;
