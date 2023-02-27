import type { AppProps } from 'next/app'
import { SiteThemeContext } from 'package-context';
import { projectOneTheme } from 'package-theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SiteThemeContext.Provider value={projectOneTheme}>
            <Component {...pageProps} />
        </SiteThemeContext.Provider>
    )
}