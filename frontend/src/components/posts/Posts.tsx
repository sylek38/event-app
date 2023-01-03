import * as S from "./Posts.style";
import { postItemsMock } from "./postItemsMock";
import Post from "./post/Post";

export const Posts = () => {
    return (
        <S.Posts>
            {postItemsMock.map((item) => (
                <Post
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    img={item.img}
                    name={item.name}
                    avatar={item.avatar}
                    place={item.place}
                    date={item.date}
                    peopleCount={item.peopleCount}
                />
            ))}
        </S.Posts>
    );
};
