import { IHeroProps } from 'package-types/horizon';
import { styled } from '@linaria/react';
import HeroCard from './HeroCard';

const DivisionGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2.5rem;
`;

const HeroGrid: React.FC<IHeroProps> = (props) => {
	const { articles } = props;

	return (
		<DivisionGrid>
			{articles?.slice(1, 5).map((article) => (
				<HeroCard key={article?.id} image={article?.image} subtitle={article?.subtitle} date={article?.date} title={article?.title} category={article?.category} width="248" height="248" />
			))}
		</DivisionGrid>
	);
}

export default HeroGrid;