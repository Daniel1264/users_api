const dbUsers = require('../models/users.models')

const findAllUsers = async() => {
    const user =  await dbUsers.findAll()
    return user
}

const findUserById = async(id) => {
    const user = await dbUsers.findOne({

        where: {
            id: id
        }
    })
    return user
}

const createUser = async (obj) => {
    const user =  await dbUsers.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return user
}

const updateUser = async(id, obj) => {
    const user =  await dbUsers.update(obj, {
        where: {
            id: id
        }
    })
    return user[0]
}

const deleteUser = async(id) => {
    const user = dbUsers.destroy({
        where: {
            id: id
        }
    })
    return user
}

module.exports = {findAllUsers, findUserById, createUser, updateUser, deleteUser}
