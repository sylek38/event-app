import "./Post.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryEnum } from "../../../types/CategoryEnum";

import * as S from "./Post.style";
import { CategoryTag } from "../../categoryTag/CategoryTag";
import Link from "next/link";

interface Props {
    title: string;
    // TODO: map from and to enum
    category: string;
    img: string;
    authorName: string;
    avatar: string;
    id: string;
    width?: number;
    place: string;
    date: string;
    peopleCount: string;
}

export const Post = ({
    title,
    category,
    img,
    authorName,
    avatar,
    id,
    width = 370,
    place,
    date,
    peopleCount,
}: Props) => {
    return (
        <Link href={`/events/${id}`} passHref>
            <S.Post width={width}>
                <S.BackgroundContainer>
                    <img src={img} alt="" />
                    {/* TODO: Make component for this */}
                    <S.Date>
                        <span>06</span>
                        <span>Cze</span>
                    </S.Date>
                </S.BackgroundContainer>
                <S.Content>
                    {/* TODO: Avatar component with various sizes */}
                    <S.UserInfo>
                        <img src={avatar} />
                        <span>{authorName}</span>
                    </S.UserInfo>
                    <CategoryTag name={category} />
                    <S.Title>{title}</S.Title>
                    <S.Details>
                        <S.DetailsItem>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{place}</span>
                        </S.DetailsItem>
                        <S.DetailsItem>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>{date}</span>
                        </S.DetailsItem>
                        <S.DetailsItem>
                            <FontAwesomeIcon icon={faUser} />
                            <span>{peopleCount}</span>
                        </S.DetailsItem>
                    </S.Details>
                </S.Content>
            </S.Post>
        </Link>
    );
};
