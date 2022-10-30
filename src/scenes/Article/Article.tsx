import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer";
import { useArticle } from "./article.hook";
import styles from "./article.module.scss"
import ReactLoading from 'react-loading';
import { ProfileLinkContainer } from "../../components/ProfileLinkContainer/ProfileLinkContainer";
import { ArticleTags } from "../../components/ArticleTags/ArticleTags";

export const Article = () => {
    const {
        articleId,
        article,
        isLoading,
    } = useArticle();

    return (
        <>
            {
                isLoading ?
                    <ReactLoading type={"bubbles"} color={"#5CB85C"} height={'5%'} width={'5%'} />
                    : article ?
                        <>
                            <div className={styles.blackContainer}>
                                <LayoutContainer>
                                    <h1>{article.slug}</h1>
                                    <ProfileLinkContainer author={article.author} updatedAt={article.updatedAt} />
                                    <ArticleTags tagList={article.tagList} />
                                </LayoutContainer>
                            </div>
                            <LayoutContainer>
                                <div className={styles.content}>
                                    <p>{article.body}</p>
                                </div>
                            </LayoutContainer>
                        </>
                        : <p>No such article</p>
            }
        </>
    )
}