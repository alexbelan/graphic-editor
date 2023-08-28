import { ProjectCard } from "entities/ProjectCard/ui";
import { useAppSelector } from "app/store/hooks.ts";

export const ProjectCardList = () => {
  const { projects } = useAppSelector((state) => state.projects);
  return projects.map((card) => <ProjectCard key={card} />);
};
