import styles from "./Navbar.module.css"
import { GiHealthNormal } from "react-icons/gi"

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <GiHealthNormal />
            <h3 className={styles.NavTitle}>DiaBem</h3>
        </nav>
    )
}

export default Navbar
