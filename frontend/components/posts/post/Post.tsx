import useTranslation from "next-translate/useTranslation";
import "./Post.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./Post.style";
import { CategoryTag } from "../../categoryTag/CategoryTag";
import Link from "next/link";
import { Routes } from "../../../routes/Routes";
import { LocationType } from "../../../types/posts.type";
import { forwardRef } from "react";
import { format, parse, parseISO } from "date-fns";
import Image from "next/image";
import { DefaultPostBackground } from "../../../assets/DefaultPostBackground";
import { DefaultAvatar } from "../../../assets/DefaultAvatar";
import { useRouter } from "next/router";
import { enUS, pl } from "date-fns/locale";
import { Avatar } from "../../avatar/Avatar";

interface Props {
    id: string;
    user: {
        id: string;
        name: string;
        surname: string;
        avatarUrl: string;
    };
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    location: LocationType;
    imageUrl: string;
    width?: number;
    date: string;
}

export const Post = forwardRef<HTMLAnchorElement, Props>(
    (
        {
            id,
            user,
            title,
            desc,
            category,
            peopleLimit,
            location,
            imageUrl,
            width,
            date,
        },
        ref
    ) => {
        const { t } = useTranslation("global");
        const { locale } = useRouter();
        const parsedISODate = parseISO(date);
        const processedDate = format(parsedISODate, "MM/dd/yyyy", {
            locale: locale === "pl" ? pl : enUS,
        });

        console.log(ref, "child ref");
        return (
            <Link
                ref={ref}
                href={{
                    pathname: Routes.EVENT,
                    query: { id },
                }}
                passHref
            >
                <S.Post>
                    <S.BackgroundContainer>
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={`background photo of ${title}`}
                            />
                        ) : (
                            <DefaultPostBackground />
                        )}

                        <S.Date>
                            <span> {new Date(date).getDate()}</span>
                            <span>
                                {new Date(date).toLocaleString(t("lang"), {
                                    month: "short",
                                })}
                            </span>
                        </S.Date>
                    </S.BackgroundContainer>
                    <S.Content>
                        <S.Avatar>
                            <Avatar size={60} src={user?.avatarUrl} border />
                        </S.Avatar>
                        <span>
                            {user?.name} {user?.surname}
                        </span>
                        <CategoryTag name={category} />
                        <S.Title>{title}</S.Title>
                        <S.Details>
                            <S.DetailsItem>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>
                                    {location?.city}
                                    {location?.street && `, ${location.street}`}
                                </span>
                            </S.DetailsItem>
                            <S.DetailsItem>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span>{processedDate}</span>
                            </S.DetailsItem>
                            <S.DetailsItem>
                                <FontAwesomeIcon icon={faUser} />
                                <span>{peopleLimit}</span>
                            </S.DetailsItem>
                        </S.Details>
                    </S.Content>
                </S.Post>
            </Link>
        );
    }
);

Post.displayName = "Post";
