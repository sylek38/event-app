import Image from "next/image";
import { Img } from "../img/Img";
import * as S from "./Avatar.style";

interface Props {
    src: string;
    alt: string;
    size?: "50" | "60" | "120";
    withBorder?: boolean;
}

export const Avatar = ({ src, alt, size = "60", withBorder }: Props) => {
    return (
        <S.Wrapper withBorder={!!withBorder} $size={size}>
            <Img src={src} alt={alt} width={size} height={size} />
        </S.Wrapper>
    );
};
