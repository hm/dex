import { observable, action } from 'mobx';
import { IThemes } from 'themes/CurrentTheme';
import { singleton } from 'decorators/singleton';

@singleton
export class Session {
  @observable
  currentTheme = IThemes.dark;

  @action
  setTheme = (theme: IThemes) => {
    this.currentTheme = theme;
  }
}
