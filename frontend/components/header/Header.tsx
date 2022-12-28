import { useForm } from "react-hook-form";
import { Avatar } from "../avatar/Avatar";
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
                <SearchInput id="search" register={register} />
                <Avatar
                    src="/images/defaultPic.png"
                    withBorder
                    alt="user picture"
                />
            </div>
        </S.Header>
    );
};
