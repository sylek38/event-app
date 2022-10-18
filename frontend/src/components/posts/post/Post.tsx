import "./Post.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendarDays,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryEnum } from "../../../types/CategoryEnum";

import * as S from "./Post.style";
import { CategoryTag } from "../../categoryTag/CategoryTag";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
	title: string;
	// TODO: map from and to enum
	category: CategoryEnum;
	img: string;
	authorName: string;
	avatar: string;
	details: ReactNode;
	id: string;
	width?: number;
}

export const Post = ({
	title,
	category,
	img,
	authorName,
	avatar,
	details,
	id,
	width = 370,
}: Props) => {
	return (
		<Link href={`/${id}`} passHref>
			<S.Post width={width}>
				<S.BackgroundContainer>
					<img src={img} alt="" />
					{/* TODO: Make component for this */}
					<S.Date>
						<span>06</span>
						<span>Cze</span>
					</S.Date>
				</S.BackgroundContainer>
				<S.Content>
					{/* TODO: Avatar component with various sizes */}
					<S.UserInfo>
						<img src={avatar} />
						<span>{authorName}</span>
					</S.UserInfo>
					<CategoryTag name={category} />
					<S.Title>{title}</S.Title>
					{details}
				</S.Content>
			</S.Post>
		</Link>
	);
};
