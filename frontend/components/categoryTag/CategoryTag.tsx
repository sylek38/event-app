import * as S from "./CategoryTag.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

interface Props {
    name: string;
}

export const CategoryTag = ({ name }: Props) => {
    // TODO: Convert enum to display appropiate icons
    return (
        <S.CategoryTag>
            {name} <FontAwesomeIcon icon={faGlassCheers} />
        </S.CategoryTag>
    );
};
