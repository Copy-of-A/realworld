import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button'
import styles from './signContainer.module.scss'

export interface SignContainerProps {
    heading: string;
    link: Link;
    handleButtonClick: () => void;
    children: React.ReactNode
}

export type Link = {
    name: string;
    path: string;
}

export const SignContainer = ({ heading, link, handleButtonClick, children }: SignContainerProps) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.container__h1}>{heading}</h1>
            <Link className={styles.container__link} to={link.path}>{link.name}</Link>
            {children}
        </section>
    )
}