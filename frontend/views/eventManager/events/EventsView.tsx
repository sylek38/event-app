import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { Button } from "../../../components/button/Button";
import { Filters } from "../../../components/filters/Filters";
import { CreatedEventsList } from "../components/events/createdEventsList/CreatedEventsList";
import { ParticipatingEventItem } from "../components/events/participatingEventsList/eventItem/ParticipatingEventItem";
import { ParticipatingEventsList } from "../components/events/participatingEventsList/ParticipatingEventsList";
import { FilterButtons } from "../components/filterButtons/FilterButtons";

// export type EventCardVariant = "organizator" | "user";
export type FilterType = "participating" | "created";

export const EventsView = () => {
    const { t } = useTranslation("eventManager");
    const [filter, setFilter] = useState<FilterType>("created");

    return (
        <>
            <Filters />
            <FilterButtons filter={filter} setFilter={setFilter} />
            {filter === "created" ? (
                <CreatedEventsList filterTypeVariant={filter} />
            ) : (
                <ParticipatingEventsList filterTypeVariant={filter} />
            )}
        </>
    );
};
