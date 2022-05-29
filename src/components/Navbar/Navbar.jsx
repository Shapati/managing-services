import styles from './Navbar.module.css'

export const Navbar = () =>{
  return(
    <div className={styles.navbar}>

      <div className={styles['nav-left']}>
        <h3>SHAPA YT</h3>
      </div>
      <div className={styles['nav-center']}>
        <ul>
          <li><a href="">Product</a></li>
          <li><a href="">Template</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div className={styles['nav-right']}>
        <a href="">Sign in</a>
        <a href="">Start Free</a>
      </div>

    </div>
  )
}