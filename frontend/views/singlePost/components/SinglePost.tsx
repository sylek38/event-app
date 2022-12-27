import "./SinglePost.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faLocationPin,
    faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./SinglePost.style";

import { CategoryTag } from "../../../components/categoryTag/CategoryTag";
import dynamic from "next/dynamic";
import { Button } from "../../../components/button/Button";
import useTranslation from "next-translate/useTranslation";

const Map = dynamic(() => import("../../../components/map/Map") as any, {
    ssr: false,
});

interface Props {
    _id: string;
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

export const SinglePost = ({
    _id,
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
        <>
            <S.Post width={width}>
                <S.Buttons>
                    <Button variant="glowing">{t("join")}</Button>
                    <Button variant="glowingBlue">{t("send_message")}</Button>
                </S.Buttons>
                <S.BackgroundContainer>
                    <img src={photo} alt="" />
                </S.BackgroundContainer>
                <S.Content>
                    {/* TODO: Avatar component with various sizes */}
                    <S.UserInfo>
                        <img src={photo} />
                        <span>
                            {name} {surname}
                        </span>
                    </S.UserInfo>
                    <CategoryTag name={category} />
                    <S.Title>{title}</S.Title>
                    <S.DetailsSection>
                        <S.Heading>{t("details")}</S.Heading>
                        <div>
                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </S.IconContainer>
                                <S.Info>
                                    {/* TODO for backend: make unix timestamp for date */}
                                    <span>
                                        {new Date(date).toLocaleDateString(
                                            t("lang"),
                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
                                    </span>
                                </S.Info>
                            </S.DetailsItem>

                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>{map}</span>
                                </S.Info>
                            </S.DetailsItem>
                        </div>
                        <div>
                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>{peopleLimit}</span>
                                </S.Info>
                            </S.DetailsItem>

                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>jeszcze nie wiem co tutaj</span>
                                    <span>ddd</span>
                                </S.Info>
                            </S.DetailsItem>
                        </div>
                    </S.DetailsSection>
                    <S.Section>
                        <S.Heading>{t("description")}</S.Heading>
                        <p>{desc}</p>
                    </S.Section>
                </S.Content>
            </S.Post>

            <S.Post width={width} $padding={48}>
                <S.MapWrapper>
                    <S.Heading>{t("map")}</S.Heading>
                    <p>{map}</p>

                    <S.MapContainer>
                        <Map />
                    </S.MapContainer>
                </S.MapWrapper>
            </S.Post>
        </>
    );
};
