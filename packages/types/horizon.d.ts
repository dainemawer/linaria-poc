// Site Theme Interface
export interface IThemeProps {
    id: string;
    colors: {
        brand: string;
    },
    font: {
        body: string;
        heading: string;
    }
    fontSizes?: {
        xxs: string;
        xs: string;
        s: string;
        ms: string;
        m: string;
        ml: string;
        ls: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    },
    components: {
        heroHomePage: {
            mainTitleFontWeight: number;
            titleFontWeight: number;
        }
    }
}

interface IntrinsicElements {
    style: any;
}

// Article Props
export interface IArticleProps {
    hasBackground?: boolean;
    id?: number;
    title?: string;
    subtitle?: string;
    image?: string;
    date?: string;
    category?: string;
    className?: string;
    style?: object;
    width?: string;
    height?: string;
}

// Hero Props Interface
export interface IHeroProps {
    articles: IArticleProps[]
}

export interface IHeroCardProps {
    title: string;
    subtitle: string;
    image: string;
    date: string;
    category: string;
}

// Style Props Interface
export interface IStyleProps {
    hasBackground?: boolean;
    font?: string;
    weight?: number;
}

export interface IStyleButtonProps extends IStyleProps {
    backgroundColor?: string;
    border?: string;
    color?: string;
}

// Button Component Props
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    backgroundColor?: string
    color?: string
    border?: string
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    icon?: boolean;
}

interface ICardProps {
    title: string;
    permalink: string;
    excerpt: string;
    layout: string;
    image: {
        src: string;
        alt: string;
        height: string;
        width: string;
    };
    published: string;
    category: string;
}