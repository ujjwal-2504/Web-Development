import { useState } from "react";
import "./CommentsForm.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty";
  }

  if (!values.remarks) {
    errors.remarks = "You have to give some remarks";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
      formik.resetForm({
        values: {
          username: "",
          remarks: "",
          rating: 5,
        },
      });
    },
  });

  // let handelInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handelSubmit = (event) => {
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h2>Give a comment</h2>
      <form action="#" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={formik.values.usernaem}
          name="username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <div style={{ color: "#ff3333" }}>{formik.errors.username}</div>
        ) : null}
        <br />

        <label htmlFor="remark">Add Remarks: </label>
        <br />
        <textarea
          name="remarks"
          id="remark"
          placeholder="Add remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>
        {formik.errors.remarks ? (
          <div style={{ color: "#ff3333" }}>{formik.errors.remarks}</div>
        ) : null}
        <br />
        <label htmlFor="rating">Rate: </label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          max={5}
          min={1}
          value={formik.values.rating}
          name="rating"
          onChange={formik.handleChange}
        />
        {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
