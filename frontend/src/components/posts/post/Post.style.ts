import { pxToRem } from "./../../../utils/pxToRem";
import styled from "styled-components";

export const BTN_BG_HELPER = "#232323";

export const Post = styled.div`
    background-color: var(--container-background);
    border-radius: ${pxToRem(24)};
    box-shadow: 0 0 1.5rem var(--color-black);
    box-shadow: 0 0 1.5em #121212;
    width: ${pxToRem(370)};
    transition: 0.15s;
`;

export const BackgroundContainer = styled.div`
    position: relative;
    border-bottom: ${pxToRem(3)} solid var(--color-white);
    height: ${pxToRem(200)};

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${pxToRem(24)} ${pxToRem(24)} 0 0;
    }
`;

export const Date = styled.div`
    position: absolute;
    top: ${pxToRem(20)};
    right: ${pxToRem(20)};
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    background-color: var(--color-white);
`;

export const UserInfo = styled.div`
    position: absolute;
    top: -33px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: ${pxToRem(60)};
        height: ${pxToRem(60)};
        object-fit: cover;
        margin-bottom: 0.25rem;
        border-radius: 50%;
        border: 3px solid var(--color-white);
    }

    > span {
        color: var(--color-white);
    }
`;

export const Content = styled.div`
    position: relative;
    padding: calc(56px + 10px) ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(20)};
`;

export const Title = styled.span`
    display: block;
    height: 3rem;
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(20)};
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-white);

    line-height: 1.5rem;
    max-height: 3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const DescriptionSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Details = styled.div`
    align-self: flex-end;
    > * + * {
        margin-top: ${pxToRem(10)};
    }
`;

export const DetailsItem = styled.div`
    color: var(--secondary-text);

    > svg {
        margin-right: ${pxToRem(10)};
    }

    > span {
        font-size: ${pxToRem(12)};
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: ${pxToRem(-20)};
    left: 50%;
    transform: translateX(-50%);
`;

// .post {
//     width: 400px;
//     min-height: 463px;
//     margin: 20px;
//     background-color: #232323;
//     border-radius: 23px;
//     box-shadow: 0 0 1.5em #121212;
//     transition: 0.15s;
//     color: #fff;
//     z-index: 1;
// }

// .post:hover{
//     background-color: rgb(40,40,40);
// }

// .postTop{
//   position: relative;
// }

// .postTop{
//     height: 184px;
//     border-radius: 23px 23px 0 0 ;
//     border-bottom: 2.2px solid #fff;
//     background-image: url("https://ipc.dk/wp-content/uploads/2019/09/adam-whitlock-I9j8Rk-JYFM-unsplash-e1583223512705.jpg");
//     background-size: cover;
//     margin-bottom: 40px;
// }

// .postTopDate{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top:15px;
//     right: 15px;
//     width: 50px;
//     height: 50px;
//     background-color: #fff;
//     color: #232323;
//     font-size: 14px;
//     border-radius: 12px;
// }

// .postTopDate .postDay{
//     font-weight: bold;
// }

// .postUser{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     top: calc(184px - 59px/2 - 1.1px - 2px);
//     font-size: 12px;
// }

// .postUserIcon{
//     width: 59px;
//     height: 59px;
//     background-image: url("https://news.castingcoin.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-09-at-12.12.31-PM.png");
//     background-size: cover;
//     border-radius: 50%;
//     border: 2px solid #fff;
//     margin-bottom: 3px;
// }

// .postBot {
//     position: relative;
//     word-wrap: break-word;
//     padding: 20px;
//     text-align: left;
// }

// .postCategory{
//     display: inline-block;
//     padding: 7px 15px;
//     border-radius: 20px;
//     background-color: #fff;
//     color: #232323;
//     font-size: 12px;
//     font-weight: bold;
//     margin-bottom: 10px;
// }

// .postTitle{
//     font-size: 16px;
//     font-weight: bold;
//     letter-spacing: 0.5px;
//     line-height: 1.2em;
//     height: 2.4em;
//     overflow: hidden;
// }

// .postDetails{
//     display: block;
//     color: #999;
//     margin: 25px 0 10px 0 ;
// }

// .postDetailWrap {
//     font-size: 18px;
//     margin-bottom: 10px;
// }

// .postDetailWrap:first-child{
//     padding-left: 1px;
// }

// .PostDetailsContent{
//     font-size: 12px;
//     padding-left: 10px;
// }

// .postDetailWrap:last-child {
//     font-weight: bold;
// }

// .postBtn{
//     position: absolute;
//     left: calc(200px - 100px/2);
//     height: 36px;
//     width: 100px;
//     font-weight: bold;

//     color: #fff;
//     border: none;
//     background: transparent;
//     cursor: pointer;

// }

// .gradient-border-bg {
//     background: linear-gradient(#232323, #232323) padding-box,
//       linear-gradient(45deg, #16ADA8, #24ECA4) border-box;
//     border: 3px solid transparent;
//     border-radius: 25px;
//   }

//   .postBtn:hover{
//     background: linear-gradient(45deg, #16ADA8, #24ECA4) padding-box, linear-gradient(45deg, #16ADA8, #24ECA4) border-box;;
//   }
