import Meta from "../components/Meta"
import styles from "../styles/Home.module.css"

const Layout = ({children}) => {
    return (
        <>
        <Meta />
        <div className={styles.container}>
            <div className={styles.main}>
                {children}
            </div>
        </div>
        </>
    )
}

export default Layout