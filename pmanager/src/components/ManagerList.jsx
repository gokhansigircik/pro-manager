import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router-dom';

function ManagerList({ managers, setLoaded }) {
  const handleCheck = (e, id) => {
    axios
      .put(`http://localhost:5001/api/managers/${id}`, {
        isComplete: e.target.checked,
      })
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/managers/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    managers &&
    managers.map((manager) => {
      return (
        <div key={manager._id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="form-check">
                <input
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  className="form-check-input"
                  checked={manager.isComplete}
                  onChange={(e) => handleCheck(e, manager._id)}
                /> */}
              {/* <label htmlFor="isComplete" className="form-check-label"> */}
              <Link to={`/managers/${manager._id}`}>{manager.subtitle}</Link>
              {/* </label>
              </div> */}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(manager._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default ManagerList;
