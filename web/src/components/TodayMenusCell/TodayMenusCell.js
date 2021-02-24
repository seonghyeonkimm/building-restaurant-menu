import { Card, Space, Spin, Typography } from 'antd'

import styles from './TodayMenusCell.module.css'

export const QUERY = gql`
  query GET_MENUS {
    menus {
      id
      title
      imageSrc
      createdAt
    }
  }
`

export const Loading = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 400)
    return () => clearTimeout(timeout)
  }, [])

  if (!show) {
    return null
  }

  return (
    <div className={styles.textCenter}>
      <Spin />
    </div>
  )
}

export const Empty = () => {
  return (
    <div className={styles.textCenter}>
      <Typography.Title level={4}>등록된 메뉴가 아직 없습니다</Typography.Title>
    </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ menus }) => {
  return (
    <Space direction="vertical" className={styles.space}>
      {menus.map((menu) => {
        return (
          <Card
            bordered
            key={menu.id}
            title={menu.title}
            bodyStyle={{ padding: 0 }}
            cover={<img src={menu.imageSrc} />}
          />
        )
      })}
    </Space>
  )
}
