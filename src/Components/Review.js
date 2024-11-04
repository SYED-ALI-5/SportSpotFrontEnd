import React, { useState } from "react";

const loggedInUser = {
  username: "JohnDoe",
};

function Review({ addReview }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      username: loggedInUser.username,
      comment,
      date: new Date().toISOString(),
    };
    addReview(newReview);
    setComment("");
  };

  return (
    <form className="review-work" onSubmit={handleSubmit}>
      <textarea
        className="review-text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review here"
        required
      ></textarea>
      <button className="review-btn" type="submit">
        Submit Review
      </button>
      <div className="nav-style">
        <div className="nav-underline"></div>
      </div>
    </form>
  );
}

export default Review;
