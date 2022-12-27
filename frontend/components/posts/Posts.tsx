import * as S from "./Posts.style";
import { postItemsMock } from "./postItemsMock";
import { CategoryEnum } from "../../types/CategoryEnum";
import { Post } from "./post/Post";

export const Posts = (props: { posts: any }) => {
    const { posts } = props;

    return (
        <S.Posts>
            {posts.map(
                (props: {
                    _id: string;
                    name: string;
                    surname: string;
                    title: string;
                    desc: string;
                    category: string;
                    peopleLimit: number;
                    photo: string;
                    map: string;
                    date: Date;
                }) => (
                    <Post
                        id={props._id}
                        key={props._id}
                        name={props.name}
                        surname={props.surname}
                        title={props.title}
                        desc={props.desc}
                        // TODO: Change this after converting enum
                        category={props.category as CategoryEnum}
                        peopleLimit={props.peopleLimit}
                        photo={props.photo}
                        map={props.map}
                        // avatar={item.avatar}
                        date={props.date}
                    />
                )
            )}
        </S.Posts>
    );
};
