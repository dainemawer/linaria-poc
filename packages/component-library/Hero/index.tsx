import { styled } from '@linaria/react';
import { IHeroProps } from 'package-types/horizon';
import HeroGrid from './HeroGrid';

import { PrimaryHeroCard } from './HeroCard';
import { useContext } from 'react';
import { SiteThemeContext } from 'package-components/context';
import { getProjectTheme } from 'package-util';

const HeroContainer = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 3.25rem;
    margin: 0 auto;
    max-width: 1280px;
`;

const Hero: React.FC<IHeroProps> = (props) => {
    const { articles } = props;
    const primary = articles[0];
    const secondary = articles?.slice(1, 6);
    const { id } = useContext(SiteThemeContext);

    return (
        <HeroContainer>
            {primary && (
                <PrimaryHeroCard
                    hasBackground={!getProjectTheme(id)}
                    image={primary.image}
                    title={primary.title}
                    subtitle={primary.subtitle}
                    date={primary.date}
                    category={primary.category}
                    width="620"
                    height="620"
                />
            )}
            <HeroGrid articles={secondary} />
        </HeroContainer>
    )
}

Hero.defaultProps = {
    articles: [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/620x620',
            date: '2021-01-01',
            category: 'Category'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/248x248',
            date: '2021-01-01',
            category: 'Category'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/248x248',
            date: '2021-01-01',
            category: 'Category'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/248x248',
            date: '2021-01-01',
            category: 'Category'
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/248x248',
            date: '2021-01-01',
            category: 'Category'
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://source.unsplash.com/random/248x248',
            date: '2021-01-01',
            category: 'Category'
        }
    ]
}

export default Hero