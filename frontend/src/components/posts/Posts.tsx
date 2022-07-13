import * as S from "./Posts.style";
import { postItemsMock } from "./postItemsMock";
import { CategoryEnum } from "../../types/CategoryEnum";
import { Post } from "./post/Post";

export const Posts = () => {
    return (
        <S.Posts>
            {postItemsMock.map((item) => (
                <Post
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    // TODO: Change this after converting enum
                    category={item.category as CategoryEnum}
                    img={item.img}
                    authorName={item.authorName}
                    avatar={item.avatar}
                    place={item.place}
                    date={item.date}
                    peopleCount={item.peopleCount}
                />
            ))}
        </S.Posts>
    );
};
