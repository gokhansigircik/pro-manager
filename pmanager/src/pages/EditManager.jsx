import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditManager() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    subtitle: "",
    price: "",
    description: "",
    isComplete: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/managers/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setManager(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setManager({
      ...manager,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setManager({
      ...manager,
      isComplete: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5001/api/managers/${id}`, manager)

      //instead of writing manager next to id u can write the long version like this too
      // subtitle: manager.subtitle,
      // price: manager.price,
      // description: manager.description,
      // isComplete: manager.isComplete,

      .then((res) => {
        console.log(res.data);
        navigate('/managers')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Manager:</h1>
      <div className="card">
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
                value={manager.subtitle}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                value={manager.price}
                onChange={handleChange}
              />
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
                value={manager.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={manager.isComplete}
                onChange={handleCheck}
              />
              <label htmlFor="isComplete" className="form-check-label">
                Completed?
              </label>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                EDIT MANAGER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditManager;
