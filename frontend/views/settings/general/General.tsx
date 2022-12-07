import * as S from "./General.style";

import { TextInput } from "../../../components/inputs/text/TextInput";
import { TextareaInput } from "../../../components/inputs/textarea/TextareaInput";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../../components/button/Button";

interface FormTypes {
    register_name: string;
    register_lastname: string;
    register_email: string;
    register_password: string;
    user_bio: string;
}
export const General = () => {
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

    const deleteHandler = () => {
        console.log("delete");
    };

    return (
        <S.Container>
            <S.ImageAvatar>
                <S.ImageLabel htmlFor="file">
                    <S.ImageInput type="file" id="file"></S.ImageInput>
                    <S.ImageHover>{t("avatar_change")}</S.ImageHover>
                </S.ImageLabel>
            </S.ImageAvatar>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="register_name"
                    register={register}
                    control={control}
                    isError={!!errors.register_name}
                    fullWidth
                    dark
                />

                <TextInput
                    id="register_lastname"
                    register={register}
                    control={control}
                    isError={!!errors.register_lastname}
                    fullWidth
                    dark
                />

                <TextInput
                    id="register_email"
                    register={register}
                    control={control}
                    isError={!!errors.register_email}
                    fullWidth
                    dark
                />

                <TextareaInput
                    id="user_bio"
                    placeholder
                    register={register}
                    control={control}
                    isError={!!errors.user_bio}
                    fullWidth
                    rows={4}
                    cols={50}
                    dark
                />

                <Button variant="gradient" type="submit" fullWidth>
                    {t("confirm")}
                </Button>

                <S.deleteBtn onClick={deleteHandler}>{t("delete")}</S.deleteBtn>
            </S.Form>
        </S.Container>
    );
};
