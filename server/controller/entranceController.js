const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Event, EntranceOptionPrice, EntranceOption} = require('../models/models')
const {Op} = require("sequelize"); //модель
const {sequelize} = require('sequelize')
const ApiError = require('../exeptions/apiError')

class EventController {

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


    async getFromEvent(req, res, next) {
        try {
            const { id } = req.params;
            let {eventId} = req.query
            const event = await EntranceOption.findAll({
                where: { entranceId: id },
            });

            const updatedEvent = await Promise.all(event.map(async (item) => {
                const entranceOptionPrice = await EntranceOptionPrice.findOne({
                    where: { eventId: eventId, entranceOptionId: item.id },
                });

                return { ...item.toJSON(), entranceOptionPrice };
            }));

            return res.json(updatedEvent);
        } catch (e) {
            next(ApiError.BadRequest(e));
        }
    }
}

module.exports = new EventController()