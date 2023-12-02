import Timeline from "src/components/site/timeline";
import { posts } from "src/mock/posts";
export default function Home() {
    return (
        <>
            <Timeline posts={posts}/>
        </>
    )
}