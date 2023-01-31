import * as S from "./General.style";

import { TextInput } from "../../../components/inputs/text/TextInput";
import { TextareaInput } from "../../../components/inputs/textarea/TextareaInput";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../../components/button/Button";
import { useState } from "react";

import { useAPISettingsGeneral } from "../../../api/users/useAPISettingsGeneral";
import { useAPIDeleteAccount } from "../../../api/users/useAPIDeleteAccount";
import { emailRegex } from "../../../utils/regex";
import { DeleteAccountModal } from "./modal/DeleteAccountModal";

interface FormTypes {
    userId: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    bio: string;
}
export const General = () => {
    const { t } = useTranslation("global");
    const { t: tSettings } = useTranslation("settings");

    const [file, setFile] = useState(null);

    const { isError, isLoading, mutateAsync } = useAPISettingsGeneral();
    const [successMessage, setSuccessMessage] = useState(false);

    const { mutateAsyncDel } = useAPIDeleteAccount();

    const [open, setOpen] = useState(false);

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormTypes>();

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        // Sprawdź, czy wszystkie pola są puste
        const allFieldsEmpty = Object.values(data).every(
            (value) => value === ""
        );

        // Jeśli wszystkie pola są puste, nie wysyłaj zapytania do serwera
        if (allFieldsEmpty) {
            return;
        }
        await mutateAsync(data);
        setSuccessMessage(true);
        reset();
    };
    //Otwieranie modalu

    const deleteHandler = async () => {
        console.log("deleted :D");

        // TODO: Add real data and uncomment for final version
        // const data = { userId: "63b452cb72a9060f44ece448" };
        // await mutateAsyncDel(data);
    };

    const imageHandler = (e: any) => {
        if (e.target != null) {
            setFile(e.target.files[0]);
        } else return;
    };

    return (
        <S.Container>
            <S.ImageAvatar>
                <S.ImageLabel
                    htmlFor="file"
                    onChange={(e) => imageHandler(e)}
                    style={{
                        backgroundImage: file
                            ? `url(${URL.createObjectURL(file)})`
                            : `url(https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg)`,
                    }}
                >
                    <S.ImageInput type="file" id="file"></S.ImageInput>
                    <S.ImageHover>{t("avatar_change")}</S.ImageHover>
                </S.ImageLabel>
            </S.ImageAvatar>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="name"
                    register={register}
                    control={control}
                    isError={!!errors.name}
                    dark
                />

                <TextInput
                    id="surname"
                    register={register}
                    control={control}
                    isError={!!errors.surname}
                    dark
                />

                <TextInput
                    id="email"
                    register={register}
                    control={control}
                    isError={!!errors.email}
                    pattern={emailRegex}
                    dark
                />

                <TextareaInput
                    id="bio"
                    placeholder
                    register={register}
                    control={control}
                    isError={!!errors.bio}
                    fullWidth
                    rows={4}
                    cols={50}
                    dark
                />

                <Button variant="gradient" type="submit" fullWidth>
                    {t("confirm")}
                </Button>
                {successMessage && (
                    <S.Success>{tSettings("general_changed")}</S.Success>
                )}
            </S.Form>

            <S.DeleteBtn onClick={() => setOpen(true)}>
                {t("delete_account")}
            </S.DeleteBtn>

            {open && (
                <DeleteAccountModal
                    open={open}
                    setOpen={setOpen}
                    action={deleteHandler}
                />
            )}
        </S.Container>
    );
};
