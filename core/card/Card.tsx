import { useColorMode } from '@chakra-ui/core';
import { CardBorderColor, InputBorderColor } from '../theme/Theme';
import styles from './card.module.css';

interface props {
    children: any,
    padding?: string,
    width?: string,
    alignItems?: string
}

export default function({ children, padding, alignItems, width }: props) {
    const { colorMode } = useColorMode();

    return (
        <div style={{ 
            padding: padding || "10px", 
            alignItems: alignItems, 
            width: width,
            borderColor: CardBorderColor[ colorMode ]
        }} className={ styles.card }>{ children }</div>
    )
}