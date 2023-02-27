import { theme } from './base.config'
import { IThemeProps } from 'package-types/horizon'

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