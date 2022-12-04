import { useForm } from "react-hook-form";
import { TextInput } from "../inputs/text/TextInput";
import * as S from "./Header.style";

interface FormTypes {
    search: string;
}

export const Header = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useForm<FormTypes>();

    return (
        <S.Header>
            <div>
                {/* Temporary */}
                <TextInput
                    id="search"
                    register={register}
                    control={control}
                    hideLabel
                />
                <div>avatar</div>
            </div>

        </S.Header>
    );
};
