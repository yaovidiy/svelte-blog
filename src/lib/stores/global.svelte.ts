import { MediaQuery } from "svelte/reactivity";

class GlobalStore {
  isMobile = new MediaQuery('(max-width: 768px)');
  isTablet = new MediaQuery('(max-width: 1024px)');

  get isDesktop() {
    return !this.isTablet.current && !this.isMobile.current;
  }
}

export const globalStore = new GlobalStore();