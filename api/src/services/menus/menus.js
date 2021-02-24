import { db } from 'src/lib/db'

export const menus = () => {
  return db.menu.findMany()
}
