import "./Login.style.ts";
import * as S from "./Login.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Login = () => {
    return (
        <S.LoginContainer>
            <S.LeftSide></S.LeftSide>
            <S.RightSide>
                <S.loginForm
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <S.loginHeader>Zaloguj się</S.loginHeader>
                    <S.loginLabel htmlFor="email">Adres email</S.loginLabel>
                    <S.loginInput id="email" type="email" />

                    <S.loginLabel htmlFor="password">Password</S.loginLabel>
                    <S.loginInput id="password" type="password" />
                    <S.LoginMiddle>
                        <S.LoginMiddleContent>
                            <S.LoginMiddleLeft>
                                <S.LoginMiddleInput type="checkbox" />
                                <S.LoginMiddleSpan></S.LoginMiddleSpan>
                                Zapamiętaj mnie
                            </S.LoginMiddleLeft>
                        </S.LoginMiddleContent>

                        <S.LoginMiddleContent>
                            <S.LoginMiddleHref href="#">
                                Przypomnij hasło
                            </S.LoginMiddleHref>
                        </S.LoginMiddleContent>
                    </S.LoginMiddle>
                    <S.LoginButton type="submit">Zaloguj się</S.LoginButton>
                    <S.LoginGoogleButton type="submit">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>{" "}
                        Zaloguj z Google
                    </S.LoginGoogleButton>
                    <S.LoginFooter>
                        <S.LoginFooterSpan>Nie masz konta?</S.LoginFooterSpan>
                        <S.LoginFooterHref>Zarejestruj się.</S.LoginFooterHref>
                    </S.LoginFooter>
                </S.loginForm>
            </S.RightSide>
        </S.LoginContainer>
    );
};
