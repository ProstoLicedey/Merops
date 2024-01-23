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

})
const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true},
})
const UpdatePassword = sequelize.define('updatePassword', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    code: {type: DataTypes.INTEGER,  required: true},
})
const Link = sequelize.define('link', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type:  DataTypes.STRING},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER},
    row: {type: DataTypes.INTEGER},
    seat: {type: DataTypes.INTEGER},
    status: {type: DataTypes.BOOLEAN, defaultValue:true},
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    dateTime: {type: DataTypes.DATE},
    img: {type: DataTypes.STRING, allowNull: false},
    Status: {type: DataTypes.STRING, defaultValue: "ACTIVE"},
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
    name: {type: DataTypes.STRING},
    totalSeats: {type: DataTypes.INTEGER},

})
const EntranceОption = sequelize.define('entranceОption', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    totalSeats: {type: DataTypes.INTEGER},
})
const EntranceОptionPrice = sequelize.define('entranceОptionPrice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},
    seatsLeft: {type: DataTypes.INTEGER},
})
const Hall = sequelize.define('hall', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adress: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    numberRows: {type: DataTypes.INTEGER},
    numberSeatsInRow: {type: DataTypes.INTEGER},

})
const HallPassage = sequelize.define('hallPassage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    afterRow: {type: DataTypes.INTEGER},
    afterSeat: {type: DataTypes.INTEGER},

})
const HallОption = sequelize.define('hallОption', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    rowStart: {type: DataTypes.INTEGER},
    rowFinish: {type: DataTypes.INTEGER},
    seatStart: {type: DataTypes.INTEGER},
    seatFinish: {type: DataTypes.INTEGER},

})
const HallОptionPrice = sequelize.define('hallОptionPrice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},

})


User.hasMany(Order)
Order.belongsTo(User)

User.hasOne(Token)
Token.belongsTo(User)

User.hasOne(UpdatePassword)
UpdatePassword.belongsTo(User)

User.hasOne(Link)
Link.belongsTo(User)

/////////////////////////////

Order.hasMany(Ticket)
Ticket.belongsTo(Order)

EntranceОptionPrice.hasMany(Ticket)
Ticket.belongsTo(EntranceОptionPrice)

HallОptionPrice.hasMany(Ticket)
Ticket.belongsTo(HallОptionPrice)

User.hasMany(Event)
User.belongsTo(AgeRating)


//////////
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

Event.hasMany(EntranceОptionPrice)
EntranceОptionPrice.belongsTo(Event)

Event.hasMany(HallОptionPrice)
HallОptionPrice.belongsTo(Event)

/////////

Hall.hasMany(HallОption)
HallОption.belongsTo(Hall)

HallОption.hasMany(HallОptionPrice)
HallОptionPrice.belongsTo(HallОption)


Hall.hasMany(HallPassage)
HallPassage.belongsTo(Hall)

///////////

Entrance.hasMany(EntranceОption)
EntranceОption.belongsTo(Entrance)

EntranceОption.hasMany(EntranceОptionPrice)
EntranceОptionPrice.belongsTo(EntranceОption)



EntranceОption.hasMany(EntranceОptionPrice)
EntranceОptionPrice.belongsTo(EntranceОption)
module.exports = {
    User,
    Token,
    UpdatePassword,
    Link,
    Order,
    Ticket,
    Event,
    AgeRating,
    Type,
    Entrance,
    EntranceОption,
    EntranceОptionPrice,
    Hall,
    HallPassage,
    HallОption,
    HallОptionPrice,

}