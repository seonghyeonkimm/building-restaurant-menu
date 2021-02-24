import { menus, menu, createMenu, updateMenu, deleteMenu } from './menus'

describe('menus', () => {
  scenario('returns all menus', async (scenario) => {
    const result = await menus()

    expect(result.length).toEqual(Object.keys(scenario.menu).length)
  })

  scenario('returns a single menu', async (scenario) => {
    const result = await menu({ id: scenario.menu.one.id })

    expect(result).toEqual(scenario.menu.one)
  })

  scenario('creates a menu', async (scenario) => {
    const result = await createMenu({
      input: { imageSrc: 'String' },
    })

    expect(result.imageSrc).toEqual('String')
  })

  scenario('updates a menu', async (scenario) => {
    const original = await menu({ id: scenario.menu.one.id })
    const result = await updateMenu({
      id: original.id,
      input: { imageSrc: 'String2' },
    })

    expect(result.imageSrc).toEqual('String2')
  })

  scenario('deletes a menu', async (scenario) => {
    const original = await deleteMenu({ id: scenario.menu.one.id })
    const result = await menu({ id: original.id })

    expect(result).toEqual(null)
  })
})
