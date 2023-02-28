import type { AppProps } from 'next/app'
import { SiteThemeContext } from 'package-components/context';
import { projectOneTheme } from '../project-one.config';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SiteThemeContext.Provider value={projectOneTheme}>
            <Component {...pageProps} />
        </SiteThemeContext.Provider>
    )
}