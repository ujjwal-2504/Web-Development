import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@ub",
      remarks: "Engaging plot",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <div className="comments">
      <div className="allComments">
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span className="remark">{comment.remarks}</span>
            <span className="rating">(rating: {comment.rating})</span>
            <p className="username"> -{comment.username}</p>
          </div>
        ))}
      </div>
      <div className="commentsForm">
        <CommentsForm addNewComment={addNewComment} />
      </div>
    </div>
  );
}
