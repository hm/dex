import { DarkTheme } from '../themes/DarkTheme';
import { LightTheme } from '../themes/LightTheme';
import { ReactElement } from 'react';
import React from 'react';

export enum IThemes {
  light,
  dark,
}

export interface ICurrentThemeProps {
  theme: IThemes;
}

export const CurrentTheme = ({theme, children}: {theme: IThemes, children: React.ReactElement}) => {
  switch (theme) {
    case IThemes.light:
      return <LightTheme>
        { children }
      </LightTheme>
    case IThemes.dark:
      return <DarkTheme>
      { children }
    </DarkTheme>
    default:
      return null;
  }
}
