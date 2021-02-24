import moment from 'moment'

import TodayMenuCell from 'src/components/TodayMenuCell/TodayMenuCell'
import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <TodayMenuCell date={moment().format('YYYY-MM-DD')} />
      </div>
    </BasicLayout>
  )
}

export default HomePage
