import { Link, useMatch } from 'react-router-dom';
import styles from './styles.module.css';

const CustomLink = ({children, to, ...props}) => {
    return (
        <div>
            {props.bigButton ?
                <Link
                    to={to}
                    className={styles.bigButton}
                    {...props}
                >
                    {children}
                </Link>
            :
            <Link
                to={to}
                className={styles.smallButton}
                {...props}
            >
                {children}
            </Link>
            }
        </div>
    )
}

export default CustomLink;