import Image from "next/image";
import { useEffect, useState } from "react";

interface PropsWithSize {
    alt: string;
    src: string;
    fill?: never;
    height: string;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    width?: string;
}

interface PropsWithFill {
    alt: string;
    src: string;
    fill?: boolean;
    height?: never;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    width?: never;
}
type Props = PropsWithFill | PropsWithSize;

export const Img = ({
    alt,
    fill,
    height,
    width,
    src,
    priority,
    quality,
    sizes,
}: Props) => {
    return (
        <Image
            width={`${width}px`}
            height={`${width}px`}
            sizes={
                sizes
                    ? sizes
                    : fill
                    ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    : undefined
            }
            quality={quality}
            src={src}
            alt={alt}
            priority={priority}
            // layout={fill}
        />
    );
};
