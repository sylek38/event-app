import { Path, UseFormRegisterReturn } from "react-hook-form";

import { SelectItemProps } from "../SelectInput";
import * as S from "./ItemSelect.style";

import { Radio } from "../../radio/Radio";

interface Props<T> extends SelectItemProps {
    returnRegister: UseFormRegisterReturn<Path<NonNullable<T>>>;
}

export function RadioItemSelect<T>({ id, returnRegister, text }: Props<T>) {
    return (
        <S.Label>
            <Radio id={id} value={id} returnRegister={returnRegister} />
            {text}
        </S.Label>
    );
}
