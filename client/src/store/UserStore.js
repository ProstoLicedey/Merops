import {makeAutoObservable} from "mobx";
export  default  class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userProfile = {}
        this._ordes = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        return this._isAuth = bool

    }
    setUser(user){
        return this._user = user

    }
    setUserProfile(userProfile){
        return this._userProfile = userProfile

    }
    setOrders(ordes){
        return this._ordes = ordes

    }
    get isAuth(){
        return this._isAuth
    }
    get orders(){
        return this.orders
    }

    get user(){
        return this._user
    }
    get userProfile(){
        return this._userProfile
    }

}