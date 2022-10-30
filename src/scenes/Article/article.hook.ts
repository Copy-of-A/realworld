import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_HEADERS, API_URL } from "../../helper";
import { PostPreviewModel } from "../../models/models";


export const useArticle = () => {
    let { articleId } = useParams();
    const [article, setArticle] = useState<PostPreviewModel>()
    const [isLoading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        fetch(`${API_URL}/articles/${articleId}`, API_HEADERS.GET)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setArticle(myJson.article)
            })
            .catch(() => {
                navigate('/')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return {
        articleId,
        article,
        isLoading,
    }
}