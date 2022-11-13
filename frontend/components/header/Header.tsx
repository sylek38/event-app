import * as S from "./Header.style";
import { Search } from "../../components/inputs/searchbar/Searchbar";

export const Header = () => {
    return (
        <S.Header>
            <Search
                id="searchbar"
                type="text"
                placeholder
                minLength={3}
                maxLength={20}
                // fullWidth
                // blackVariant
            ></Search>
        </S.Header>
    );
};
