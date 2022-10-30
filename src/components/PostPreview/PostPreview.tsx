import { Link, useNavigate } from 'react-router-dom'
import { PostPreviewModel } from '../../models/models'
import { ArticleTags } from '../ArticleTags/ArticleTags'
import { LikeButton } from '../LikeButton/LikeButton'
import { ProfileLinkContainer } from '../ProfileLinkContainer/ProfileLinkContainer'
import styles from './postPreview.module.scss'

export interface PostPreviewProps {
    post: PostPreviewModel
}

export const PostPreview = ({ post }: PostPreviewProps) => {
    const { title, description, favoritesCount, author, updatedAt, tagList, slug } = post;
    const navigate = useNavigate();
    const onLikeClick = () => {
        alert("like!")
    }
    const onArticleClick = () => {
        navigate(`/article/${slug}`);
    }

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <ProfileLinkContainer author={author} updatedAt={updatedAt} />
                <LikeButton likeCount={favoritesCount} onClick={onLikeClick} />
            </div>
            <a className={styles.post__body} onClick={onArticleClick}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.post__footer}>
                    <span>Read more...</span>
                    <ArticleTags tagList={tagList} />
                </div>
            </a>

        </div>
    )
}