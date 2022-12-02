import { ReactNode } from "react";
import * as S from "./Button.style";

interface AllProps {
    children: ReactNode | ReactNode[];
    href?: string;
    type?: "button" | "submit";
    variant?: "gradientHover" | "blue" | "gradient" | "glowing" | "glowingBlue";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    onClick?: () => void;
}

// Dzięki temu nie doda się TYPE jak dodajesz HREF i na odwrót.
// W tym przypadku raczej nie jest to jakoś super potrzebne, bo z założenia wiemy, że anchor nie powinien posiadać type.
// Z naciskiem na "z założenia" xd
// Ale to tak na przyszłość

type Props = HrefProps | WithoutHrefProps;

interface HrefProps extends AllProps {
    href?: string;
    type?: never;
}

interface WithoutHrefProps extends AllProps {
    type?: "button" | "submit";
    href?: never;
}

export const Button = ({
    children,
    href,
    size = "md",
    variant = "gradient",
    type = "button",
    fullWidth,
    onClick,
}: Props) => {
    if (href)
        return (
            <S.Anchor
                href={href}
                size={size}
                variant={variant}
                fullWidth={!!fullWidth}
            >
                {children}
            </S.Anchor>
        );

    return (
        <S.Button
            size={size}
            variant={variant}
            type={type}
            fullWidth={!!fullWidth}
            onClick={() => onClick?.()}
        >
            {children}
        </S.Button>
    );
};
