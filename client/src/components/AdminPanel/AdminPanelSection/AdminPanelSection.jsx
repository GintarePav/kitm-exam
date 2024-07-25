import SectionDescription from "../../SectionMessages/SectionDescription/SectionDescription";
import AdminPanelNewForm from "../AdminPanelNewForm/AdminPanelNewForm";

const AdminPanelSection = () => {
  return (
    <section
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "86vh" }}
    >
      <SectionDescription
        headline="Valgiaraščio valdymas"
        text="Čia matomi visi patiekalai. Naujus patiekalus pridėti galima paspaudus apskritą pliuso ženklą. Redaguoti ar trinti valgiaraščio patiekalus galima paspaudus ant trijų vertikalių taškų patiekalo kairėje."
      />
      <div className="container d-flex flex-column justify-content-center p-3">
        <div className="mb-3">
          <a
            href=""
            className="link-dark"
            aria-label="Naujas patiekalas"
            data-bs-toggle="modal"
            data-bs-target="#dish-form"
          >
            <i className="bi bi-plus-circle-fill h1"></i>
          </a>
          <AdminPanelNewForm />
        </div>
        <div className="mb-3">{/* table */}</div>
      </div>
    </section>
  );
};

export default AdminPanelSection;
