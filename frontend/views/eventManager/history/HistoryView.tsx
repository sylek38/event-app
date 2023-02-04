import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { Filters } from "../../../components/filters/Filters";
import { CreatedEventsList } from "../components/events/createdEventsList/CreatedEventsList";
import { ParticipatingEventsList } from "../components/events/participatingEventsList/ParticipatingEventsList";
import { FilterButtons } from "../components/filterButtons/FilterButtons";
import { FilterType } from "../events/EventsView";

export const HistoryView = () => {
    const { t } = useTranslation("eventManager");
    const [filter, setFilter] = useState<FilterType>("created");

    return (
        <>
            <Filters />
            <FilterButtons filter={filter} setFilter={setFilter} />
            {filter === "created" ? (
                <CreatedEventsList filterTypeVariant={filter} historyCard />
            ) : (
                <ParticipatingEventsList
                    filterTypeVariant={filter}
                    historyCard
                />
            )}
        </>
    );
};
