import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './popularTags.module.scss'

export interface PopularTagsProps {
    tags: Array<string>;
    isLoading: boolean;
}

export const PopularTags = ({ tags, isLoading }: PopularTagsProps) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const handleTagClick = (tag: string) => {
        searchParams.set("tag", tag)
        navigate(`/articles?${searchParams}`)
    }
    return (
        <aside className={styles.container}>
            <div className={styles.innerContainer}>
                <p>Popular Tags</p>
                {isLoading ? <p>Loading tags...</p> : (
                    <div className={styles.tagList}>
                        {tags.map((tag, i) => <button className={styles.tagList__tag} key={i} onClick={() => handleTagClick(tag)}>{tag}</button>)}
                    </div>
                )}
            </div>
        </aside>
    )
}