import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      title: "This is the project title",
      description: "This is a description of a project",
    },
  };
};



type Props = {
  title: string;
  description: string;
};

const Projects = (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Projects;

