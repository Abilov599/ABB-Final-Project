import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { calculateTime } from "src/utils/calculateTime";
import { FaRegComment, FaBookmark, FaRegBookmark } from "react-icons/fa";
import CommentDescription from "../comment-description";
import CommentInput from "../comment-input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostItem({
  post,
  handleFavorite,
}: {
  post: PostItem;
  handleFavorite: (post: PostItem) => void;
}) {
  const [isFavorite, setIsFavorite] = useState<boolean>(post.isFavorite);
  return (
    <div className="w-3/5 flex flex-col gap-y-4 border-b pb-4 -mb-4">
      {/* POST HEADER */}

      <div className="flex items-center gap-x-3">
        <Link to={'/'} className="block w-10 h-10 "> {/* TODO: Link will be changed */}
          <img
            src={post.profileImg}
            alt={`${post.username}'s profile image`}
            className="rounded-full"
          />
        </Link>
        <Link to={'/'} className="font-semibold text-lg">{post.username}</Link> {/* TODO: Link will be changed */}
        <span>• {calculateTime(new Date("2023-08-07T12:00:00"))}</span>
      </div>

      {/* POST IMG */}
      <span className="block w-full h-[400px] bg-black/20">
        <img
          src={post.imgUrl}
          alt={post.description || "Image"}
          className="w-full h-full object-contain "
        />
      </span>

      {/* POST ACTIONS */}
      <div className="flex items-center gap-x-3">
        <button type="button">
          {post.isLiked ? (
            <AiFillHeart size={30} className="text-red-500" />
          ) : (
            <AiOutlineHeart size={30} className="" />
          )}
        </button>
        <button type="button">
          <FaRegComment size={26} />
        </button>
        <button
          type="button"
          className="ml-auto"
          onClick={() => {
            handleFavorite(post);
            setIsFavorite((prev) => !prev);
          }}
        >
          {isFavorite ? <FaBookmark size={25} /> : <FaRegBookmark size={25} />}
        </button>
      </div>

      {/* LIKES COUNT */}
      <p className="font-semibold -mt-1">{post.likes} likes</p>
      {post.description && (
        <CommentDescription
          description={post.description}
          username={post.username}
          sharedUser={true}
        />
      )}
      {post.comments?.length! > 2 && (
        <span className="text-gray-500 text-sm  -mt-2 cursor-pointer">
          View all {post.comments?.length} comments
        </span>
      )}

      {post.comments?.length! <= 2 && post.comments?.length! > 0 ? (
        post.comments?.map((comment: CommentItem) => (
          <CommentDescription
            description={comment.description}
            username={comment.username}
            sharedUser={false}
            key={comment.id}
          />
        ))
      ) : (
        <CommentDescription
          description={post.comments![0].description}
          username={post.comments![0].username}
          sharedUser={false}
        />
      )}

      <CommentInput />
    </div>
  );
}
