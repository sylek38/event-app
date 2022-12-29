import "./TermsView.style.ts";
import * as S from "./TermsView.style";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Routes } from "../../routes/Routes";

export const TermsView = () => {
    const { t } = useTranslation("info");

    return (
        <S.Container>
            <S.Sidebar>
                <S.Logo
                    src="https://i.imgur.com/uDKK9Kh.png"
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
                <S.Title>{t("terms.heading")}</S.Title>
                <S.Header>{t("terms.header.definitions")}</S.Header>
                <S.Ol>
                    <S.Li>{t("terms.desc.definitions.li_1")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_2")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_3")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_4")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_5")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_6")}</S.Li>
                    <S.Li>{t("terms.desc.definitions.li_7")}</S.Li>
                </S.Ol>
                <S.Header>{t("terms.header.provisions")}</S.Header>
                <S.Ol>
                    <S.Li>{t("terms.desc.provisions.li_1")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_2")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_3")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_4")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_5")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_6")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_7")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_8")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_9")}</S.Li>
                    <S.Li>{t("terms.desc.provisions.li_10")}</S.Li>
                </S.Ol>
                <S.Header>{t("terms.header.account")}</S.Header>
                <S.Ol>
                    <S.Li>{t("terms.desc.account.li_1")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_2")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_3")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_4")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_5")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_6")}</S.Li>
                    <S.Li>{t("terms.desc.account.li_7")}</S.Li>
                </S.Ol>
                <S.Header>{t("terms.header.publishing")}</S.Header>
                <S.Ol>
                    <S.Li>{t("terms.desc.publishing.li_1")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_2")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_3")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_4")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_5")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_6")}</S.Li>
                    <S.Li>{t("terms.desc.publishing.li_7")}</S.Li>
                </S.Ol>
                <S.Header>{t("terms.header.final")}</S.Header>
                <S.Ol>
                    <S.Li>{t("terms.desc.final.li_1")}</S.Li>
                    <S.Li>{t("terms.desc.final.li_2")}</S.Li>
                    <S.Li>{t("terms.desc.final.li_3")}</S.Li>
                    <S.Li>{t("terms.desc.final.li_4")}</S.Li>
                    <S.Li>{t("terms.desc.final.li_5")}</S.Li>
                </S.Ol>
            </S.Content>
        </S.Container>
    );
};
