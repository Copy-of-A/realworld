import { PostPreviewModel } from "../../models/postPreview";
import { PostPreview } from "../PostPreview/PostPreview";

export interface FeedProps {
    posts: Array<PostPreviewModel>;
}

export const Feed = ({ posts }: FeedProps) => {
    return (
        <>
            {posts.map((post: PostPreviewModel) => <PostPreview post={post} />)}
        </>
    )
}