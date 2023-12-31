import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
interface CommentDescription {
  username: string;
  description: string;
  sharedUser: boolean;
}

export default function CommentDescription({
  username,
  description,
  sharedUser,
}: CommentDescription) {
  const [isMore, setIsMore] = useState(false);
  return (
    <p className="-mt-3">
      <Link to={'/'}  
        className={classNames("font-semibold", {
          "text-sm": !sharedUser,
          "text-base": sharedUser,
        })}
      >  
        {username}
      </Link> {/* TODO: Link will be changed */}

      <span
        className={classNames("ml-2", {
          "text-sm": !sharedUser,
          "text-base": sharedUser,
        })}
      >
        {description?.slice(0, 100)}
        {description?.length! > 100 && isMore && <>{description?.slice(100)}</>}
        {description?.length! > 100 && (
          <button
            onClick={() => setIsMore((prev) => !prev)}
            type="button"
            className={
              classNames("text-blue-500 ml-2 font-semibold", {
                "text-xs": !sharedUser,
                "text-sm": sharedUser,
              }) 
            }
          >
            {isMore ? "Less" : "More"}
          </button>
        )}
      </span>
    </p>
  );
}
