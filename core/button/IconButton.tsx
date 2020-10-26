import { IconButton, IconsType } from '@chakra-ui/core';
import { Icons } from '@chakra-ui/core/dist/theme/icons';

interface props {
    icon: Icons,
    label: string,
    OnClick: (event: React.MouseEvent<any, MouseEvent>) => void
}

export default function({ icon, label, OnClick }: props) {
    return (
        <IconButton aria-label={label} icon={ icon || "chevron-up" } onClick={ OnClick } />
    )
}