import { useMemo, useRef } from "react";
import ViewportList from "react-viewport-list";
import { CreatedEventItem } from "./eventItem/CreatedEventItem";

import * as S from "../Common.style";
import { FilterType } from "../../../events/EventsView";
import { UserType } from "../../../../../types/posts.type";

export interface TempCreatedEventWithRequests {
    pending_requests_to: UserType[];
    pending_requests_from: UserType[];
}

export interface TempCreatedEvent extends TempCreatedEventWithRequests {
    id: string;
    title: string;
    date: string;
    city: string;
    street: string;
    participants: UserType[];
}

export interface TempParticipatingEvent {
    user: UserType;
    title: string;
    id: string;
    date: string;
    city: string;
    street: string;
    participants: UserType[];
}

// add extends PaginationType
export interface TempCreatedEventsResponse {
    results: TempCreatedEvent[];
}

const createdEventsMock: TempCreatedEventsResponse = {
    results: [
        {
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
            pending_requests_to: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
            pending_requests_from: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "3", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
        },
        {
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
            pending_requests_to: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
            pending_requests_from: [
                { id: "1", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "2", name: "Joe", surname: "Doe", avatarUrl: "" },
                { id: "3", name: "Joe", surname: "Doe", avatarUrl: "" },
            ],
        },
    ],
};

interface Props {
    // eventCardVariant: EventCardVariant;
    filterTypeVariant: FilterType;
}

export const CreatedEventsList = ({ filterTypeVariant }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <S.CreatedEventsList ref={ref}>
            <div ref={ref}>
                {createdEventsMock.results.length > 0 ? (
                    <ViewportList
                        items={createdEventsMock.results}
                        viewportRef={ref}
                        scrollThreshold={0.5}
                    >
                        {(event, index) => {
                            if (
                                index + 1 ===
                                    createdEventsMock.results.length &&
                                filterTypeVariant === "created"
                            ) {
                                return (
                                    <CreatedEventItem
                                        key={event?.id}
                                        {...event}
                                    />
                                );
                            }

                            return (
                                <CreatedEventItem key={event.id} {...event} />
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
