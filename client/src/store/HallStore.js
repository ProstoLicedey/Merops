import {makeAutoObservable} from "mobx";
export default class HallStore {
    constructor() {
        this._entrance = []
        this._ticket = []

        makeAutoObservable(this)
    }

    setEntrance(entrance) {
        this._entrance = entrance
    }
    setTicket(ticket) {
        this._ticket = ticket
    }


    get entrance() {
        return this._entrance
    }
    get ticket() {
        return this._ticket
    }
}