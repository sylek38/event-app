import { CategoryType } from "../../types/CategoryType";

export interface PostListType {
    id: number;
    title: string;
    description: string;
    category: CategoryType;
    img: string;
    name: string;
    avatar: string;

    // TODO: Change these types later
    place: string;
    date: string;
    peopleCount: string;
}

export const postItemsMock: PostListType[] = [
    {
        id: 1,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "morsowanie",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
    {
        id: 2,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "impreza",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
    {
        id: 3,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "impreza",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
    {
        id: 4,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "impreza",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
    {
        id: 5,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "impreza",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
    {
        id: 6,
        title: "Veniam voluptatem rerum similique facilis voluptatem vel fuga consectetur.",
        description:
            "Lorem ipsum dolor sit amet. Ut repellendus esse et explicabo qui repellendus ratione et eligendi doloremque aut vero nulla. Repellat commodi sit consequatur delectus non obcaecati voluptatem id commodi animi rem corporis excepturi aut consequuntur quidem ex corrupti deserunt.",
        category: "impreza",
        img: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
        name: "Ophelia Doyle",
        avatar: "https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg",
        place: "Gdańsk, Mr' Jerry Restauracja & Steak House",
        date: "16.05.2022r",
        peopleCount: "2 / 4",
    },
];
