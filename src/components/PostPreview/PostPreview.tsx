import { PostPreviewModel } from '../../models/models'
import { LikeButton } from '../LikeButton/LikeButton'
import styles from './postPreview.module.scss'

export interface PostPreviewProps {
    post: PostPreviewModel
}

export const PostPreview = ({ post }: PostPreviewProps) => {
    const { title, description, favoritesCount, author, updatedAt, tagList } = post;
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
                    <a className={styles.postHeader__profilePhoto} href={`/@${author.username}`}>
                        <img src={author.image} />
                    </a>
                    <div className={styles.postHeader__info}>
                        <a href={`/@${author.username}`} className={styles.postHeader__link}>{author.username}</a>
                        <span className={styles.postHeader__date}>{updatedAt}</span>
                    </div>
                </div>
                <LikeButton likeCount={favoritesCount} onClick={onLikeClick} />
            </div>
            <a className={styles.post__body} onClick={onArticleClick}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.post__footer}>
                    <span>Read more...</span>
                    <ul className={styles.post__tags}>
                        {tagList.map((tag, i) => <li key={i}>{tag}</li>)}
                    </ul>
                </div>
            </a>

        </div>
    )
}