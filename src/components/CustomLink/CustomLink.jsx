import { Link, useMatch } from 'react-router-dom';
import styles from './styles.module.css';

const CustomLink = ({children, to, ...props}) => {
    return (
        <Link
            to={to}
            className={styles.main}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink;