import "../../styles/pages/_homepage.scss";
import PostIt from "../../components/main-tools/PostIt";
import FormNote from "../../components/Form/Formnote";
import { HomePageProps } from "../../types/interface";
import { useStateContext } from "../../utils/DispatcherContext";

function HomePage({ title }: HomePageProps) {
  const { isFormVisible } = useStateContext();

  return (
    <>
      <section className='note-form-section'>
        <h2>{title}</h2>
        {isFormVisible ? <FormNote /> : " "}
      </section>
      <section className='postIt-section'>
        <PostIt
          title='Courses'
          description=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          '
        />
        <PostIt
          title='Courses'
          description=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          '
        />
        <PostIt
          title='Courses'
          description=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distincti
          '
        />
      </section>
    </>
  );
}

export default HomePage;
