import { useEffect, useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { API_HEADERS, API_URL } from "../../helper"
import { PostPreviewModel } from "../../models/models"

export const useHome = () => {
    const [tags, setTags] = useState<Array<string>>([]);
    const [posts, setPosts] = useState<Array<PostPreviewModel>>([]);
    const [postsCount, setPostsCount] = useState<number>()
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoadingPosts, setLoadingPosts] = useState<boolean>(false);
    const [isLoadingTags, setLoadingTags] = useState<boolean>(false);
    useEffect(() => {
        if (searchParams.keys.length === 0) {
            setSearchParams(
                createSearchParams({
                    limit: "10",
                    offset: "0"
                }).toString())
        }
        setLoadingTags(true)
        fetch(`${API_URL}/tags`, API_HEADERS.GET)
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
                setLoadingTags(false)
            })
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        setLoadingPosts(true)
        fetch(`${API_URL}/articles?${searchParams.toString()}`, API_HEADERS.GET)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setPosts(myJson.articles)
                setPostsCount(myJson.articlesCount)
            })
            .catch(() => {
                navigate('/')
            })
            .finally(() => {
                setLoadingPosts(false)
            })
    }, [searchParams])
    return {
        posts,
        tags,
        isLoadingPosts,
        isLoadingTags,
        postsCount,
    }
}