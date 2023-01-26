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
import { format } from "date-fns";

interface Props {
    id: string;
    user: {
        id: string;
        name: string;
        surname: string;
    };
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    location: LocationType;
    // map: string;
    // avatar: string;
    width?: number;
    date: number;
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
            photo,
            location,
            width,
            date,
        },
        ref
    ) => {
        const { t } = useTranslation("global");
        const dateFormat = new Date(date);
        // const processedDate = format(dateFormat, "dd-MM-yyyy");
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
                        <img src={photo} alt="" />
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
                        {/* TODO: Avatar component with various sizes */}
                        {/* W celach eksperymentalnych avatar ma na razie zdjęcie z wybranego tła */}
                        <S.Avatar>{<img src={photo} />}</S.Avatar>
                        <span>
                            {user?.name} {user?.surname}
                        </span>
                        <CategoryTag name={category} />
                        <S.Title>{title}</S.Title>
                        <S.Details>
                            <S.DetailsItem>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>
                                    {location?.city}, {location?.street}
                                </span>
                            </S.DetailsItem>
                            <S.DetailsItem>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                {/* <span>{processedDate}</span> */}
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
