import { useForm } from "react-hook-form";
import { DefaultAvatar } from "../../assets/DefaultAvatar";
import { BACKEND_URL } from "../../config";
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
                {/* Temporary */}
                <SearchInput id="search" register={register} />

                <Avatar size={50} />
            </div>
        </S.Header>
    );
};
