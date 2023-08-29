import { ActionIcon as MantineActionIcon } from '@mantine/core';
// import { IconAdjustments } from '@tabler/icons-react';
import { PropsButton } from '../interfaces';

function IconButton({variant='default', icon, onClick}: PropsButton) {
  return (
    <MantineActionIcon variant={variant} onClick={onClick}>
      {icon}
    </MantineActionIcon>
  );
}

export default IconButton