import { useState } from "react";
import axios from "axios";

function ManagerForm({ setLoaded }) {
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubtitle("");
    setPrice("");
    setDescription("");

    const newManager = {
      subtitle,
      price,
      description,
    };

    axios
      .post("http://localhost:5001/api/managers", newManager)
      .then((res) => {
        console.log(res.data);
        setErrors({});
        setLoaded(false);
      })
      .catch((err) => {
        console.log(err);
        // if u dont now what to put you can chain it like it and dont break your code
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="subtitle" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              className="form-control"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            {errors?.subtitle && (
              <span className="form-text text danger">
                {errors.subtitle.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              min='0'
              name="price"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors?.price && (
              <span className="form-text text danger">
                {errors.price.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
              {errors?.description && (
              <span className="form-text text danger">
                {errors.description.message}
              </span>
            )}

          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerForm;

