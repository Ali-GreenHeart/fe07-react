import styles from './index.module.css'
import NavBar from './NavBar'

const PageContainer = ({ children, className }) => {
    return (
        <>
            <header className={styles.header}>
                <NavBar />
            </header>
            <main className={className}>{children}</main>
            <footer style={{
                backgroundColor: 'green'
            }}>
                2023 @
            </footer>
        </>
    )
}

export default PageContainer
