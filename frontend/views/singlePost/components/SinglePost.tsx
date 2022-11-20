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
    description: string;
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
    description,
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
                    <img src={img} alt="" />
                </S.BackgroundContainer>
                <S.Content>
                    {/* TODO: Avatar component with various sizes */}
                    <S.UserInfo>
                        <img src={avatar} />
                        <span>{authorName}</span>
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
                                    <span>Pt, 6 czerwca 2022r</span>
                                    <span>12:00</span>
                                </S.Info>
                            </S.DetailsItem>

                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>{place}</span>
                                    <span>Metropolia</span>
                                </S.Info>
                            </S.DetailsItem>
                        </div>
                        <div>
                            <S.DetailsItem>
                                <S.IconContainer>
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                </S.IconContainer>
                                <S.Info>
                                    <span>{peopleCount}</span>
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
                        <p>{description}</p>
                        <p>
                            Lectus nulla at volutpat diam ut. Vitae sapien
                            pellentesque habitant morbi tristique. Amet mattis
                            vulputate enim nulla aliquet porttitor lacus luctus.
                            Malesuada fames ac turpis egestas maecenas pharetra
                            convallis. Risus viverra adipiscing at in tellus
                            integer feugiat. Eu sem integer vitae justo eget
                            magna fermentum. Massa tincidunt nunc pulvinar
                            sapien et
                        </p>
                        <p>
                            ligula ullamcorper malesuada. Vulputate ut pharetra
                            sit amet aliquam id diam. Vestibulum mattis
                            ullamcorper velit sed ullamcorper. Ac ut consequat
                            semper viverra nam libero justo. Semper eget duis at
                            tellus. Convallis a cras semper auctor neque. Lectus
                            sit amet est placerat in egestas erat imperdiet sed.
                        </p>
                        <p>
                            ligula ullamcorper malesuada. Vulputate ut pharetra
                            sit amet aliquam id diam. Vestibulum mattis
                            ullamcorper velit sed ullamcorper. Ac ut consequat
                            semper viverra nam libero justo. Semper eget duis at
                            tellus. Convallis a cras semper auctor neque. Lectus
                            sit amet est placerat in egestas erat imperdiet sed.
                            Lectus sit amet est placerat in egestas erat
                            imperdiet sed.
                        </p>
                    </S.Section>
                </S.Content>
            </S.Post>

            <S.Post width={width} $padding={48}>
                <S.MapWrapper>
                    <S.Heading>{t("map")}</S.Heading>
                    <p>Gdańsk, ul. Elektryków</p>

                    <S.MapContainer>
                        <Map />
                    </S.MapContainer>
                </S.MapWrapper>
            </S.Post>
        </>
    );
};
