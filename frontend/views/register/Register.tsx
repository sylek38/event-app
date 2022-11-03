import "./Register.style.ts";
import * as S from "./Register.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Register = () => {
    return (
        <S.LoginContainer>
            <S.RightSide>
                <S.loginForm
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <S.loginHeader>Zarejestruj się</S.loginHeader>
                    <S.loginLabel htmlFor="name">Imię</S.loginLabel>
                    <S.loginInput id="name" type="text" required />

                    <S.loginLabel htmlFor="surname">Nazwisko</S.loginLabel>
                    <S.loginInput id="surname" type="text" required />

                    <S.loginLabel htmlFor="email">Adres email</S.loginLabel>
                    <S.loginInput id="email" type="email" required />

                    <S.loginLabel htmlFor="password">Hasło</S.loginLabel>
                    <S.loginInput id="password" type="password" required />
                    <S.LoginMiddle>
                        <S.LoginMiddleContent>
                            <S.LoginMiddleLeft>
                                <S.LoginMiddleInput type="checkbox" required />
                                <S.LoginMiddleSpan></S.LoginMiddleSpan>
                                Przeczytałem i akceptuję{" "}
                                <S.LoginMiddleHref href="#">
                                    regulamin strony
                                </S.LoginMiddleHref>
                            </S.LoginMiddleLeft>
                        </S.LoginMiddleContent>
                    </S.LoginMiddle>
                    <S.LoginButton type="submit">Zarejestruj się</S.LoginButton>
                    <S.LoginGoogleButton type="submit">
                        <S.LoginGoogleIcon>
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>{" "}
                        </S.LoginGoogleIcon>
                        Zarejestruj z Google
                    </S.LoginGoogleButton>
                    <S.LoginFooter>
                        <S.LoginFooterSpan>Masz już konto?</S.LoginFooterSpan>
                        <S.LoginFooterHref>Zaloguj się!</S.LoginFooterHref>
                    </S.LoginFooter>
                </S.loginForm>
            </S.RightSide>
            <S.LeftSide></S.LeftSide>
        </S.LoginContainer>
    );
};
