import type { AppProps } from 'next/app'
import { SiteThemeContext } from 'package-context';
import { projectTwoTheme } from 'package-theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SiteThemeContext.Provider value={projectTwoTheme}>
            <Component {...pageProps} />
        </SiteThemeContext.Provider>
    )
}