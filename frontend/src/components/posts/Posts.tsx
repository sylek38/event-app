import * as S from "./Posts.style";
import { postItemsMock } from "./postItemsMock";
import { CategoryEnum } from "../../types/CategoryEnum";
import { Post } from "./post/Post";
import { PostDetails } from "./post/postDetails/PostDetails";

export const Posts = () => (
    <S.Posts>
        {postItemsMock.map((item) => (
            <Post
                id={item.id}
                key={item.id}
                title={item.title}
                // TODO: Change this after converting enum
                category={item.category as CategoryEnum}
                img={item.img}
                authorName={item.authorName}
                avatar={item.avatar}
                details={
                    <PostDetails
                        date={item.date}
                        place={item.place}
                        peopleCount={item.peopleCount}
                    />
                }
            />
        ))}
    </S.Posts>
);
