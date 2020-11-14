import GuiStore from './gui.store';

export class RootStore {
    guiStore: GuiStore;

    constructor () {
        this.guiStore = new GuiStore (this);
    }

    resetStores () {
        this.guiStore = new GuiStore (this);
    }

}

const rootStore = new RootStore ();
export { rootStore };
