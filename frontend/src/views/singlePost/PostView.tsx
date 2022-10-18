import { useRouter } from "next/router";
import { Post } from "../../components/posts/post/Post";
import { PostDetails } from "../../components/posts/post/postDetails/PostDetails";
import { SinglePostDetails } from "../../components/posts/post/singlePostDetails/SinglePostDetails";
import { postItemsMock } from "../../components/posts/postItemsMock";
import { CategoryEnum } from "../../types/CategoryEnum";

export const PostView = () => {
	// TODO: replace it with api
	const router = useRouter();

	const eventId = router.query.eventId;
	const postData = postItemsMock.filter(item => item.id === eventId);
	const {
		authorName,
		avatar,
		category,
		date,
		description,
		id,
		img,
		peopleCount,
		place,
		title,
	} = postData[0];
	return (
		<Post
			width={750}
			id={id}
			key={id}
			title={title}
			// TODO: Change this after converting enum
			category={category as CategoryEnum}
			img={img}
			authorName={authorName}
			avatar={avatar}
			details={
				<SinglePostDetails
					date={date}
					place={place}
					peopleCount={peopleCount}
					description={description}
					id={id}
				/>
			}
		/>
	);
};
