import {
    autorun,
    IReactionDisposer,
    makeAutoObservable,
    toJS
} from 'mobx';
import { RootStore } from "./root.store";

class GuiStore {
    counter = 1
    private disposer1: IReactionDisposer;
    private disposer2: IReactionDisposer;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable ( this )
        this.disposer1 = autorun ( () => {
            console.log ( '[R][disposer1]', this.counter * 10 )
        } )
        this.disposer2 = autorun ( () => {
            console.log ( '[R][disposer2]', this.counter * 100 )
        } )
    }

    increment() {
        this.counter++
    }

    decrement() {
        this.counter--
    }

    reset() {
        this.counter = 0
    }

    get doubleCounter() {
        return toJS ( this.counter * 2 )
    }

    dispose() {
        this.disposer1 ()
        this.disposer2 ()
    }
}

export default GuiStore;
