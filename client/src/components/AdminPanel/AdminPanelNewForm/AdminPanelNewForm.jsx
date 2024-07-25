import { useState } from "react";
import axios from "axios";

const AdminPanelNewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    day: "",
  });

  const resetFormData = {
    name: "",
    description: "",
    photo: "",
    price: "",
    day: "",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const token = localStorage.getItem("token");
    if (document.querySelector("#dish-modal-form").checkValidity()) {
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/v1/dishes`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const closeBtn = document.getElementById("dish-form-close-btn");
          setFormData(resetFormData);
          closeBtn.click();
        })
        .catch((error) => {
          console.error("Dish form error:", error);
        });
    }
  };

  return (
    <div
      className="modal fade"
      id="dish-form"
      tabIndex="-1"
      aria-labelledby="dish-form-label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="dish-form-label">
              Patiekalo informacija
            </h3>
            <button
              type="button"
              id="dish-form-close-btn"
              onClick={() => setFormData(resetFormData)}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="dish-modal-form" onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Pavadinimas"
                  placeholder="Pavadinimas"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Aprašymas"
                  placeholder="Aprašymas"
                  name="description"
                  minLength="20"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="url"
                  className="form-control"
                  aria-label="Nuotraukos nuoroda"
                  placeholder="Nuotraukos nuoroda"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text" id="euro-sign">
                  <i className="bi bi-currency-euro text-dark"></i>
                </span>
                <input
                  type="number"
                  min="0.1"
                  step="any"
                  className="form-control"
                  aria-label="Kaina"
                  placeholder="Kaina"
                  aria-describedby="euro-sign"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Diena"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Pasirinkti dieną
                  </option>
                  <option value="Mon">Pirmadienis</option>
                  <option value="Tue">Antradienis</option>
                  <option value="Wed">Trečiadienis</option>
                  <option value="Thu">Ketvirtadienis</option>
                  <option value="Fri">Penktadienis</option>
                  <option value="Sat">Šeštadienis</option>
                  <option value="Sun">Sekmadienis</option>
                </select>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-dark w-100">
                  Išsaugoti
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelNewForm;
