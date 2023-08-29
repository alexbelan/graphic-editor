import React, { useState } from "react";
import {
  IconBrush,
  IconEraser,
  IconBackslash,
  IconSquare,
  IconPalette,
} from "@tabler/icons-react";
import IconButton from "shared/IconButton/ui";
import { Card, ColorPicker } from "@mantine/core";
import "./index.css";

type typeButttonClick = "brush" | "eraser" | "line" | "figure" | "color" | null;

const Toolbar = () => {
  const [focusButton, setFocusButton] = useState<typeButttonClick>(null);
  const [color, setColor] = useState<string>("");

  const hundlerClickBrush = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setFocusButton("brush");
  };

  const hundlerClickEraser = (event: React.MouseEvent<HTMLElement>) => {
    setFocusButton("eraser");
  };

  const hundlerClickLine = (event: React.MouseEvent<HTMLElement>) => {
    setFocusButton("line");
  };

  const hundlerClickFigure = (event: React.MouseEvent<HTMLElement>) => {
    setFocusButton("figure");
  };

  const hundlerClickColor = (event: React.MouseEvent<HTMLElement>) => {
    if (focusButton === "color") {
      setFocusButton(null);
    } else {
      setFocusButton("color");
    }
  };

  return (
    <div className="">
      <Card shadow="sm" padding="sm" radius="md" className="toolbar">
        <IconButton
          onClick={hundlerClickBrush}
          icon={<IconBrush size="1rem" color="black" />}
          variant={focusButton === "brush" ? "light" : "subtle"}
        />
        <IconButton
          onClick={hundlerClickEraser}
          icon={<IconEraser size="1rem" color="black" />}
          variant={focusButton === "eraser" ? "light" : "subtle"}
        />
        <IconButton
          onClick={hundlerClickLine}
          icon={<IconBackslash size="1rem" color="black" />}
          variant={focusButton === "line" ? "light" : "subtle"}
        />
        <IconButton
          onClick={hundlerClickFigure}
          icon={<IconSquare size="1rem" color="black" />}
          variant={focusButton === "figure" ? "light" : "subtle"}
        />
        <IconButton
          onClick={hundlerClickColor}
          icon={<IconPalette size="1rem" color="black" />}
          variant={focusButton === "color" ? "light" : "subtle"}
        />
      </Card>
      {focusButton === "color" && (
        <Card shadow="sm" padding="sm" radius="md" className="color-picker">
          <ColorPicker value={color} onChange={(color) => setColor(color)} />
        </Card>
      )}
    </div>
  );
};

export default Toolbar;
