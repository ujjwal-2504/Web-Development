import { useState } from "react";
import "./CommentsForm.css";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handelInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handelSubmit = (event) => {
    addNewComment(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h2>Give a comment</h2>
      <form action="#" onSubmit={handelSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={formData.usernaem}
          name="username"
          onChange={handelInputChange}
        />
        <br />

        <label htmlFor="remark">Add Remarks: </label>
        <br />
        <textarea
          name="remarks"
          id="remark"
          placeholder="Add remarks"
          onChange={handelInputChange}
          value={formData.remarks}
        ></textarea>
        <br />
        <label htmlFor="rating">Rate: </label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          max={5}
          min={1}
          value={formData.rating}
          name="rating"
          onChange={handelInputChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
