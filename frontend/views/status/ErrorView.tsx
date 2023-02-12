interface Props {
    errorCode: "404" | "500" | "403" | "401";
}

export const ErrorView = ({ errorCode }: Props) => {
    return <div>{errorCode}</div>;
};
