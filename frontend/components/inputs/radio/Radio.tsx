import { Path, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

import * as S from "./Radio.style";

interface Props {
    value: string;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
}

interface WithRegisterProps<T> extends Props {
    id: Path<NonNullable<T>>;
    register?: UseFormRegister<NonNullable<T>>;
    returnRegister?: never;
}

interface WithRegisterReturnProps<T> extends Props {
    id: string;
    returnRegister: UseFormRegisterReturn<Path<NonNullable<T>>>;
    register?: never;
}

export function Radio<T>({
    disabled,
    error,
    id,
    register,
    required,
    returnRegister,
    value,
}: WithRegisterProps<T> | WithRegisterReturnProps<T>) {
    return (
        <S.Wrapper
            type="radio"
            id={id}
            value={value.replace("_", " ")}
            data-testid={`radio_${id}_${value}`}
            disabled={disabled}
            $error={error}
            {...(register && register(id, { required }))}
            {...returnRegister}
        />
    );
}
