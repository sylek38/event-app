import "./SinglePost.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./SinglePost.style";

import Link from "next/link";
import { CategoryTag } from "../../../components/categoryTag/CategoryTag";

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

export const SinglePost = ({
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
                        <S.DetailsItem>Things go here soon</S.DetailsItem>
                    </S.Details>
                    <S.Description>Here too</S.Description>
                </S.Content>
            </S.Post>
        </Link>
    );
};
