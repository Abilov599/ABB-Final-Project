import { useMemo } from "react";
import InfoMessage from "src/components/site/info-message";
import Timeline from "src/components/site/timeline";
import { posts } from "src/mock/posts";
export default function Favorites() {
  const favoritePosts: PostItem[] = useMemo(() => {
    return posts.filter((post) => post.isFavorite === true);
  }, [posts]);


  return favoritePosts.length > 0 ? (

      <Timeline posts={favoritePosts} />
  ) : (
    <div className="flex items-center justify-center h-full">
        <InfoMessage>No favorite posts</InfoMessage>
    </div>
  )
}
