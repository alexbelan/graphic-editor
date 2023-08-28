import "./index.css";
import {
    Card as MantineCard,
    Group as MantineGroup,
    Text as MantineText,
    Image,
    Menu,
    ActionIcon,
    rem,
} from "@mantine/core";
import {
    IconDots,
    IconEye,
    IconFileTypePng,
    IconTrash,
    IconPencil,
} from "@tabler/icons-react";
import { IProjectCard } from "../interfaces";
import { deleteProject } from "widgets/ProjectCardList/model/slice";
import { store } from "app/store/store";
import { Link, useNavigate } from "react-router-dom";

type ProjectCardType = {
    project: IProjectCard;
};

export const ProjectCard: React.FC<ProjectCardType> = ({ project }) => {
    const navigate = useNavigate();
    return (
        <MantineCard withBorder shadow="sm" radius="md">
            <MantineCard.Section withBorder inheritPadding py="xs">
                <MantineGroup position="apart">
                    <Link to={`/projects/${project.id}`}>
                        <MantineText weight={500}>{project.name}</MantineText>
                    </Link>
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                            <ActionIcon>
                                <IconDots size="1rem" />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                icon={<IconEye size={rem(14)} />}
                                color="green"
                                onClick={() =>
                                    navigate(`/projects/${project.id}`)
                                }
                            >
                                Open
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconFileTypePng size={rem(14)} />}
                            >
                                Download
                            </Menu.Item>
                            <Menu.Item icon={<IconPencil size={rem(14)} />}>
                                Rename
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconTrash size={rem(14)} />}
                                color="red"
                                onClick={() => {
                                    store.dispatch(deleteProject(project.id));
                                }}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </MantineGroup>
            </MantineCard.Section>
            <Link to={`/projects/${project.id}`}>
                <MantineCard.Section mih={300}>
                    {project.preview && (
                        <Image src={project.preview} height={300} />
                    )}
                </MantineCard.Section>
            </Link>
        </MantineCard>
    );
};
