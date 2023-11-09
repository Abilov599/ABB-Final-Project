import { useState } from "react";

export default function CommentInput() {
  const [rows, setRows] = useState<number>(1);
  const [comment, setComment] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const previousValue = comment;
    const currentValue = e.target.value;
    setComment(currentValue);
    if (comment.length > 60 * rows) {
      setRows((prev) => prev + 1);
    }
    if (
      previousValue.length > currentValue.length &&
      previousValue.length === 62 * (rows - 1)
    ) {
      setRows((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
        <textarea
          value={comment}
          rows={rows}
          className="outline-none resize-none text-sm"
          onChange={handleInputChange}
          placeholder="Add a comment"
        />
        <button className="bg-blue-500 text-white rounded-md w-[75px] py-1 border-blue-500 text-sm border transition-all hover:bg-white hover:text-blue-500 duration-300 " type="submit">Add</button>
    </div>
  );
}
