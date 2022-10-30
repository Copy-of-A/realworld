import styles from './popularTags.module.scss'

export interface PopularTagsProps {
    tags: Array<string>
}

export const PopularTags = ({ tags }: PopularTagsProps) => {
    return (
        <aside className={styles.container}>
            <div className={styles.innerContainer}>
                <p>Popular Tags</p>
                <div className={styles.tagList}>
                    {tags.map((tag) => <a href={`https://conduit.productionready.io/api/articles?limit=10&offset=10&tag=${tag}`}>{tag}</a>)}
                </div>
            </div>
        </aside>
    )
}