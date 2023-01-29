import Image from "next/image";

interface Props {
    size: number;
    src: string;
}

export const Avatar = ({ size, src }: Props) => (
    // <S.Container>
    <Image src={src} width={size} height={size} />
    // </S.Container>
);
