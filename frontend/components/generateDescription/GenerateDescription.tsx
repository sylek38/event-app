import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

import * as S from "./GenerateDescription.style";

// if you want to use custom error text (meaning other than length error),
// you need to provide withCustomText (boolean) AND customPrefix (string)

// example:
// you want your input to display length error and custom error.

// SomeView.tsx

{
    /* <TextInput
    id="new_password"
    isError={!!errors.new_password}
    pattern={passwordRegex}
    customPrefix="settings"
    withCustomPrefix
    required
/> */
}

// inputs.json

// text_settings_new_password_error: 'Password must consist of ...'

// text -> keyPrefix
// settings -> customPrefix
// id -> new_password
// error -> just hardcoded string to differentiate it is error

interface Props {
    id: string;
    keyPrefix?: string;
    customErrorPrefix?: string;
    textError?: boolean;
    error?: boolean;
    length?: number;
    maxLength?: number;
}

export const GenerateDescription = ({
    error,
    id,
    customErrorPrefix,
    length,
    maxLength,
    keyPrefix,
    textError,
}: Props) => {
    const { t } = useTranslation("inputs");

    const generateDescription = () => {
        if (!error && !maxLength && !textError) {
            return null;
        }

        if (
            typeof length !== "undefined" &&
            typeof maxLength !== "undefined" &&
            error &&
            length > maxLength
        ) {
            return t("error_length");
        }

        if (error && textError) {
            return t(
                `${keyPrefix}.${
                    customErrorPrefix ? `${customErrorPrefix}_` : ""
                }${id}_error`
            );
        }

        return "";
    };

    return (
        <S.Error>
            {error && textError && (
                <FontAwesomeIcon icon={faTriangleExclamation} />
            )}
            {generateDescription()}
        </S.Error>
    );
};

// {t(`text_error_${id}`)}
