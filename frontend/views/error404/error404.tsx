import "./error404.style.ts";
import * as S from "./error404.style";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Button } from "../../components/button/Button";

export const Error404 = () => {
    const { t } = useTranslation("info");

    return (
        <S.Container>
            <S.Content>
                <S.Top>
                    {t("error404.four")}
                    <span style={{ fontSize: `66px` }}>
                        {t("error404.zero")}
                    </span>
                    {t("error404.four")} {t("error404.error")}
                </S.Top>
                <S.Bottom>{t("error404.page_not_found")}</S.Bottom>
                <Link href={Routes.EVENTS}>
                    <S.Button> {t("error404.home")}</S.Button>
                </Link>
            </S.Content>
        </S.Container>
    );
};
