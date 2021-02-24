import moment from 'moment'

import TodayMenusCell from 'src/components/TodayMenusCell/TodayMenusCell'
import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <TodayMenusCell date={moment().format('YYYY-MM-DD')} />
      </div>
    </BasicLayout>
  )
}

export default HomePage
