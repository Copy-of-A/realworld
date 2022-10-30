import { Banner } from "../../components/Banner/Banner"
import { Feed } from "../../components/Feed/Feed"
import { PopularTags } from "../../components/PopularTags/PopularTags"
import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer"

const posts = [
    {
        title: "Repellat nihil in magnam quasi. Et dicta at est laborum doloribus sit. Quia possimus necessitatibus magnam, est, nulla, reiciendis exercitationem neque et tenetur quia deserunt asperiores blanditiis doloribus ipsum beatae numquam. Ullam rerum consequuntur occaecati error. Possimus consequatur consectetur doloribus voluptate nihil, tenetur sunt fugiat quae id, ducimus non.",
        description: "Eos necessitatibus officia quos. Et vitae aliquid autem occaecati repudiandae placeat repellat odit. Minus iure voluptates autem quam dicta. Iste consequatur aspernatur voluptas quibusdam sint beatae.",
        likeCount: 84,
        author: "Magda Parry",
        date: "October 9, 2022",
        imageUrl: "https://api.realworld.io/images/demo-avatar.png",
        profileUrl: "",
        tags: ["implementations", "introduction", "codebaseShow", "deserunt"],
    }
]

const tags = ["implementations", "welcome", "introduction", "codebaseShow", "ipsum", "qui", "et", "quia", "cupiditate", "deserunt"]

export const Home = () => {
    return (
        <>
            <Banner />
            <LayoutContainer>
                <div className="home">
                    <Feed posts={posts} />
                    <PopularTags tags={tags} />
                </div>
            </LayoutContainer>
        </>

    )
}