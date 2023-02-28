import { theme } from 'package-components/base.config'
import { IThemeProps } from 'package-types/horizon'

/**
 * This is the theme for the project-two site.
 * It extends the base.config theme and can be non-destructively
 * overridden by the project-two site.
 * 
 * It has also been made type safe by using the IThemeProps interface.
 * This means that no values added here can be injected into the theme
 * or used as a value that we don't want to be used.
 */
export const projectTwoTheme: IThemeProps = {
    ...theme,
    id: 'project-two',
    colors: {
        brand: '#000000',
    },
    font: {
        body: 'Montserrat, sans-serif',
        heading: 'Literata, serif',
    },
    components: {
        heroHomePage: {
            mainTitleFontWeight: 400,
            titleFontWeight: 300,
        }
    },
}