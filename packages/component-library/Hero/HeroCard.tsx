import { IArticleProps, IStyleProps } from 'package-types/horizon';
import { styled } from '@linaria/react';
import { useContext } from 'react';
import { SiteThemeContext } from 'package-context';
import { getProjectTheme } from 'package-util';

const Article = styled.article``;

export const Figure = styled.figure`
    margin: 0;
`;

export const Content = styled.div``;

export const Title = styled.h3<IStyleProps>`
    color: #000;
    font-family: ${props => props.font};
    font-size: 1.25rem;
    font-weight: ${props => props.weight};
    margin: 0;
`;

const SubTitle = styled.p<IStyleProps>`
    color: #000;
    font-family: ${props => props.font};
    font-size: 1rem;
    font-weight: 400;
`;

const Date = styled.time<IStyleProps>`
    color: #000;
    font-family: ${props => props.font};
    font-size: 0.75rem;
`;

const Category = styled.p<IStyleProps>`
    color: ${props => props.color};
    font-family: ${props => props.font};
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.6px;
`;

const HeroCard: React.FC<IArticleProps> = ({ className, style, ...props }) => {
    const { image, title, subtitle, date, category, width, height } = props;
    const { font, colors, components, id } = useContext(SiteThemeContext);

    return (
        <div className={className} style={style}>
            <Article>
                <Figure>
                    <img src={image} alt={title} height={height} width={width} />
                </Figure>
                <Content>
                    {getProjectTheme(id) && <Category color={colors.brand} font={font.body}>{category}</Category>}
                    <Title weight={components.heroHomePage.titleFontWeight} font={font.heading}>{title}</Title>
                    <SubTitle font={font.body}>{subtitle}</SubTitle>
                    <Date font={font.body}>{date}</Date>
                </Content>
            </Article>
        </div>
    );
};

export const PrimaryHeroCard = styled(HeroCard)`
    position: relative;

    &::after {
        background-color: ${props => props.hasBackground ? '#ececec' : 'transparent'};
        content: '';
        position: absolute;
        bottom: 0;
        height: calc(100% - 3.75rem);
        left: 0;
        width: calc(100% - 3.75rem);
        z-index: -1;
    }

    ${Content} {
        max-width: 620px;
        margin-left: auto;
    }

    ${Figure} {
        max-width: 620px;
        margin-left: auto;
    }

    ${Title} {
        font-size: 2.5rem;
    }
`;

export default HeroCard;