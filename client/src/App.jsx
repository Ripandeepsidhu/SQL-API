import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
function App() {
 
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon}/>
    </main>
  )
}

export default App
