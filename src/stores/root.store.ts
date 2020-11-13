import GuiStore from './gui.store';

export class RootStore {
    guiStore: GuiStore;

    constructor () {
        this.guiStore = new GuiStore ();
    }

    resetStores () {
        this.guiStore = new GuiStore ();
    }

}

const rootStore = new RootStore ();
export { rootStore };
