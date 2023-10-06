const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Event, DeviceInfo, Entrance, Hall, AgeRating, Type} = require('../models/models')
const {Op} = require("sequelize"); //модель
const {sequelize} = require('sequelize')
const ApiError = require('../exeptions/apiError')

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
            next(ApiError.BadRequest(e))
        }
    }


    async getAll(req, res, next) {
        try {
            let {typeId, page, priceMin, priceMax, dateMin, dateMax, serchTitle} = req.query;
            const limit = 16;
            page = page || 1;
            let offset = page * limit - limit;

            const where = {};

            if (priceMin && priceMax) {
                where.price = {[Op.between]: [priceMin, priceMax]};
            } else if (priceMin) {
                where.price = {[Op.gte]: priceMin};
            } else if (priceMax) {
                where.price = {[Op.lte]: priceMax};
            }

            if (typeId) {
                where.typeId = typeId;
            }

            if (dateMin && dateMax) {
                where.dateTime = {
                    [Op.between]: [new Date(dateMin), new Date(dateMax)]
                };
            } else if (dateMin) {
                where.dateTime = {[Op.gte]: new Date(dateMin)};
            } else if (dateMax) {
                where.dateTime = {[Op.lte]: new Date(dateMax)};
            }
            console.log(serchTitle)
            console.log(dateMin)
            console.log(typeId)
            if (serchTitle) {
                where.title = {
                    [Op.iLike]: `%${serchTitle}%`
                };
            }

            const event = await Event.findAndCountAll({
                where,
                limit,
                offset,
                include: [{model: Hall, as: 'hall'}, {model: Entrance, as: 'entrance'},{model: AgeRating, as: 'ageRating'}]
            });

            return res.json(event);
        } catch (e) {
            next(e)
        }
    }


    async getOne(req, res) {
        const {id} = req.params
        const event = await Event.findOne(
            {
                where: {id},

                include: [{model: Hall, as: 'hall'}, {model: Entrance, as: 'entrance'}, {model: AgeRating, as: 'ageRating'},{model: Type, as: 'type'} ]

            })

        return res.json(event)

    }
}

module.exports = new EventController()