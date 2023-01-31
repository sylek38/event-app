import Image from "next/image";
import { DefaultAvatar } from "../../assets/DefaultAvatar";

import * as S from "./Avatar.style";

interface Props {
    size?: number;
    src?: string;
    border?: boolean;
}

export const Avatar = ({ size = 50, border, src }: Props) => (
    <S.Container border={border}>
        {src ? (
            <Image src={src} width={size} height={size} />
        ) : (
            <DefaultAvatar size={size} />
        )}
    </S.Container>
);
