import "./infoView.style.ts";
import * as S from "./infoView.style";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Routes } from "../../routes/Routes";

export const InfoView = () => {
    const { t } = useTranslation("info");

    return (
        <S.Container>
            <S.Sidebar>
                <S.Logo
                    src="https://i.imgur.com/lTGXVWS.png"
                    alt="Logo"
                    width={80}
                ></S.Logo>
                <Link href={Routes.INFO}>
                    <S.Option>{t("general.contact")}</S.Option>
                </Link>
                <Link href={Routes.TERMS}>
                    <S.Option>{t("general.terms")}</S.Option>
                </Link>
                <Link href={Routes.LOGIN}>
                    <S.Option>{t("general.back")}</S.Option>
                </Link>
            </S.Sidebar>
            <S.Content>
                <S.Title>{t("info.heading")}</S.Title>
                <S.Paragraph>{t("info.desc")}</S.Paragraph>
                <S.Header>{t("info.contact.heading")}</S.Header>
                <S.Ol>
                    <S.Li>{t("info.contact.desc.li_1")}</S.Li>
                    <S.Li>{t("info.contact.desc.li_2")}</S.Li>
                </S.Ol>
                <S.Footer>{t("info.footer")}</S.Footer>
            </S.Content>
        </S.Container>
    );
};
