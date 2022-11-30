import "./Settings.style.ts";
import * as S from "./Settings.style";

import React, { useContext, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Layout } from "../../views/layout/Layout";
import { TextInput } from "../../components/inputs/text/TextInput";
import { Button } from "../../components/button/Button";

import useTranslation from "next-translate/useTranslation";

interface FormTypes {
    register_name: string;
    register_lastname: string;
    register_email: string;
    register_password: string;
}

export const Settings = () => {
    const { t } = useTranslation("global");
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormTypes>({});

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        try {
        } catch (error) {}
    };

    return (
        <Layout>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.LeftSide>
                    <S.ProfilePictureContainer>
                        <S.AvatarIMG src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg"></S.AvatarIMG>
                        <S.AvatarLabel htmlFor="fileInput">
                            {t("profile_change_picture")}
                        </S.AvatarLabel>
                        <S.ImageInput
                            type="file"
                            id="fileInput"
                            onChange={(e) =>
                                console.log("Image profile change")
                            }
                        ></S.ImageInput>
                    </S.ProfilePictureContainer>
                    <TextInput
                        id="register_name"
                        register={register}
                        control={control}
                        fullWidth
                        required
                    />
                    <TextInput
                        id="register_lastname"
                        register={register}
                        control={control}
                        fullWidth
                        required
                    />
                    <TextInput
                        id="register_email"
                        register={register}
                        control={control}
                        fullWidth
                        required
                    />
                    <TextInput
                        id="register_password"
                        register={register}
                        control={control}
                        fullWidth
                        required
                    />

                    <S.deleteAcc>{t("profile_delete")}</S.deleteAcc>
                </S.LeftSide>
                <S.RightSide>
                    <S.Header>{t("profile_edit")}</S.Header>
                    <S.HeaderBelow>{t("biography")}</S.HeaderBelow>
                    <S.Biogram
                        placeholder={t("biography_placeholder")}
                    ></S.Biogram>
                    <Button type="submit">{t("button_confirm")}</Button>
                </S.RightSide>
            </S.Form>
        </Layout>
    );
};
