import { SiteThemeContext } from 'package-components/context';
import { theme } from '../base.config';
import { projectTwoTheme } from 'project-two/project-two.config';
import { projectOneTheme } from 'project-one/project-one.config';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => {

    const themeName = context.parameters.brand || context.globals.brand;

    const activeTheme = themeName === 'project-one' ? projectOneTheme : themeName === 'project-two' ? projectTwoTheme : theme;

    return (
      <SiteThemeContext.Provider value={activeTheme}>
        <Story />
      </SiteThemeContext.Provider>
      
    )
  },
];

export const globalTypes = {
  brand: {
    name: 'Theme',
    description: 'Choose a theme',
    defaultValue: 'project-one',
    toolbar: {
      icon: 'category',
      items: [
        { value: 'project-one', title: 'Project One' },
        { value: 'project-two', title: 'Project Two' },
      ],
      title: 'Change theme',
    },
  },
}