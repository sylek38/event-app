import { useForm } from "react-hook-form";
import { SearchInput } from "../inputs/searchbar/Searchbar";
import { TextInput } from "../inputs/text/TextInput";
import * as S from "./Header.style";

interface FormTypes {
    search: string;
}

export const Header = () => {
    const {
        register,
        formState: { errors },
    } = useForm<FormTypes>();

    return (
        <S.Header>
            <div>
                {/* Temporary */}
                <SearchInput id="search" register={register} />
                <div>avatar</div>
            </div>
        </S.Header>
    );
};
