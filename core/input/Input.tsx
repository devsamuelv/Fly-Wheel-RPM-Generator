import { Input, useColorMode } from '@chakra-ui/core'
import { InputBackgroundColor, InputBorderColor } from '../theme/Theme';
import styles from './input.module.css'

interface props {
    placeholder?: string ,
    margin?: string,
    marginLeft?: string,
    marginRight?: string,
    marginTop?: string,
    marginBottom?: string,
    float?: "left" | "right",
    width?: string,
    OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export default function({ placeholder, margin, marginBottom, marginLeft, marginRight, marginTop, width, OnChange }: props) {
    const { colorMode } = useColorMode();

    return (
        <Input 
            backgroundColor={ InputBackgroundColor[ colorMode ] }
            placeholder={ placeholder } 
            margin={margin} 
            marginBottom={marginBottom} 
            marginLeft={marginLeft} 
            marginRight={marginRight} 
            marginTop={marginTop} 
            width={width} 
            onChange={ OnChange }
            focusBorderColor="#5e729e98"
        />

        // <input placeholder={ placeholder || "" } style={{ 
        //     margin: margin, 
        //     marginBottom: marginBottom, 
        //     marginLeft: marginLeft, 
        //     marginTop: marginTop, 
        //     marginRight: marginRight,
        //     borderColor: InputBorderColor[ colorMode ],
        //     backgroundColor: InputBackgroundColor[ colorMode ],
        //     width: width,
        //     boxShadow: InputBorderColor[ colorMode ]
        // }} className={ styles.input } type="text" />
    )
}