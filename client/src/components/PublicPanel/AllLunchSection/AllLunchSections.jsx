import EmptyAlert from "../../SectionMessages/EmptyAlert/EmptyAlert";
import SectionDescription from "../../SectionMessages/SectionDescription/SectionDescription";
import DishCard from "../DishCard/DishCard";

const AllLunchSection = () => {
  return (
    <section
      className="container d-flex flex-column justify-content-start align-items-center g-3"
      style={{ minHeight: "86vh" }}
    >
      <SectionDescription
        headline="Visi mūsų patiekalai"
        text="Čia galite peržiūrėti visus patiekalus, jų įvertinimus ir kurią dieną jie bus gaminami. Taip pat galite įvertinti patiekalus bei užsisakyti šios dienos pietus."
      ></SectionDescription>
      <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
        <EmptyAlert text="Patiekalų nėra." />
      </div>
      <div>
        <DishCard photo="https://jimstestandtag.co.nz/wp-content/uploads/2020/11/test-361512_1920.jpg"
        name="Pavyzdinis patiekalas"
        description="Pavyzdinio patieklao aprasymas."
        price="5"
        day="Pirmadienis"
        numberOfLikes="3"/>
      </div>
    </section>
  );
};

export default AllLunchSection;
