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
import { LocationType, UserType } from "../../../types/posts.type";
import Image from "next/image";
import { DefaultPostBackground } from "../../../assets/DefaultPostBackground";
import { DefaultAvatar } from "../../../assets/DefaultAvatar";
import { MarkerProps } from "../../../components/map/mapTypes";
import { Loader } from "../../../components/loader/Loader";
import { Avatar } from "../../../components/avatar/Avatar";

const Map = dynamic(() => import("../../../components/map/Map"), {
    ssr: false,
});

interface Props {
    id: string;
    user: UserType;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    imageUrl: string;
    location: LocationType;
    width?: number;
    date: string;
    isLoading?: boolean;
    isError?: boolean;
}

export const SinglePost = ({
    id,
    user,
    title,
    desc,
    category,
    peopleLimit,
    imageUrl,
    location,
    date,
    width = 370,
    isLoading,
    isError,
}: Props) => {
    const { t } = useTranslation("global");

    const marker: MarkerProps | null = {
        latitude: +location?.map.latitude,
        longitude: +location?.map.longitude,
    };

    if (isLoading)
        return (
            <S.LoaderContainer>
                <Loader />
            </S.LoaderContainer>
        );

    return (
        <>
            <S.Post width={width}>
                <S.BackgroundContainer>
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={`background photo of ${title}`}
                        />
                    ) : (
                        <DefaultPostBackground />
                    )}
                </S.BackgroundContainer>
                <S.Content>
                    <S.UserInfo>
                        <Avatar size={80} src={user?.avatarUrl} />
                        <span>
                            {user?.name} {user?.surname}
                        </span>
                    </S.UserInfo>
                    <S.Category>
                        <CategoryTag name={category} />
                    </S.Category>
                    <S.Title>{title}</S.Title>

                    <S.Buttons>
                        <Button>{t("join")}</Button>
                        <Button variant="blue">{t("send_message")}</Button>
                    </S.Buttons>
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
                                    <span>
                                        {new Date(date).toLocaleTimeString(
                                            t("lang")
                                        )}
                                    </span>
                                </S.Info>
                            </S.DetailsItem>

                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>{location?.city}</span>
                                    <span>{location?.street}</span>
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
                                    <span>cos tutaj</span>
                                </S.Info>
                            </S.DetailsItem>
                        </div>
                    </S.DetailsSection>

                    {desc && (
                        <S.Section>
                            <S.Heading>{t("description")}</S.Heading>
                            <S.Description>{desc}</S.Description>
                        </S.Section>
                    )}
                </S.Content>
            </S.Post>

            {location?.map.latitude && location?.map.longitude && (
                <S.Post width={width} $padding={48}>
                    <S.MapWrapper>
                        <S.Heading>{t("map")}</S.Heading>

                        <S.MapContainer>
                            <Map marker={marker ?? null} />
                        </S.MapContainer>
                    </S.MapWrapper>
                </S.Post>
            )}
        </>
    );
};
