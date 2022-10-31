import { Banner } from "../../components/Banner/Banner"
import { Feed } from "../../components/Feed/Feed"
import { PopularTags } from "../../components/PopularTags/PopularTags"
import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer"
import { useHome } from "./home.hook"

export const Home = () => {
    const {
        posts,
        tags,
        isLoadingPosts,
        isLoadingTags,
        postsCount,
    } = useHome();
    return (
        <>
            <Banner />
            <LayoutContainer>
                <div className="home">
                    <Feed posts={posts} isLoading={isLoadingPosts} postsCount={postsCount ?? 0} />
                    <PopularTags tags={tags} isLoading={isLoadingTags} />
                </div>
            </LayoutContainer>
        </>

    )
}