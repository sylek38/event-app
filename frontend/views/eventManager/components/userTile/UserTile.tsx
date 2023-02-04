import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { Avatar } from "../../../../components/avatar/Avatar";
import { CircleButton } from "../../../../components/button/circleButton/CircleButton";
import { Tooltip } from "../../../../components/tooltip/Tooltip";

import * as S from "./UserTile.style";

interface Props {
    border?: boolean;
    actions?: {
        accept?: () => void;
        delete?: () => void;
    };
    id: string;
    name: string;
    surname: string;
    userId: string;
    avatarUrl?: string;
}

export const UserTile = ({
    border,
    actions,
    id,
    name,
    surname,
    userId,
    avatarUrl,
}: Props) => {
    const { t } = useTranslation("global");
    return (
        <S.Tile border={border}>
            <S.User>
                <Avatar size={40} src={avatarUrl} />
                <span>{`${name} ${surname}`}</span>
            </S.User>
            {actions && (
                <S.ButtonsSection>
                    <div>
                        {actions.delete && (
                            <Tooltip
                                placement="bottom"
                                text={t("delete")}
                                shiftValue="none"
                            >
                                <div>
                                    <CircleButton
                                        onClick={() => console.log("delete")}
                                        icon={
                                            <FontAwesomeIcon icon={faClose} />
                                        }
                                        variant="black"
                                    />
                                </div>
                            </Tooltip>
                        )}
                        {actions.accept && (
                            <Tooltip
                                placement="bottom"
                                text={t("accept")}
                                shiftValue="none"
                            >
                                <div>
                                    <CircleButton
                                        onClick={() => console.log("accept")}
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
                        )}
                    </div>
                </S.ButtonsSection>
            )}
        </S.Tile>
    );
};
