import styles from'../../styles/Common.module.css'

import Menu from './Menu'

const Main = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MenuWrapper}>
        <h1 className={styles.MenuItem}>Introduce</h1>
        <h1 className={styles.MenuItem}>2</h1>
        <h1 className={styles.MenuItem}>3</h1>
      </div>
        <div className={styles.MainWrapper}>
        </div>
    </div>
  )
}

export default Main
