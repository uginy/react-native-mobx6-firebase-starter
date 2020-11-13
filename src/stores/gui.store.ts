import { action, computed, makeObservable, observable, toJS } from 'mobx';

class GuiStore {
    counter = 0
    constructor() {
        makeObservable(this,{
            counter: observable,
            increment: action,
            decrement: action,
            doubleCounter: computed
        })
    }

    increment() { this.counter++ }
    decrement() { this.counter-- }

    get doubleCounter() { return toJS( this.counter * 2 )}
}

export default new GuiStore();
