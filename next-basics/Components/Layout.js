import styles from '../styles/Layout.module.css';
import Nav from '../Components/Navbar';

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                {/* <h1>Welcome to the homepage!</h1> */}
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
