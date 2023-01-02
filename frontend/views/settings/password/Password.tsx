import * as S from "./Password.style";

import { TextInput } from "../../../components/inputs/text/TextInput";

import { useAPISettingsPassword } from "../../../api/users/useAPISettingsPassword";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../../components/button/Button";
import { passwordRegex } from "../../../utils/regex";
import { useState } from "react";

interface FormTypes {
    userId: string;
    old_password: string;
    new_password: string;
    repeat_password: string;
}

export const Password = () => {
    const { t: t1 } = useTranslation("global");
    const { t: t2 } = useTranslation("settings");

    const { isError, isLoading, mutateAsync } = useAPISettingsPassword();
    const [successMessage, setSuccessMessage] = useState(false);

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormTypes>();

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        console.log(data);
        await mutateAsync(data);
        setSuccessMessage(true);
        reset();
    };

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="old_password"
                    register={register}
                    control={control}
                    isError={!!errors.old_password}
                    pattern={passwordRegex}
                    required
                    dark
                />

                <TextInput
                    id="new_password"
                    register={register}
                    control={control}
                    isError={!!errors.new_password}
                    pattern={passwordRegex}
                    required
                    dark
                />

                <TextInput
                    id="repeat_password"
                    register={register}
                    control={control}
                    isError={!!errors.repeat_password}
                    pattern={passwordRegex}
                    required
                    dark
                />

                <Button variant="gradient" type="submit" fullWidth>
                    {t1("confirm")}
                </Button>

                {successMessage && (
                    <S.Success>{t2("password_changed")}</S.Success>
                )}
            </S.Form>
        </S.Container>
    );
};
