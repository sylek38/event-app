import { ChangeEventHandler, useEffect, useRef, useState } from "react";

import { Control, Path, UseFormRegister, Controller } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import * as S from "./FileInput.style";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function FileInput<T>({ id, register, onChange }: Props<T>) {
    const [file, setFile] = useState(null);
    const { t } = useTranslation("inputs");

    const { ref, ...rest } = register(id, {
        setValueAs: (e) => e.target.files[0],
    });

    const imageHandler = (e: any) => {
        if (e.target != null) {
            setFile(e.target.files[0]);
        } else return;
    };

    return (
        <S.ImageAvatar>
            <S.ImageLabel htmlFor={id} onChange={(e) => imageHandler(e)}>
                {" "}
                {t(`file_label_${id}`)}
                <S.ImageInput
                    type="file"
                    id={id}
                    ref={ref}
                    {...rest}
                ></S.ImageInput>
                <S.ImageHover>{t(`file_label_${id}`)}</S.ImageHover>
            </S.ImageLabel>
        </S.ImageAvatar>
    );
}
