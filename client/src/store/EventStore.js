import {makeAutoObservable} from "mobx";
export default class EventStore {
    constructor() {
        this._types = []
        this._events = []

        this._selectedType = {}
        this._selectedDate = {}
        this._selectedPrice = {}

        this._page = 1
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setEvents(events) {
        this._events = events
    }

    setSelectedType(type) {
        this.setPage(1)
        if (type === this._selectedType){
            this._selectedType = {}
        }
        else {
        this._selectedType = type
        }
    }
    setSelectedDate(date) {
        this._selectedDate = date
    }
    setSelectedPrice(price) {
        this._selectedPrice = price
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get events() {
        return this._events
    }
    get selectedType() {
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get selectedDate() {
        return this._selectedDate
    }
    get selectedPrice() {
        return this._selectedPrice
    }
}