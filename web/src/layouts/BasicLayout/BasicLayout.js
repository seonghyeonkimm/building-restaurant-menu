import { useAuth } from '@redwoodjs/auth'
import { Button, Layout, Typography } from 'antd'
import { useRef } from 'react'

import styles from './BasicLayout.module.css'

const Header = () => {
  const buttonRef = useRef()
  const { logIn, logOut, isAuthenticated } = useAuth()
  const handleLogout = () => {
    if (!window.confirm('로그아웃하시겠습니까?')) {
      return
    }

    logOut()
    if (buttonRef.current) {
      buttonRef.current.blur()
    }
  }

  return (
    <Layout.Header className={styles.header}>
      <Typography.Title level={3} className={styles.title}>
        오늘의 메뉴
      </Typography.Title>
      <Button
        type="text"
        size="large"
        ref={buttonRef}
        className={styles.rightButton}
        onClick={isAuthenticated ? handleLogout : logIn}
      >
        {isAuthenticated ? '로그아웃' : '로그인'}
      </Button>
    </Layout.Header>
  )
}

const BasicLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}

export default BasicLayout
