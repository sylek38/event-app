import "./Login.style.ts";
import * as S from "./Login.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { TextInput } from "../../src/components/inputs/text/TextInput";

import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

interface FormTypes {
    login_email: string;
    login_password: string;
}

export const Login = () => {
    const { t } = useTranslation("global");

    const {
        register,
        control,
        formState: { errors },
    } = useForm<FormTypes>();

    return (
        <S.Container>
            <S.LeftSide />
            <S.RightSide>
                <S.Form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <S.Header>{t("sign_in")}</S.Header>
                    <TextInput
                        id="login_email"
                        register={register}
                        control={control}
                        isError={!!errors.login_email}
                        fullWidth
                        required
                    />

                    <TextInput
                        id="login_password"
                        register={register}
                        control={control}
                        isError={!!errors.login_password}
                        type="password"
                        fullWidth
                        required
                    />
                    <S.Middle>
                        <S.MiddleContent>
                            <S.MiddleLeft>
                                <S.MiddleInput type="checkbox" />
                                <S.MiddleSpan />
                                {t("remember")}
                            </S.MiddleLeft>
                        </S.MiddleContent>

                        <S.MiddleContent>
                            <S.MiddleHref href="#">
                                {t("forgot_password")}
                            </S.MiddleHref>
                        </S.MiddleContent>
                    </S.Middle>
                    <S.Button type="submit">{t("sign_in")}</S.Button>
                    <S.GoogleButton type="submit">
                        <S.GoogleIcon>
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </S.GoogleIcon>
                        {t("sign_in_google")}
                    </S.GoogleButton>
                    <S.Footer>
                        <S.FooterSpan>{t("no_password")}</S.FooterSpan>
                        <S.FooterHref>{t("sign_up")}</S.FooterHref>
                    </S.Footer>
                </S.Form>
            </S.RightSide>
        </S.Container>
    );
};
