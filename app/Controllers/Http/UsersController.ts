// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {
    // login index page html
    async index({view}) {
        return await view.render('auth/login')
    }

    // login post
    async store({ auth, session, request, response }) {
        const { uid, password } = request.all()
        try {
            await auth.attempt(uid, password)

        } catch (error) {
            // session.flashExcept(["password"])
            session.flash('form', 'credentials is incorrect')
            return response.redirect().back()
        }

        session.flash('notification', "Logged In Succesfully")
        return response.redirect('/')
    }
}
