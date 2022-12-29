import "./Post.style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
    faUser,
    faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryType } from "../../../types/CategoryType";

import * as S from "./Post.style";
import { CategoryTag } from "../../categoryTag/CategoryTag";

interface Props {
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

export default function Post({
    title,
    description,
    category,
    img,
    name,
    avatar,
    place,
    date,
    peopleCount,
}: Props) {
    return (
        <S.Post>
            <S.BackgroundContainer>
                <img src={img} alt="" />
                <S.Date>
                    <span>06</span>
                    <span>Cze</span>
                </S.Date>

                {/* TODO: Avatar component with various sizes */}
                <S.UserInfo>
                    <img src={avatar} />
                    <span>{name}</span>
                </S.UserInfo>
            </S.BackgroundContainer>
            <S.Content>
                <CategoryTag name="impreza" />
                <S.Title>
                    Veniam voluptatem rerum similique facilis voluptatem vel
                    fuga consectetur.
                </S.Title>
                <S.Details>
                    <S.DetailsItem>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{place}</span>
                    </S.DetailsItem>
                    <S.DetailsItem>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>{date}</span>
                    </S.DetailsItem>
                    <S.DetailsItem>
                        <FontAwesomeIcon icon={faUser} />
                        <span>{peopleCount}</span>
                    </S.DetailsItem>
                </S.Details>

                {/* TODO: Button component */}
                <S.ButtonContainer>
                    <button>Więcej</button>
                </S.ButtonContainer>
            </S.Content>
        </S.Post>

        // <div className="post">
        //     <div className="postTop">
        //         <div className="postTopDate">
        //             <span className="postDay">16</span>
        //             <span className="postMonth">Maj</span>
        //         </div>
        //         <div className="postUser">
        //             <div className="postUserIcon"></div>
        //             <div className="postUserName">Ophelia Doyle</div>
        //         </div>
        //     </div>
        //     <div className="postBot">
        //         <div className="postCategory">
        //             <span>
        //                 Impreza <FontAwesomeIcon icon={faGlassCheers} />
        //             </span>
        //         </div>
        //         <div className="postTitle">
        //             Veniam voluptatem rerum similique facilis voluptatem vel
        //             fuga consectetur vel fuga x...
        //         </div>
        //         <div className="postDetails">
        //             <div className="postDetailWrap">
        //                 <FontAwesomeIcon icon={faLocationDot} />{" "}
        //                 <span className="PostDetailsContent">
        //                     Gdańsk, Jakaś Tam Miejscówa
        //                 </span>
        //             </div>
        //             <div className="postDetailWrap">
        //                 <FontAwesomeIcon icon={faCalendarDays} />{" "}
        //                 <span className="PostDetailsContent">
        //                     {" "}
        //                     16.05.2022r.
        //                 </span>
        //             </div>
        //             <div className="postDetailWrap">
        //                 <FontAwesomeIcon icon={faUser} />{" "}
        //                 <span className="PostDetailsContent"> 2/4</span>
        //             </div>
        //         </div>
        //         <button className="postBtn gradient-border-bg">Więcej</button>
        //     </div>
        // </div>
    );
}
