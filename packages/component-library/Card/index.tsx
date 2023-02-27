import { styled } from '@linaria/react';
import { useContext } from 'react';
import { SiteThemeContext } from 'package-context';
import { ICardProps, IStyleButtonProps } from 'package-types/horizon';

const Article = styled.article<IStyleButtonProps>``;
const ArticleLateral = styled(Article)``;    
const ArticleFlap = styled(Article)``;    

const Card: React.FC<ICardProps> = (props) => {
    const { title, permalink, excerpt, layout, image, published, category } = props
    const { colors } = useContext(SiteThemeContext);

    const media = image && (
        <figure>
            <a href={permalink}>
                <img src={image.src} width={image.width} height={image.height} alt={image.alt} />
            </a>
        </figure>
    );

    const elements = title && (
        <>
            {category && <p>{category}</p>}
            {title && <h3>{title}</h3>}
            {excerpt && <p>{excerpt}</p>}
            {published && <time>{published}</time>}
        </>
    );

    const contents = layout !== 'flap' ? (
        <>
            {media}
            {elements}
        </>
    ) : (
        <>
            <div>
                {elements}
            </div>
            {media}
        </>
    );

    if (layout === 'default') {
        <Article>
            {contents}
        </Article>
    }

    if(layout === 'lateral') {
        <ArticleLateral>
            {contents}
        </ArticleLateral>
    }

    if (layout === 'flap') {
        <ArticleFlap>
            {contents}
        </ArticleFlap>
    }

    return null;

}

export default Card