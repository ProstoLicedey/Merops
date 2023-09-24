
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const {User, Link} = require('../models/models');
const  mailService = require('./mailService')
const  tokenService = require('./tokenService')
const  UserDto = require('../dto/userDto')
const LinkService = require('./linkService')
const  ApiError = require('../exeptions/apiError')

class UserService{
    async registration(email, password, name, surname, birthday){
        const candidate = await User.findOne({ where: { email: email } })
        if(candidate){
            throw ApiError.BadRequest( 'Пользователь с таким email уже зарегестрирован')
        }
        const hashPassword = await  bcrypt.hash(password,3 )
        const user = await  User.create({email, password: hashPassword, name, surname, birthday: Date.parse(birthday)})
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await  LinkService.saveLink(userDto.id, email  )
        await  tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }

    async login(email, password){
        const  user = await  User.findOne({ where:{email}})
        if(!user){
            throw  ApiError.BadRequest(' Пользователь с таким email не найден')
        }
        const  isPassEquals = await  bcrypt.compare(password, user.password)
        if (!isPassEquals){
            throw  ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user);
        const  tokens = tokenService.generateTokens({...userDto})
        await  tokenService.saveToken(user.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }
    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw  ApiError.UnauthorizedError()
        }
        const  userData = tokenService.validateRefreshToken(refreshToken)
        const  tokenFromDb = await  tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.BadRequest('12')
        }
        if( !tokenFromDb){
            throw ApiError.BadRequest('123')
        }

       const  user = await User.findOne({where: {id: userData.id}})
        if(!user){
            throw ApiError.BadRequest({tokenFromDb})
        }
        const userDto = new UserDto(user);
        const  tokens = tokenService.generateTokens({...userDto})
        await  tokenService.saveToken(user.id, tokens.refreshToken)

        return{...tokens, user: userDto}

    }


}
module.exports = new UserService();

