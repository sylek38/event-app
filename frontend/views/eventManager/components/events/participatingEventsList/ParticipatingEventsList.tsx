import { useRef } from "react";
import ViewportList from "react-viewport-list";

import * as S from "../Common.style";
import { FilterType } from "../../../events/EventsView";
import { TempParticipatingEvent } from "../createdEventsList/CreatedEventsList";
import { ParticipatingEventItem } from "./eventItem/ParticipatingEventItem";

export interface TempParticipatingEventsResponse {
    results: TempParticipatingEvent[];
}

const participatingEventsMock: TempParticipatingEventsResponse = {
    results: [
        {
            user: {
                id: "1",
                name: "John",
                surname: "Doe",
                avatarUrl: "",
            },
            id: "1",
            title: "Impreza",
            date: "16.07.2022r",
            city: "Gdańsk",
            street: "Klub B90",
            participants: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "3", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "4", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
        },
        {
            user: {
                id: "2",
                name: "John",
                surname: "Doe",
                avatarUrl: "",
            },
            id: "2",
            title: "Impreza d1 da s dadasdasdasdas sada sda das s a daa",
            date: "16.07.2022r",
            city: "Gdańsk",
            street: "Klub B90",
            participants: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "3", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "4", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
        },
    ],
};

interface Props {
    // eventCardVariant: EventCardVariant;
    filterTypeVariant: FilterType;
    historyCard?: boolean;
}

export const ParticipatingEventsList = ({
    filterTypeVariant,
    historyCard,
}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <S.CreatedEventsList ref={ref}>
            <div ref={ref}>
                {participatingEventsMock.results.length > 0 ? (
                    <ViewportList
                        items={participatingEventsMock.results}
                        viewportRef={ref}
                        scrollThreshold={0.5}
                    >
                        {(event, index) => {
                            if (
                                index + 1 ===
                                    participatingEventsMock.results.length &&
                                filterTypeVariant === "participating"
                            ) {
                                return (
                                    <ParticipatingEventItem
                                        key={event?.id}
                                        historyCard={historyCard}
                                        {...event}
                                    />
                                );
                            }

                            return (
                                <ParticipatingEventItem
                                    key={event.id}
                                    historyCard={historyCard}
                                    {...event}
                                />
                            );
                        }}
                    </ViewportList>
                ) : (
                    <div>Pusta tablica</div>
                )}
                {/* {isFetchingNextPage && <Loader />} */}
            </div>
        </S.CreatedEventsList>
    );
};
