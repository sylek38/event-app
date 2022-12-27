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

interface Props {
    id: string;
    name: string;
    surname: string;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    map: string;
    // avatar: string;
    width?: number;
    date: Date;
}

export const Post = ({
    id,
    name,
    surname,
    title,
    desc,
    category,
    peopleLimit,
    photo,
    map,
    // avatar,
    date,
    width = 370,
}: Props) => {
    const { t } = useTranslation("global");
    return (
        <Link
            href={{
                pathname: Routes.EVENT,
                query: { id },
            }}
            passHref
        >
            <S.Post width={width}>
                <S.BackgroundContainer>
                    <img src={photo} alt="" />
                    {/* TODO: Make component for this */}
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
                        {name} {surname}
                    </span>
                    <CategoryTag name={category} />
                    <S.Title>{title}</S.Title>
                    <S.Desc>{desc}</S.Desc>
                    <S.Details>
                        <S.DetailsItem>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{map}</span>
                        </S.DetailsItem>
                        <S.DetailsItem>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>{new Date(date).toLocaleDateString()}</span>
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
};
