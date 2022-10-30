export interface ArticlesModel {
    articles: Array<PostPreviewModel>,
    articlesCount: number;
}

export interface PostPreviewModel {
    author: Author;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: Array<string>;
    title: string;
    updatedAt: string;   
}

export interface Author {
    bio: string | null;
    following: boolean;
    image: string;
    username: string;
}