import "./Register.style.ts";
import * as S from "./Register.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { TextInput } from "../../components/inputs/text/TextInput";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../components/button/Button";

interface FormTypes {
    register_name: string;
    register_lastname: string;
    register_email: string;
    register_password: string;
}

export const Register = () => {
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
            <S.RightSide>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Header>{t("sign_up_title")}</S.Header>
                    <TextInput
                        id="register_name"
                        register={register}
                        control={control}
                        isError={!!errors.register_name}
                        fullWidth
                        required
                    />

                    <TextInput
                        id="register_lastname"
                        register={register}
                        control={control}
                        isError={!!errors.register_lastname}
                        fullWidth
                        required
                    />

                    <TextInput
                        id="register_email"
                        register={register}
                        control={control}
                        isError={!!errors.register_email}
                        fullWidth
                        required
                    />

                    <TextInput
                        id="register_password"
                        register={register}
                        control={control}
                        isError={!!errors.register_password}
                        type="password"
                        fullWidth
                        required
                    />
                    <S.Middle>
                        <S.MiddleContent>
                            <S.MiddleLeft>
                                <S.MiddleInput type="checkbox" required />
                                <S.MiddleSpan></S.MiddleSpan>
                                {t("i_have_read")}{" "}
                                <S.MiddleHref href="#">
                                    {t("terms_and_conditions")}
                                </S.MiddleHref>
                            </S.MiddleLeft>
                        </S.MiddleContent>
                    </S.Middle>
                    <Button variant="gradient" type="submit" fullWidth>
                        {t("sign_up_title")}
                    </Button>
                    <S.GoogleButton type="submit">
                        <S.GoogleIcon>
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>{" "}
                        </S.GoogleIcon>
                        {t("sign_up_google")}
                    </S.GoogleButton>
                    <S.Footer>
                        <S.FooterSpan>{t("have_account")}</S.FooterSpan>
                        <S.FooterHref>{t("sign_in")}</S.FooterHref>
                    </S.Footer>
                </S.Form>
            </S.RightSide>
            <S.LeftSide></S.LeftSide>
        </S.Container>
    );
};
