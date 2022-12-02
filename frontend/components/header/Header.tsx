import * as S from "./Header.style";
import { Search } from "../../components/inputs/searchbar/Searchbar";
import { Slider } from "../../components/inputs/slider/Slider";

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
            <Slider type="range" min={1} max={12} />
            {/* fullWidth */}
        </S.Header>
    );
};
