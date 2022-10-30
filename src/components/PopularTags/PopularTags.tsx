import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './popularTags.module.scss'

export interface PopularTagsProps {
    tags: Array<string>
}

export const PopularTags = ({ tags }: PopularTagsProps) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const handleTagClick = (tag: string) => {
        console.log("click ", tag)
        searchParams.set("tag", tag)
        console.log("click after searchParams", searchParams.toString())
        navigate(`/articles?${searchParams}`)
    }
    return (
        <aside className={styles.container}>
            <div className={styles.innerContainer}>
                <p>Popular Tags</p>
                <div className={styles.tagList}>
                    {tags.map((tag, i) => <button className={styles.tagList__tag} key={i} onClick={() => handleTagClick(tag)}>{tag}</button>)}
                </div>
            </div>
        </aside>
    )
}