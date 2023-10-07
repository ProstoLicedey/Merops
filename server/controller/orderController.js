const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Type, Order, Ticket, EntranceОptionPrice, UpdatePassword} = require('../models/models')
const {Op} = require("sequelize"); //модель
const ApiError = require('../exeptions/apiError')

class OrderController {
    async create(req, res, next) {
        try {

            let {userId, tickets} = req.body

            const order = await Order.create({userId})

            if (tickets) {
                tickets = JSON.parse(tickets)
                for (const i of tickets) {


                    let entranceOptionPrice = await EntranceОptionPrice.findOne({where: {id: i.entranceОptionPriceId}})

                    entranceOptionPrice.seatsLeft -= 1
                    await entranceOptionPrice.save();

                    Ticket.create({
                        eventId: i.eventId,
                        entranceОptionPriceId: i.entranceОptionPriceId,
                    })
                }
            }


            return res.json(order)
        } catch (e) {
            next(ApiError.BadRequest(e))
        }
    }

    async getAll(req, res) {

    }


    async getOne(req, res) {


    }
}

module.exports = new OrderController()