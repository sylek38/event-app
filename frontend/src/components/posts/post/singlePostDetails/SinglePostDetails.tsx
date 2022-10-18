import * as S from "./SinglePostDetails.style";

interface Props {
	// TODO: Change these types later
	place: string;
	date: string;
	peopleCount: string;
	description: string;
	// to delete
	id?: string;
}

export const SinglePostDetails = ({
	place,
	date,
	peopleCount,
	description,
	id,
}: Props) => <div>Details {id}</div>;
