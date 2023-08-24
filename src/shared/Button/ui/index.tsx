import "./index.css";
import { Button as MantineButton } from "@mantine/core";
import { IButton } from "../interfaces";

export const Button = ({ text, color }: IButton) => {
  return (
    <MantineButton variant="filled" color={color} fullWidth mt="md" radius="md">
      {text}
    </MantineButton>
  );
};
