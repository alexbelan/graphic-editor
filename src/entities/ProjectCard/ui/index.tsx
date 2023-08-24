import "./index.css";
import {
  Card as MantineCard,
  Group as MantineGroup,
  Text as MantineText,
} from "@mantine/core";
import { Button } from "shared/Button/ui";

export const ProjectCard = () => {
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
      <MantineGroup position="apart" mt="md" mb="xs">
        <MantineText weight={500}>Norway Fjord Adventures</MantineText>
      </MantineGroup>

      <MantineText size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </MantineText>

      <Button text="Редактировать" color="blue" />
      <Button text="Удалить" color="red" />
    </MantineCard>
  );
};
