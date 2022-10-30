import { PostPreviewModel } from '../../models/postPreview'
import { LikeButton } from '../LikeButton/LikeButton'
import styles from './postPreview.module.scss'

export interface PostPreviewProps {
    post: PostPreviewModel
}

export const PostPreview = ({ post }: PostPreviewProps) => {
    const { title, description, likeCount, author, date, imageUrl, profileUrl, tags } = post;
    const onLikeClick = () => {
        alert("like!")
    }
    const onArticleClick = () => {
        alert("article!")
    }

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.postHeader__profile}>
                    <a className={styles.postHeader__profilePhoto} href={profileUrl}>
                        <img src={imageUrl} />
                    </a>
                    <div className={styles.postHeader__info}>
                        <a href={profileUrl} className={styles.postHeader__link}>{author}</a>
                        <span className={styles.postHeader__date}>{date}</span>
                    </div>
                </div>
                <LikeButton likeCount={likeCount} onClick={onLikeClick} />
            </div>
            <a className={styles.post__body} onClick={onArticleClick}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.post__footer}>
                    <span>Read more...</span>
                    <ul className={styles.post__tags}>
                        {tags.map((tag) => <li>{tag}</li>)}
                    </ul>
                </div>
            </a>

        </div>
    )
}