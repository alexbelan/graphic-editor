import { useParams } from "react-router";

const ProjectPage = () => {
  const { id } = useParams();
  return <div>Project {id}</div>;
};

export default ProjectPage;
