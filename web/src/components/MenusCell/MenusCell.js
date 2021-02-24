import { Link, routes } from '@redwoodjs/router'

import Menus from 'src/components/Menus'

export const QUERY = gql`
  query MENUS {
    menus {
      id
      imageSrc
      date
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menus yet. '}
      <Link to={routes.newMenu()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ menus }) => {
  return <Menus menus={menus} />
}
