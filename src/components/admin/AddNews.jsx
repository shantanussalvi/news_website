import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { newPost } from "../../redux/actionCreators/postActionCreator";

const AddNews = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      description,
      image,
    };

    dispatch(newPost(data, setProgress));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-3">
          <h1 className="text-dark text-center mt-2">Add News</h1>
        </div>
        <div className="col-md-6 mx-auto mb-5 shadow p-5">
          {progress ? (
            progress !== 100 ? (
              <div className="mx-auto p-5">
                <h1 className="text-center my-2">
                  Uploading Post - {progress}%
                </h1>
                <progress
                  className="text-center form-control"
                  max={100}
                  value={progress}
                ></progress>
              </div>
            ) : (
              <div className="mx-auto p-5   text-center ">
                <i className="fa fa-tick text-success mx-auto my-2"></i>
                <h1 className="text-center my-2">Post Uploaded successfully</h1>
                <Link
                  to={"/"}
                  className="my-2 mx-auto btn btn-primary"
                >
                  See Posts
                </Link>
              </div>
            )
          ) : (
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="category"
                  placeholder="Categories [followed with commas for multiple]"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Enter Description"
                  className="form-control"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-dark btn-block mt-2"
                  onClick={handleSubmit}
                >Add News</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNews;