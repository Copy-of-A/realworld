import { useEffect, useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { API_URL, Headers } from "../../helper"
import { PostPreviewModel } from "../../models/models"

export const useHome = () => {
    const [tags, setTags] = useState<Array<string>>([]);
    const [posts, setPosts] = useState<Array<PostPreviewModel>>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (searchParams.keys.length === 0) {
            setSearchParams(
                createSearchParams({
                    limit: "10",
                    offset: "0"
                }).toString())
        }
        fetch(`${API_URL}/tags`, Headers.GET)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTags(myJson.tags)
            })
            .catch(() => {
                navigate('/')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        fetch(`${API_URL}/articles?${searchParams.toString()}`, Headers.GET)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setPosts(myJson.articles)
            })
            .catch(() => {
                navigate('/')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [searchParams])
    return {
        posts,
        tags,
        isLoading,
    }
}