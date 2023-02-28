import { theme } from 'package-components/base.config'
import { IThemeProps } from 'package-types/horizon'

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