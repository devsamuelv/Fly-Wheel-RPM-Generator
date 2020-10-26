import { Button } from '@chakra-ui/core';

interface props {
    text: string,
    bg?: "blue" | "red" | "teal" | "orange",
    size?: "xs" | "sm" | "lg" | "md"
    OnClick: (event: React.MouseEvent<any, MouseEvent>) => void
}

export default function({ text, size, bg, OnClick }: props) {
    return (
        <div>
            <Button variantColor={ bg || "blue" } size={ size || "md" } onClick={ OnClick }>{ text }</Button>
            {/* <button className={ styles.button }>{ text }</button> */}
        </div>
    )
}