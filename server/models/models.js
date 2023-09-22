const sequelize  = require('./db')
const  {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    birthday: {type: DataTypes.DATEONLY},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    isActivated: {type: DataTypes.BOOLEAN, default: false},
    activationLink: {type:  DataTypes.STRING},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER},
    Status: {type: DataTypes.BOOLEAN, default: false},
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    dateTime: {type: DataTypes.DATE},
    img: {type: DataTypes.STRING, allowNull: false},
    Status: {type: DataTypes.STRING}
})

const AgeRating = sequelize.define('ageRating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    age: {type: DataTypes.INTEGER},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Entrance = sequelize.define('entrance', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adress: {type: DataTypes.STRING},
    totalSeats: {type: DataTypes.INTEGER},
    seatsLeft: {type: DataTypes.INTEGER},

})
const Hall = sequelize.define('hall', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adress: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    numberRows: {type: DataTypes.INTEGER},
    numberSeatsInRow: {type: DataTypes.INTEGER},

})
const Seat = sequelize.define('seat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row: {type: DataTypes.INTEGER},
    seat: {type: DataTypes.INTEGER},

})

Order.hasMany(User)
User.belongsTo(Order)

Ticket.hasMany(Order)
Order.belongsTo(Ticket)

Event.hasMany(Ticket)
Ticket.belongsTo(Event)

AgeRating.hasMany(Event)
Event.belongsTo(AgeRating)

Type.hasMany(Event)
Event.belongsTo(Type)

Entrance.hasMany(Event)
Event.belongsTo(Entrance)

Hall.hasMany(Event)
Event.belongsTo(Hall)

Hall.hasMany(Seat)
Seat.belongsTo(Hall)

Seat.hasMany(Ticket)
Ticket.hasMany(Seat)

module.exports = {
    User,
    Order,
    Ticket,
    Event,
    AgeRating,
    Type,
    Entrance,
    Hall,
    Seat


}