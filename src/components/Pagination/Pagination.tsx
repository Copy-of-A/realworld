import { useNavigate, useSearchParams } from 'react-router-dom';
import { cn } from '../../helper';
import styles from './pagination.module.scss'

export interface PaginationProps {
    articlesCount: number;
}

export const Pagination = ({ articlesCount }: PaginationProps) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const perPage = searchParams.get("limit") ?? 10;
    const pagesCount = Math.ceil(articlesCount / +perPage)
    const pagesButtons = []
    const currentPage = searchParams.get("offset")

    const handleButtonClick = (pageNumber: number) => {
        if (currentPage === pageNumber.toString()) return;
        searchParams.set("offset", pageNumber.toString());
        navigate(`/articles?${searchParams}`)
    }

    for (let i = 0; i < pagesCount; i++) {
        pagesButtons.push(
            <button
                onClick={() => handleButtonClick(i)}
                className={cn(styles.pageButton, currentPage === i.toString() && styles.pageButton_active)}>
                {i + 1}
            </button>)
    }
    if (pagesCount > 1) {
        return (
            <>{pagesButtons}</>
        )
    }
    else return null
}