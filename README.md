# Linaria: Proof of Concept

## Description of Current Problem

On a client project, we need to determine a way to scale sites and components in a predictable and safe way. Our current code base is prone to CSS 
specificity and scalability issues that are limiting major strides forward in scaling the project as a whole. As more sites are spinned up or requested
the more bloated and unstable components will become. This will inevitably lead us down a path of overriding components multiple times to
achieve the desired effect. 

The client project uses the following technologies:

- Monorepo
- NextJS
- StoryBook
- React
- PostCSS

### Project Challenges
- Brittle CSS scalability
- A component library that is two tightly-bound by one particular site - theres very little room to extend in a potentially non-destructive manner
- Due to the architecture of the project, theres no major wins for CSS Performance - we cannot integrate tools like Critical CSS or Purge CSS
- Theres no scoping and isolation - benefits we'd get from technologies like CSS Modules

## How Does Linaria Solve These Issues
Linaria gives us the power of CSS-in-JS, without the performance overhead of bundling all that CSS in JavaScript. This way, we can leverage the native power of
CSS-in-JS which includes functionality like:

- Local and Global Styles - something we'd get by introducing CSS Modules
- Encapsulation - styles written for a component, remain scoped to that component
- A better developer experience - engineers can write CSS and components in a far more modular and trustworthy manner
- A robust system for scaling components and sites
- Better performance
- Inevitably less bugs and less QA.

## What Has This POC Achieved?

1. New sites can be spun up with their own theme configuration (fonts, colours, typography scales) that is shared across `React.Context`
2. All packages have been decentralised, including site themes for maximum scalability
3. Component Styles can be made type-safe, ensuring a tried and tested safety net when it comes to updating components across multiple sites.
4. Better performance and better developer experience
5. Reduced Project CSS due to the reusable nature of CSS-in-JS
6. An increase in overall styling simplicity, which is now more intuitive.
7. Alignment with ESLint, StyleLint and other best practices
8. A more programmatic approach to CSS styling with the ability to use `props` in styles.
9. Major reduction in bootstrapped code by being forced to think about components in the proposed React way.

## Structure

The repo's `packages` folder contains:
- `context` - universal context that sets its `initialState` to the projects theme configuration, located in `themes`
- `utils` - useful utils for determining when certain components need to change their output based on a project / site.
- `component-library` - a directory for components, running `StoryBook` - each story has a "Theme Switcher" built into it to change styles on the fly
- `themes` - contains configuration files for each site, allowing for seamless overriding of property values, rather than the properties themselves.
- `types` - contains type definitons for components

In the `projects` folder you will find two `NextJS` sites which contain the same components, but different renderings of each component due 
to the required design treatement.


## Examples 

### Themes

The below is an example of a theme configuration object which has been typed-safe. Global elements can be non-destructively overriden for each project.
Sections for `colors`, `fonts` and `components` are just a glimpse of the versatility this configuration can have on a project. Reducing overall
CSS dependency and overriding.

```js
export const projectOneTheme: IThemeProps = {
    ...theme,
    id: 'project-one',
    colors: {
        brand: '#B41513',
    },
    font: {
        body: 'Montserrat, sans-serif',
        heading: 'Source Serif, serif',
    },
    components: {
        heroHomePage: {
            mainTitleFontWeight: 600,
            titleFontWeight: 600,
        }
    },
}
```

### Type Safe Component Styles with Extension

Components can be easily defined, and then extended without overriding all the CSS required. Using a combination of `theme` configuration defaults and binding these components
closely to their respective parent we can gain highly dynamic CSS variation and themes without much effort. These components can then be made type-safe
to ensure that no props or CSS values are passed to them that could cause a regression unitentionally.

```jsx

// Exmample of a Primary Button

const PrimaryButton = styled.button<IStyleButtonProps>`
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    color: ${(props) => props.color || '#fff'};
    border-color: ${(props) => props.border || 'transparent'};
    border-style: solid;
    font-size: 0.75rem; // 12px
    padding: 0.8125rem 2.25rem; // 13px 36px
    text-transform: uppercase;

    &:hover,
    &:focus {
        background-color: #fff;
        color: ${(props) => props.backgroundColor};
        border-color: ${(props) => props.backgroundColor};
        transition: all 0.2s ease-in-out;
    }

    &:disabled {
        background-color: #E6E6E6;
        border-color: transparent;
        color: #525252;
        cursor: not-allowed;
    }
`;

// Extending Primary Button into SecondaryButton

const SecondaryButton = styled(PrimaryButton)<IStyleButtonProps>`
    background-color: #fff;

    &:hover,
    &:focus {
        background-color: ${(props) => props.backgroundColor};
        color: #fff;
        border-color: ${(props) => props.backgroundColor};
    }

    &:disabled {
        background-color: #fff;
        color: #525252;
        border-color: #E6E6E6;
    }
`;
```

### Context Available Everywhere

```jsx
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SiteThemeContext.Provider value={projectOneTheme}>
            <Component {...pageProps} />
        </SiteThemeContext.Provider>
    )
}
```

Theme configuration values are stored at a high-level and can be consumed from any component no big or small:

```jsx

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

```
