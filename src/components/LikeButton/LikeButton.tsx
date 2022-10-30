import styles from './likeButton.module.scss'

export interface LikeButtonProps {
    likeCount: number;
    onClick: () => void;
}

export const LikeButton = ({ likeCount, onClick }: LikeButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <i></i>
            <span>{likeCount}</span>
        </button>
    )
}