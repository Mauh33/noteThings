import "../../styles/pages/_homepage.scss";
// import FormNote from "../../components/Form/FormNote";
import PostIt from "../../components/main-tools/PostIt";
import FormNote from "../../components/Form/Formnote";

interface HomePageProps {
  title: string;
  itemToShow: boolean;
}

function HomePage({title, itemToShow}: HomePageProps) {

  return (
    <>
      <section className="note-form-section">
        <h2>{title}</h2>
        {itemToShow
          ?
          <FormNote/>
          : " "
        }
      </section>
      <section className="postIt-section">
        <PostIt
          title="Courses"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          "
        />
        <PostIt
          title="Courses"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          "
        />
        <PostIt
          title="Courses"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          "
        />
      </section>
    </>
  );
}

export default HomePage;
