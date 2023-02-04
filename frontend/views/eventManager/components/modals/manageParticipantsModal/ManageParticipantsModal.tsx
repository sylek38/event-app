import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { Button } from "../../../../../components/button/Button";
import { SearchInput } from "../../../../../components/inputs/searchbar/Searchbar";
import { Searchbar } from "../../../../../components/inputs/searchbar/Searchbar.style";
import { TextInput } from "../../../../../components/inputs/text/TextInput";
import { Modal } from "../../../../../components/modal/Modal";
import { UserTile } from "../../userTile/UserTile";

import * as S from "./ManageParticipantsModal.style";

interface FormTypes {
    user: string;
}

interface Props {
    open: boolean;
    setOpen: (el: boolean) => void;
}

export const ManageParticipantsModal = ({ open, setOpen }: Props) => {
    const { t } = useTranslation("eventManager");

    const {
        register,
        control,
        formState: { errors },
    } = useForm<FormTypes>();

    const mockUsers = [
        {
            id: "1",
            name: "John",
            surname: "Doe",
            userId: "1",
            avatarUrl: "",
        },
        {
            id: "2",
            name: "John",
            surname: "Doe",
            userId: "2",
            avatarUrl: "",
        },
        {
            id: "3",
            name: "John",
            surname: "Doe",
            userId: "3",
            avatarUrl: "",
        },
    ];

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title={t("events.participants")}
            size="sm"
        >
            <>
                <S.Section>
                    <S.Title>{t("events.invite_to_event")}</S.Title>
                    <S.Content>
                        <form>
                            <TextInput
                                id="user"
                                control={control}
                                register={register}
                                dark
                            />
                            <Button variant="gradient" type="submit">
                                {t("events.invite")}
                            </Button>
                        </form>
                    </S.Content>
                    <Searchbar />
                </S.Section>
                <S.Section>
                    <S.Title>{t("events.join_requests")}</S.Title>
                    <S.Content>
                        {mockUsers ? (
                            <S.List>
                                {mockUsers.map((user) => (
                                    <UserTile
                                        key={user.id}
                                        actions={{
                                            accept: () => console.log("accept"),
                                            delete: () => console.log("delete"),
                                        }}
                                        border
                                        {...user}
                                    />
                                ))}
                            </S.List>
                        ) : (
                            t("events.no_participants")
                        )}
                    </S.Content>
                </S.Section>
            </>
        </Modal>
    );
};
