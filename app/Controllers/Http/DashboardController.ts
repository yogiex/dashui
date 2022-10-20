// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {
    index( {view} ){
        return view.render('dashboard.home')
    }
}
