import { createContext } from 'react'
import { theme } from './base.config';
import { IThemeProps } from 'package-types/horizon';

export const SiteThemeContext = createContext<IThemeProps>(theme);