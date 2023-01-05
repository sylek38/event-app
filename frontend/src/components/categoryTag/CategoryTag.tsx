import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryType } from "../../types/CategoryType";
import * as S from "./CategoryTag.style";

interface Props {
    name: CategoryType;
}

export const CategoryTag = ({ name }: Props) => {
    return (
        <S.CategoryTag>
            <span>{name}</span>
            {/* TODO: map name to Icon */}
            <FontAwesomeIcon icon={faGlassCheers} />
        </S.CategoryTag>
    );
};
