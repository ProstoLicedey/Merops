import {makeAutoObservable} from "mobx";
export  default  class CreatorStore{
    constructor() {

        this._events = []
        this._plan = "events"
        makeAutoObservable(this)
    }

    setEvents(events) {
        this._events = events
    }
    setPlan(plan) {
        this._plan = plan
    }

    get events() {
        return this._events
    }
    get plan() {
        return this._plan
    }


}