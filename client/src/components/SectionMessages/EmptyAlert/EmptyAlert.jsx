const EmptyAlert = (props) => {
  return (
    <div className="alert alert-light bg-white w-100" role="alert">
      <p className="text-center text-dark">{props.text}</p>
    </div>
  );
};

export default EmptyAlert;
