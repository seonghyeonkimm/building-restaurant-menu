import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const menus = () => {
  return db.menu.findMany()
}

export const menu = ({ id }) => {
  return db.menu.findUnique({
    where: { id },
  })
}

export const createMenu = ({ input }) => {
  requireAuth()
  return db.menu.create({
    data: input,
  })
}

export const updateMenu = ({ id, input }) => {
  requireAuth()
  return db.menu.update({
    data: input,
    where: { id },
  })
}

export const deleteMenu = ({ id }) => {
  requireAuth()
  return db.menu.delete({
    where: { id },
  })
}
