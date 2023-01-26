import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manager, setManager] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/managers/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setManager(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/managers/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/managers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>--</h1>
      {manager && (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{manager.subtitle}</h4>
            <h5 className="card-title">Price:$ {manager.price}</h5>
            <h5 className="card-title">Description: {manager.description}</h5>
            {/* <p>{ manager.isComplete ? 'Completed.' : 'Not Completed.'}</p> */}
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link
              to={`/managers/${manager._id}/edit`}
              className="btn btn-warning me-2"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(manager._id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManagerDetail;
