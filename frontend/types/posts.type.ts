import { PaginationType } from "./pagination.type";

export interface UserPostType {
    id: string;
    name: string;
    surname: string;
}

export interface LocationType {
    city: string;
    street: string;
    // TODO: Uncomment later
    // map: {
    //     lat: string;
    //     long: string;
    // }
}

export interface PostsType {
    id: string;
    user: UserPostType;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    imageUrl: string;
    location: LocationType;
    date: string;
}

export interface WallFiltersType {
    city: string;
    category: string;
    date: string;
    time: string;
    peopleLimit: string;
}
