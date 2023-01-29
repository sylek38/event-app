import * as S from "./CategoryTag.style";

interface Props {
    name: string;
}

export const CategoryTag = ({ name }: Props) => {
    return <S.CategoryTag>{name}</S.CategoryTag>;
};
