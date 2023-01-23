import styles from './index.module.css'
import NavBar from './NavBar'

const PageContainer = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer>
                2023 @
            </footer>
        </>
    )
}

export default PageContainer
