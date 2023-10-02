const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Event, DeviceInfo} = require('../models/models')
const {Op} = require("sequelize"); //модель
const  ApiError = require('../exeptions/apiError')
class EventController {
    async create(req, res, next) {
        try {

            let {title, description, price, dateTime, typeId, ageRatingId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const event = await Event.create({title, description, price, dateTime, typeId, ageRatingId, img: fileName})


            return res.json(event)
        } catch (e) {
            next( ApiError.BadRequest(e))
        }
    }

    async getAll(req, res, next) {
        try {
            let { typeId, page, priceMin, priceMax, dateMin, dateMax } = req.query;
            const limit = 16;
            page = page || 1;
            let offset = page * limit - limit;

            const where = {};
            console.log(priceMax)
            if (priceMin && priceMax) {
                where.price = { [Op.between]: [priceMin, priceMax] };
            } else if (priceMin) {
                where.price = { [Op.gte]: priceMin };
            } else if (priceMax) {
                where.price = { [Op.lte]: priceMax };
            }

            if (typeId) {
                where.typeId = typeId;
            }

            if (dateMin && dateMax) {
                where.dateTime = {
                    [Op.between]: [new Date(dateMin), new Date(dateMax)]
                };
            } else if (dateMin) {
                where.dateTime = { [Op.gte]: new Date(dateMin) };
            } else if (dateMax) {
                where.dateTime = { [Op.lte]: new Date(dateMax) };
            }

            const event = await Event.findAndCountAll({ where, limit, offset });

            return res.json(event);
        } catch (e) {
            next(e)
        }
    }


    async getOne(req, res) {


    }
}

module.exports = new EventController()