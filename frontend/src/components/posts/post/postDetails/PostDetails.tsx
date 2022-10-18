import {
    faCalendarDays,
    faLocationDot,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./PostDetails.style";

interface Props {
    // TODO: Change these types later
    place: string;
    date: string;
    peopleCount: string;
}

export const PostDetails = ({ place, date, peopleCount }: Props) => (
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
);
