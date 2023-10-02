
const userService = require('../service/userService')
const linkService = require('../service/linkService')
const  {validationResult} = require('express-validator')
const ApiError = require("../exeptions/apiError");

class UserController{
    async registration(req, res, next){
       try {
           const  errors= validationResult(req);

            const {email, password, name, surname, birthday} = req.body;
            const userData = await  userService.registration(email, password, name, surname, birthday)
           res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

           return res.json(userData)

       } catch (e){
            next(e)
       }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData= await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        }
        catch (e){
            next(e)
        }
    }
    async logout(req, res, next) {
       try {
            const {refreshToken} = req.cookies;
            const  token = await userService.logout(refreshToken)
           res.clearCookie('refreshToken')
           return res.json(token);
       }
       catch (e){
           next(e)
       }
    }


    async activate(req, res, next) {
        try {
            const  activationLink = req.params.link;
            await linkService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL)
        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }
    async refresh(req, res, next) {
        try {
        const  {refreshToken} = req.cookies;
            const {email, password, name, surname, birthday} = req.body;
            const userData = await  userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }
    async delite(req, res, next) {
        try {

        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }

    async update(req, res, next) {
        try {

        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }
    async receiveCode(req, res, next) {
        try {
            const {email} = req.body;
            const userData= await userService.receiveCode(email);
            return res.json(userData)
        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }
    async inputCode(req, res, next) {
        try {
            const {email, code} = req.body;
            console.log(code)
            const userData= await userService.updatePassGet(email, code);
            return res.json(userData)
        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }
    async updatePass(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData= await userService.updatePass(email, password);
            return res.json(userData)
        }
        catch (e){
            next( ApiError.BadRequest(e))
        }
    }


}

module.exports = new UserController()