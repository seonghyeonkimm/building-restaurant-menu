import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MenuForm from 'src/components/MenuForm'

export const QUERY = gql`
  query FIND_MENU_BY_ID($id: Int!) {
    menu: menu(id: $id) {
      id
      imageSrc
      date
      createdAt
    }
  }
`
const UPDATE_MENU_MUTATION = gql`
  mutation UpdateMenuMutation($id: Int!, $input: UpdateMenuInput!) {
    updateMenu(id: $id, input: $input) {
      id
      imageSrc
      date
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ menu }) => {
  const { addMessage } = useFlash()
  const [updateMenu, { loading, error }] = useMutation(UPDATE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
      addMessage('Menu updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateMenu({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Menu {menu.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MenuForm menu={menu} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
