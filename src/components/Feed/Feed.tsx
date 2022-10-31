import { PostPreviewModel } from "../../models/models";
import { Pagination } from "../Pagination/Pagination";
import { PostPreview } from "../PostPreview/PostPreview";
import styles from './feed.module.scss';

export interface FeedProps {
    posts: Array<PostPreviewModel>;
    isLoading: boolean;
    postsCount: number;
}

export const Feed = ({ posts, isLoading, postsCount }: FeedProps) => {
    return (
        <div className={styles.container}>
            {isLoading ? "Loading articles..." :
                <>
                    {posts.map((post: PostPreviewModel, i) => <PostPreview key={i} post={post} />)}
                    <Pagination articlesCount={postsCount} />
                </>
            }
        </div>
    )
}