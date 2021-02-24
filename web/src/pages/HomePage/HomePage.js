import { Card } from 'antd'
import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <Card
          bordered
          title="2020-02-25(월)"
          cover={
            <img src="https://aptmtr-landing.s3.amazonaws.com/static/img/main/img_sevice1.jpg" />
          }
        />
      </div>
    </BasicLayout>
  )
}

export default HomePage
