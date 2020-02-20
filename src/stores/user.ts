import { observable, action } from 'mobx';
import { singletonGetter } from 'lib/singletonGetter';
import { IThemes } from 'themes/CurrentTheme';

export class UserStore {
  private static instance: UserStore;
  public static get(): UserStore {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  @observable
  currentTheme = IThemes.dark;

  @action
  setTheme = (theme: IThemes) => {
    this.currentTheme = theme;
  }
}
