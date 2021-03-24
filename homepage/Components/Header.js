import headerStyles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <nav className={headerStyles.header}>
                <div className={headerStyles.headerright}>
                    <img src="https://generosityglobal.org/wp-content/uploads/2021/02/GG_Logo.png"/>
                </div>
                <div className={headerStyles.headerleft}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Our Focus</Link>
                        </li>
                        <li>
                        <Link href="/">Get Involved</Link>
                        </li>
                        <li>
                        <Link href="/">About</Link>
                        </li>
                        <li>
                        <Link href="/">Updates</Link>
                        </li>
                        <li>
                        <Link href="/">Shop our Store</Link>
                        </li>
                        <li>
                        <Link href="/">DONATE</Link>
                        </li>
                        <li>
                        <Link href="/">SignIn</Link>
                        </li>
                    </ul> 
                </div>           
        </nav>
        </div>
    )
}

export default Header
