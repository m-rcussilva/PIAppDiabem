import styles from "./Header.module.css"

function Header() {
    return (
        <div>
            <h1 className={styles.HeaderTitle}>
                Simplifique o controle da diabetes com este aplicativo de
                monitoramento de glicose
            </h1>
        </div>
    )
}

export default Header
