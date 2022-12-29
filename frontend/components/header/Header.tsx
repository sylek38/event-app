import { useForm } from "react-hook-form";
import { BACKEND_URL } from "../../config";
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

    const fetchList = async () => {
        try {
            const data = await fetch(`${BACKEND_URL}/backend/auth/list`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (data) {
                console.log(data);
            }

            return data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    return (
        <S.Header>
            <div>
                {/* Temporary */}
                <SearchInput id="search" register={register} />
                <div>avatar</div>
                <button onClick={fetchList}>Click</button>
            </div>
        </S.Header>
    );
};
