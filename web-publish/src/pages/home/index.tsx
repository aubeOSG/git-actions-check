import React from 'react'
import styles from './styles.module.scss'

export const Route = '/'

export const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <div>
        <a href="/content_authoring.dmg">Download App (MAC)</a>
      </div>
    </div>
  )
}

export default {
  Route,
  Page,
}
