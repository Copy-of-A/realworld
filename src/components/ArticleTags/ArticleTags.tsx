import styles from './articleTags.module.scss'

export interface ArticleTagsProps {
    tagList: Array<string>
}

export const ArticleTags = ({ tagList }: ArticleTagsProps) => {
    return (
        <ul className={styles.tags}>
            {tagList.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
    )
}