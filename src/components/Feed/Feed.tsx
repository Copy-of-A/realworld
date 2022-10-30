import { PostPreviewModel } from "../../models/models";
import { PostPreview } from "../PostPreview/PostPreview";
import styles from './feed.module.scss';

export interface FeedProps {
    posts: Array<PostPreviewModel>;
    isLoading: boolean;
}

export const Feed = ({ posts, isLoading }: FeedProps) => {
    return (
        <div className={styles.container}>
            {isLoading ? "Loading..." : posts.map((post: PostPreviewModel, i) => <PostPreview key={i} post={post} />)}
        </div>
    )
}