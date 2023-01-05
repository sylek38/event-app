import "./RegisterView.style.ts";
import * as S from "./RegisterView.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { TextInput } from "../../components/inputs/text/TextInput";

import { SubmitHandler, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { Button } from "../../components/button/Button";

import Link from "next/link";
import { Routes } from "../../routes/Routes";
import {
    APISignInMutationVariables,
    useAPISignUp,
} from "../../api/auth/useAPISignUp";
import { passwordRegex } from "../../utils/regex";

export const RegisterView = () => {
    const { t } = useTranslation("global");

    const { isError, isLoading, mutateAsync } = useAPISignUp();

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<APISignInMutationVariables>();

    const onSubmit: SubmitHandler<APISignInMutationVariables> = async (
        data
    ) => {
        await mutateAsync(data);
        console.log(data);
    };

    return (
        <S.Container>
            <S.RightSide>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Header>{t("sign_up_title")}</S.Header>
                    <TextInput
                        id="name"
                        register={register}
                        control={control}
                        isError={!!errors.name}
                        required
                        dark
                    />
                    <TextInput
                        id="surname"
                        register={register}
                        control={control}
                        isError={!!errors.surname}
                        required
                        dark
                    />
                    <TextInput
                        id="email"
                        register={register}
                        control={control}
                        isError={!!errors.email}
                        type="email"
                        required
                        dark
                    />
                    <TextInput
                        id="password"
                        register={register}
                        control={control}
                        isError={!!errors.password}
                        type="password"
                        pattern={passwordRegex}
                        customErrorPrefix="requirements"
                        textError
                        required
                        dark
                    />

                    <S.Middle>
                        <S.MiddleContent>
                            <S.MiddleLeft>
                                {/* TODO: checkbox */}
                                {/* commented for now, it destroys validation */}
                                {/* <S.MiddleInput type="checkbox" required />
                                <S.MiddleSpan></S.MiddleSpan>
                                {t("i_have_read")}
                                <Link href={Routes.TERMS}>
                                    <S.MiddleHref>
                                        {t("terms_and_conditions")}
                                    </S.MiddleHref>
                                </Link> */}
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
                        <Link href={Routes.LOGIN}>
                            <S.FooterHref>{t("sign_in")}</S.FooterHref>
                        </Link>
                    </S.Footer>
                </S.Form>
            </S.RightSide>
            {isError && <div>isError</div>}

            {isLoading && <div>isLoading</div>}
            <S.LeftSide></S.LeftSide>
        </S.Container>
    );
};
