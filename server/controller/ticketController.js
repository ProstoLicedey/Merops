
const {Type, Order, Ticket, EntranceOption, UpdatePassword, Event, EntranceOptionPrice, Entrance, User, HallОptionPrice} = require('../models/models')
const {Op} = require("sequelize"); //модель
const ApiError = require('../exeptions/apiError')
const fse = require('fs-extra');
const {join} = require("path");
const { Sequelize, DataTypes } = require('sequelize');
class ticketController {



    async getTicket(req, res, next) {
        try {
            const {id} = req.params
            const ticket = await Ticket.findOne({
                where: {number: id},
                attributes: ['number', 'row', 'seat', 'status', 'up'],
                include: [
                    {
                        model: Event,
                        as: 'event',
                        attributes: ['title', 'dateTime', 'userId', 'img'],
                    },
                    {
                        model: EntranceOptionPrice,
                        as: 'entranceOptionPrice',
                        attributes: [],
                        include: [
                            {
                                model: EntranceOption,
                                as: 'entranceOption',
                                attributes: ['name'],
                            },

                        ]
                    },

                ]

            })

            return res.json(ticket)
        } catch (e) {
            next(ApiError.BadRequest(e));
        }
    }


}

module.exports = new ticketController()