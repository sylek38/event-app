export interface UserPostType {
    id: string;
    name: string;
    surname: string;
    avatarUrl: string;
}

export interface LocationType {
    city: string;
    street: string;
    map: {
        latitude: string;
        longitude: string;
    };
}

export interface PostsType {
    id: string;
    user: UserPostType;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    imageUrl: string;
    // avatarUrl: string;
    location: LocationType;
    date: string;
}

export interface WallFiltersType {
    city: string;
    category: string;
    date: string;
}
