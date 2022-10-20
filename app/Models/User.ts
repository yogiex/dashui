import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
// import hash library
import Hash from '@ioc:Adonis/Core/Hash'
// import logger
import Logger from '@ioc:Adonis/Core/Logger'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'username' })
  public username: string 

  @column({ columnName: 'email' })
  public email: string

  @column({ serializeAs: null })
  public password: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if(user.$dirty.password) {
      try {
        user.password = await Hash.make(user.password)
      } catch (error) {
        Logger.error(error)
      }
    }
  }
}
