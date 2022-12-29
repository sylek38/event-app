import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const BTN_BG_HELPER = "#232323";

export const Post = styled.div`
    background-color: var(--container-background);
    border-radius: ${pxToRem(24)};
    box-shadow: 0 0 1.5rem var(--color-black);
    box-shadow: 0 0 1.5em #121212;

    transition: 0.15s;

    /* &::before {
        content: "";

    } */
`;

export const BackgroundContainer = styled.div`
    position: relative;
    border-bottom: 3px solid var(--color-white);

    > img {
        width: ${pxToRem(400)};
        height: ${pxToRem(200)};
        object-fit: cover;
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
    bottom: -56px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* delete */
    outline: 1px solid purple;

    & > img {
        width: ${pxToRem(60)};
        margin-bottom: 0.25rem;
        border-radius: 50%;
        border: 3px solid var(--color-white);
    }
`;

export const Content = styled.div`
    position: relative;
    margin-top: calc(56px + 10px);
    padding: 0 ${pxToRem(20)};
`;

export const Title = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-white);
`;

export const Details = styled.div`
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
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);

    & > button {
        border: none;
        background: transparent;

        color: var(--color-white);
        font-size: ${pxToRem(14)};
        font-weight: bold;
        padding: ${pxToRem(12)} ${pxToRem(30)};

        background: linear-gradient(#232323, #232323) padding-box,
            linear-gradient(45deg, #16ada8, #24eca4) border-box;
        border: 3px solid transparent;
        border-radius: 25px;
        /* 
        border: 3px solid transparent;
        background: linear-gradient(${BTN_BG_HELPER}, ${BTN_BG_HELPER})
                padding-box,
            var(--primary-gradient) border-box;
        border-radius: 25px; */
    }
    &:hover {
        background: linear-gradient(45deg, #16ada8, #24eca4) padding-box,
            linear-gradient(45deg, #16ada8, #24eca4) border-box;
    }
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
