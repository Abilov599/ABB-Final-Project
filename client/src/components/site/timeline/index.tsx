import { useCallback } from "react";
import PostItem from "../post-item";
interface TimelineProps {
  posts: PostItem[]
}
export default function Timeline({posts}: TimelineProps) {
  

  const handleFavorite = useCallback((post:PostItem) => {
    posts.map(p => {
      return p.id === post.id ? p.isFavorite = !p.isFavorite : null 
    })
  }, [posts])
  return (
    <div className="flex flex-col  gap-y-10 items-center ">
      {posts.map((post: PostItem) => (
        <PostItem handleFavorite={handleFavorite} post={post} key={post.id} />
      ))}
    </div>
  );
}
