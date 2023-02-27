import { createContext } from 'react'
import { theme } from 'package-theme';
import { IThemeProps } from 'package-types/horizon';

export const SiteThemeContext = createContext<IThemeProps>(theme);