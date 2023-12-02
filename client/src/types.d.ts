type PostItem = {
    id: string
    profileImg?: string
    username: string
    imgUrl: string
    description?: string
    likes: number
    comments?: CommentItem[]
    isLiked: boolean
    isFavorite: boolean
    createdAt: Date | number
}


type CommentItem = {
    id: string
    username: string
    description: string
    createdAt: Date | number
}