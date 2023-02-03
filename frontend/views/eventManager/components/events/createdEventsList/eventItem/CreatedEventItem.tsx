import {
    faCalendarDays,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { Avatar } from "../../../../../../components/avatar/Avatar";
import { Button } from "../../../../../../components/button/Button";
import { Routes } from "../../../../../../routes/Routes";
import { UserType } from "../../../../../../types/posts.type";
import * as S from "../../Common.style";

interface Props {
    historyCard?: boolean;
    title: string;
    id: string;
    date: string;
    city: string;
    street: string;
    participants: UserType[];
}

export const CreatedEventItem = forwardRef<HTMLDivElement, Props>(
    ({ historyCard, id, title, date, city, street, participants }, ref) => {
        const { t } = useTranslation("eventManager");
        const { push } = useRouter();
        const processedParticipants = participants.slice(0, 3);

        return (
            <S.Card>
                <S.Header>
                    <span>
                        {title} sad as dsad as as dsa dsasssssssss s s s s s s s
                        s s s ssds a s s
                    </span>
                    dots
                </S.Header>
                <S.Users>
                    {participants && participants.length > 0 ? (
                        <S.UsersButtonContainer>
                            <div>
                                <S.UsersList>
                                    <div>
                                        {processedParticipants.map(
                                            (participant) => (
                                                <li key={participant.id}>
                                                    <Avatar
                                                        size={40}
                                                        src={
                                                            participant.avatarUrl
                                                        }
                                                    />
                                                </li>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        {participants.length > 3 && (
                                            <Button
                                                size="sm"
                                                variant="gray"
                                            >{` + ${
                                                participants.length - 3
                                            } ${t("more")} `}</Button>
                                        )}
                                    </div>
                                </S.UsersList>
                            </div>
                        </S.UsersButtonContainer>
                    ) : (
                        t("events.no_participants")
                    )}
                </S.Users>
                <S.Footer>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />

                        {`${city}${street && `, ${street}`}`}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} />

                        {date}
                    </span>
                    <div>
                        {historyCard ? (
                            <Button
                                variant="gray"
                                onClick={() => push(`${Routes.EVENT}/${id}`)}
                            >
                                {t("events.see_event")}
                            </Button>
                        ) : (
                            <>
                                <Button variant="blue">
                                    {t("events.manage_participants")}
                                </Button>
                                <Button
                                    variant="gradient"
                                    onClick={() =>
                                        push(`${Routes.EVENT}/${id}`)
                                    }
                                >
                                    {t("events.see_event")}
                                </Button>
                            </>
                        )}
                    </div>
                </S.Footer>
            </S.Card>
        );
    }
);

CreatedEventItem.displayName = "CreatedEventItem";
