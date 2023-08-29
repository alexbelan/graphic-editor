import { useParams } from "react-router";
import Toolbar from "widgets/Toolbar/ui";

const ProjectPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Toolbar />
      <div>Project {id}</div>
    </div>
    );
};

export default ProjectPage;
