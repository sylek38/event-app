import { PaginationType } from "../pagination.type";
import { PostsType } from "../posts.type";

export interface PostsResponse extends PaginationType {
    results: PostsType[];
}

// response z backendu
// const response = {
//     id: _id,
//     user: {
//         id: user.id,
//         name: user.name,
//         surname: user.surname,
//     },
//     title,
//     desc,
//     category,
//     peopleLimit: eventPeople,
//     photo,
//     location: {
//         city: location.city,
//         street: location.city
//     },
//     date: eventDate,
//     next: hasNextPage,
//     prev: hasPrevPage,
// };
