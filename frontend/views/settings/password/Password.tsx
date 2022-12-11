import * as S from "./Password.style";

import { TextInput } from "../../../components/inputs/text/TextInput";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../../components/button/Button";

interface FormTypes {
    old_password: string;
    new_password: string;
    repeat_password: string;
}

export const Password = () => {
    const { t } = useTranslation("global");

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormTypes>();

    const onSubmit: SubmitHandler<FormTypes> = (data) => {
        console.log(data);
    };

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="old_password"
                    register={register}
                    control={control}
                    isError={!!errors.old_password}
                    required
                    dark
                />

                <TextInput
                    id="new_password"
                    register={register}
                    control={control}
                    isError={!!errors.new_password}
                    required
                    dark
                />

                <TextInput
                    id="repeat_password"
                    register={register}
                    control={control}
                    isError={!!errors.repeat_password}
                    required
                    dark
                />

                <Button variant="gradient" type="submit" fullWidth>
                    {t("confirm")}
                </Button>
            </S.Form>
        </S.Container>
    );
};
