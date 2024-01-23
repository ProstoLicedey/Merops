import {makeAutoObservable} from "mobx";
export  default  class CreatorStore{
    constructor() {

        this._events = []

    }

    setEvents(events) {
        this._events = events
    }

    get events() {
        return this._events
    }


}