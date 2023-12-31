const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Event, HallОption, Hall, HallОptionPrice} = require('../models/models')
const {Op} = require("sequelize"); //модель
const {sequelize} = require('sequelize')
const ApiError = require('../exeptions/apiError')

class HallController {

    async create(req, res, next) {
        try {

            let {title, description, dateTime, typeId, ageRatingId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const event = await Event.create({title, description, dateTime, typeId, ageRatingId, img: fileName})


            return res.json(event)
        } catch (e) {
            next(ApiError.BadRequest(e))
        }
    }


    async getAll(req, res, next) {

    }


    async getHall(req, res, next) {
        try {
            const { id } = req.params;

            const event = await Event.findOne({
                attributes: ['id', 'title','dateTime','Status', ],
                where: { id: id },
                include: [
                    {

                        model: Hall,
                        as: 'hall'
                    }
                ]
            });

            const hollOptionPrice = await HallОptionPrice.findAll({
                attributes: ['id', 'price'],
                where: { eventId: id },
                include: [
                    {
                        model: HallОption,
                        as: 'hallОption'
                    }
                ]
            });

            return res.json({event, hollOptionPrice});
        } catch (e) {
            next(ApiError.BadRequest(e));
        }
    }
}

module.exports = new HallController()