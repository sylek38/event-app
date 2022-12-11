import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import * as S from "./DateInput.style";

interface Props {
    id: string;
    hideLabel?: boolean;
    isError: boolean;
}

export const DateInput = ({ id, hideLabel, isError }: Props) => {
    const { t } = useTranslation("inputs");

    return (
        <S.Container>
            <S.Label>
                {!hideLabel && <span>{t(`date_label_${id}`)}</span>}
            </S.Label>
            <S.DateInput type="date" isError={isError} className="datepicker" />
            {isError && (
                <S.Error>
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    {t(`text_error_${id}`)}
                </S.Error>
            )}
        </S.Container>
    );
};
