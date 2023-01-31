import * as S from "./CircleButton.style";

export type CircleButtonType = "black" | "gradient";

interface Props {
    onClick?: () => void;
    icon: JSX.Element;
    size?: number;
    variant?: CircleButtonType;
}

export const CircleButton = ({
    onClick,
    icon,
    size = 40,
    variant = "gradient",
}: Props) => (
    <S.Button onClick={() => onClick?.()} size={size} variant={variant}>
        {icon}
    </S.Button>
);
