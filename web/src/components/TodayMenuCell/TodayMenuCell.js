import moment from 'moment'
import { Card, Spin } from 'antd'

import styles from './TodayMenuCell.module.css'

export const QUERY = gql`
  query FIND_MENU_BY_ID($date: String!) {
    todayMenu(date: $date) {
      id
      imageSrc
      date
      createdAt
    }
  }
`

export const Loading = ({ date }) => {
  return (
    <Card bordered title={moment(date).format('YYYY-MM-DD (ddd)')}>
      <div className={styles.loading}>
        <Spin />
      </div>
    </Card>
  )
}

export const Empty = ({ date }) => {
  return (
    <Card bordered title={moment(date).format('YYYY-MM-DD (ddd)')}>
      등록된 오늘의 메뉴가 아직 없습니다.
    </Card>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ todayMenu, date }) => {
  return (
    <Card
      bordered
      bodyStyle={{ padding: 0 }}
      cover={<img src={todayMenu.imageSrc} />}
      title={moment(date).format('YYYY-MM-DD (ddd)')}
    />
  )
}
