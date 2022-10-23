interface PostItem {
    id: string;
    title: string;
    description: string;
    category: string;
    img: string;
    authorName: string;
    avatar: string;
    place: string;
    date: string;
    peopleCount: string;
}

export const postItemsMock: PostItem[] = [
    {
        id: "1",
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        description:
            "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        category: "Party",
        authorName: "Christine Trivett",
        img: "https://cdn.cmc-gallery.pl/static/files/gallery/541/090d434854e917828ad11e48812db01d.jpg",
        avatar: "/images/avatars/pic-1.jpg",
        // TODO= Change it to proper data
        place: "Gdańsk, Jakaś Tam Miejscówa",
        date: "16.05.2022r",
        peopleCount: "2/4",
    },
    {
        id: "2",
        title: "Veniam voluptatem rerum similique facilis",
        description: "Veniam voluptatem rerum similique facilis ",
        category: "Vine Party",
        authorName: "Neal Balistreri",
        img: "/images/events/vine-party-event.jpg",
        avatar: "/images/avatars/pic-2.jpg",

        // TODO= Change it to proper data
        place: "Gdańsk, Jakaś Tam Miejscówa",
        date: "16.05.2022r",
        peopleCount: "2/4",
    },
    {
        id: "3",
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        description:
            "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        category: "Weekend getaway ",
        authorName: "Troy Males",
        img: "/images/events/mountains-event.jpg",
        avatar: "/images/avatars/pic-3.jpg",

        // TODO= Change it to proper data
        place: "Gdańsk, Jakaś Tam Miejscówa",
        date: "16.05.2022r",
        peopleCount: "2/4",
    },
    {
        id: "4",
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        description:
            "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        category: "Billard",
        authorName: "Samson Clarke",
        img: "/images/events/billard-event.jpg",
        avatar: "/images/avatars/pic-4.jpg",

        // TODO= Change it to proper data
        place: "Gdańsk, Jakaś Tam Miejscówa",
        date: "16.05.2022r",
        peopleCount: "2/4",
    },
    {
        id: "5",
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        description:
            "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
        category: "Card Games Night",
        authorName: "Alison Norman",
        img: "/images/events/card-games-event.jpg",
        avatar: "/images/avatars/pic-5.jpg",

        // TODO= Change it to proper data
        place: "Gdańsk, Jakaś Tam Miejscówa",
        date: "16.05.2022r",
        peopleCount: "2/4",
    },
];
