import useTranslation from "next-translate/useTranslation";
import { FilterType } from "../../events/EventsView";
import * as S from "./FilterButtons.style";

interface Props {
    filter: FilterType;
    setFilter: (el: FilterType) => void;
}

export const FilterButtons = ({ filter, setFilter }: Props) => {
    const { t } = useTranslation("eventManager");

    const handleFilter = (filterType: FilterType) => {
        setFilter(filterType);
    };

    return (
        <S.Container>
            <S.Button
                onClick={() => handleFilter("created")}
                active={filter === "created"}
            >
                {t("events.created")}
            </S.Button>

            <S.Button
                onClick={() => handleFilter("participating")}
                active={filter === "participating"}
            >
                {t("events.participating")}
            </S.Button>
        </S.Container>
    );
};
