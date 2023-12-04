const uuid = require('uuid') // пакт для генерации id для картинок
const path = require('path') // сохрание пути для картинки
const {Type, Order, Ticket, EntranceОptionPrice, UpdatePassword, Event, EntranceОption, Entrance} = require('../models/models')
const {Op} = require("sequelize"); //модель
const ApiError = require('../exeptions/apiError')
const fse = require('fs-extra');
const {join} = require("path");

class OrderController {
    async create(req, res, next) {
        try {
            let { userId, tickets } = req.body;

            const order = await Order.create({ userId });

            if (tickets) {
                tickets = JSON.parse(tickets);
                for (const i of tickets) {
                    console.log(i);
                    let number =
                        String(i.eventId).substr(0, 1) +
                        String(userId).substr(0, 1) +
                        String(order.id).substr(0, 1) +
                        (Math.floor(Math.random() * 9000) + 1000);
                    let entranceOptionPrice = await EntranceОptionPrice.findOne({
                        where: { id: i.entranceOptionPriceId },
                    });

                    entranceOptionPrice.seatsLeft -= 1;
                    await entranceOptionPrice.save();

                    await Ticket.create({
                        orderId: order.id,
                        eventId: i.eventId,
                        number: Number(number),
                        entranceОptionPriceId: i.entranceOptionPriceId,
                    });
                }
            }

            return res.json(order)
        } catch (e) {
            next(ApiError.BadRequest(e));
        }
    }

    async getAll(req, res) {

    }


    async getTicket(req, res, next) {
        try {
            const {id} = req.params
            const order = await Ticket.findAll({
                where: {orderId: id},
                include: [
                    {
                        model: Event,
                        as: 'event'
                    },
                    {
                        model: EntranceОptionPrice,
                        as: 'entranceОptionPrice',
                        include: [
                            {
                                model: EntranceОption,
                                as: 'entranceОption',
                                include: [
                                    {
                                        model: Entrance,
                                        as: 'entrance'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })

            return res.json(order)
        } catch (e) {
            next(ApiError.BadRequest(e));
        }
    }
}

module.exports = new OrderController()