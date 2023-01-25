import styles from './index.module.css'
import NavBar from './NavBar'

const PageContainer = ({ children, className, style }) => {
    return (
        <>
            <header className={styles.header}>
                <NavBar />
            </header>
            <main className={className} style={style}>{children}</main>
            <footer style={{
                backgroundColor: 'green'
            }}>
                2023 @
            </footer>
        </>
    )
}

export default PageContainer
