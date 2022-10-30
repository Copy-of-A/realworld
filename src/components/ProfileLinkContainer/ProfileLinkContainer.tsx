import { Link } from "react-router-dom"
import { Author } from "../../models/models"
import styles from './profileLinkContainer.module.scss'
import moment from "moment"

export interface ProfileLinkContainerProps {
    author: Author,
    updatedAt: string;
}

export const ProfileLinkContainer = ({ author, updatedAt }: ProfileLinkContainerProps) => {
    return (
        <div className={styles.profile}>
            <Link className={styles.profile__photo} to={`/profile?${author.username}`}>
                <img src={author.image} />
            </Link>
            <div className={styles.profile__info}>
                <Link to={`/profile?${author.username}`} className={styles.profile__link}>{author.username}</Link>
                <span className={styles.profile__date}>{moment(updatedAt).format('MMMM D YYYY')}</span>
            </div>
        </div>
    )
}