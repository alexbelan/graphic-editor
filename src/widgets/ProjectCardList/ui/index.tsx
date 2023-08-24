import { ProjectCard } from "../../../entities/ProjectCard/ui";

export const ProjectCardList = () => {
  return Array.from(Array(3).keys()).map((card) => <ProjectCard key={card} />);
};
