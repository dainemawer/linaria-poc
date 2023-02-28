import type { AppProps } from 'next/app'
import { SiteThemeContext } from 'package-components/context';
import { projectTwoTheme } from '../project-two.config';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SiteThemeContext.Provider value={projectTwoTheme}>
            <Component {...pageProps} />
        </SiteThemeContext.Provider>
    )
}