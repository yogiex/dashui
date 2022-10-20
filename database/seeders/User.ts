import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.create({
      name: 'hoshi suiseimachi',
      username: 'hoshimachi',
      email: 'hoshi147@gmail.com',
      password: 'hoshipassword'
    })
  }
}
