const DishCard = (props) => {
  return (
    <div className="card m-3 rounded" style={{ width: "18rem" }}>
      <div className="w-100 rounded-top" style={{ height: "200px" }}>
        <img
          src={props.photo}
          className="w-100 rounded-top"
          alt={props.name}
          style={{
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="card-body" style={{ height: "120px" }}>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div
        className="card-body d-flex justify-content-evenly"
        style={{ height: "80px" }}
      >
        <p className="card-text">
          <i className="bi bi-currency-euro"></i>
          <span>{props.price}</span>
        </p>
        <p className="card-text">
          <i className="bi bi-calendar-event"></i> <span>{props.day}</span>
        </p>
      </div>
      <div className="card-footer d-flex justify-content-evenly">
        <button
          type="button"
          className="btn btn-success w-50 mx-1"
          aria-label="Užsakymas"
        >
          <i className="bi bi-bag-plus"></i>
        </button>
        <button
          type="button"
          className="btn btn-warning w-50 mx-1"
          aria-label="Įvertinimas"
        >
          <span className="text-white">{props.numberOfLikes}</span>{" "}
          <i className="bi bi-star-fill text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default DishCard;
