import { LocationType } from "../../types/posts.type";

interface PostItem {
    id: string;
    user: {
        id: string;
        name: string;
        surname: string;
    };
    title: string;
    desc: string;
    category: string;
    photo: string;
    authorName: string;
    avatar: string;
    date: string;
    peopleLimit: string;
    location: LocationType;
}

// id: string;
// user: {
//     id: string;
//     name: string;
//     surname: string;
// };
// title: string;
// desc: string;
// category: string;
// peopleLimit: number;
// photo: string;
// location: LocationType;
// // map: string;
// // avatar: string;
// width?: number;
// date: number

export const postItemsMock: PostItem[] = [
    {
        id: "1",
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel ds asd asd sa dsa  sa das dsa sa das sa as",
        desc: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga xVeniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x",
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
        desc: "Veniam voluptatem rerum similique facilis ",
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
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga sad sad as das ",
        desc: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x sda",
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
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x",
        desc: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x",
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
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga ",
        desc: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur vel fuga x...",
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
