import {
    faCheck,
    faClose,
    faCross,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { EyeIcon } from "../../../assets/EyeIcon";
import { Avatar } from "../../../components/avatar/Avatar";
import { CircleButton } from "../../../components/button/circleButton/CircleButton";
import { Tooltip } from "../../../components/tooltip/Tooltip";
import { Routes } from "../../../routes/Routes";
import { RequestType } from "../../../types/requests.type";
import { RequestsResponse } from "../../../types/responses/requestsResponse.type";
import * as S from "./InvitesView.style";
// pending requests

// remember about "resulsts" first

// TODO: Change type later when backend will be set!
const mockItems: RequestType[] = [
    {
        id: "1",
        user: {
            id: "11",
            name: "John",
            surname: "Doe",
            avatarUrl: "",
        },
        postId: "111",
    },
    {
        id: "2",
        user: {
            id: "22",
            name: "Joanna",
            surname: "Styp Rekowska",
            avatarUrl: "",
        },
        postId: "222",
    },
    {
        id: "3",
        user: {
            id: "33",
            name: "Grzegorz",
            surname: "Brzęczyszczykiewicz",
            avatarUrl: "",
        },
        postId: "222",
    },
    {
        id: "4",
        user: {
            id: "44",
            name: "John",
            surname: "Doe",
            avatarUrl: "",
        },
        postId: "444",
    },
];

export const InvitesView = () => {
    const { t } = useTranslation("global");
    const { push } = useRouter();
    return (
        <S.Container>
            {mockItems && mockItems.length > 0 ? (
                <S.RequestsList>
                    {mockItems.map((request) => (
                        <S.Item>
                            <S.User>
                                <Avatar
                                    size={40}
                                    src={request.user?.avatarUrl}
                                />
                                <span>
                                    {`${request.user?.name}
                                    ${request.user?.surname}`}
                                </span>
                            </S.User>
                            <S.ButtonsSection>
                                <div>
                                    <Tooltip
                                        placement="bottom"
                                        text={t("see_event")}
                                        shiftValue="none"
                                    >
                                        <div>
                                            <CircleButton
                                                onClick={() =>
                                                    push({
                                                        pathname: Routes.EVENT,
                                                        query: {
                                                            id: request.postId,
                                                        },
                                                    })
                                                }
                                                icon={<EyeIcon />}
                                                variant="black"
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip
                                        placement="bottom"
                                        text={t("delete")}
                                        shiftValue="none"
                                    >
                                        <div>
                                            <CircleButton
                                                onClick={() =>
                                                    console.log("delete")
                                                }
                                                icon={
                                                    <FontAwesomeIcon
                                                        icon={faClose}
                                                    />
                                                }
                                                variant="black"
                                            />
                                        </div>
                                    </Tooltip>

                                    <Tooltip
                                        placement="bottom"
                                        text={t("accept")}
                                        shiftValue="none"
                                    >
                                        <div>
                                            <CircleButton
                                                onClick={() =>
                                                    console.log("accept")
                                                }
                                                icon={
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                        color="var(--color-white)"
                                                    />
                                                }
                                                variant="gradient"
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                            </S.ButtonsSection>
                        </S.Item>
                    ))}
                </S.RequestsList>
            ) : (
                "Nie posiadasz jeszcze żadnych zaproszeń"
            )}
        </S.Container>
    );
};
