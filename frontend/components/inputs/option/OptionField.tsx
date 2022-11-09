import Select from "react-select";
import useTranslation from "next-translate/useTranslation";

export const SelectField = () => {
    const options = [
        { value: "gdansk", label: "Gdańsk" },
        { value: "gdynia", label: "Gdynia" },
        { value: "sopot", label: "Sopot" },
        { value: "sopot2", label: "Sopot2" },
        { value: "sopot2", label: "Sopot2" },
    ];
    const handleChange = (selectedOption: any) => {
        console.log("handleChange", selectedOption);
    };

    const Styles = {
        dropdownIndicator: (provided: any, state: { isFocused: any }) => ({
            ...provided,
            color: state.isFocused
                ? "var(--primary-text)"
                : "var(--secondary-text)",
            transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
            "&:hover": {
                color: state.isFocused
                    ? "var(--primary-text)"
                    : "var(--secondary-text)",
            },
        }),
        control: (
            styles: any,
            { data, isDisabled, isFocused, isSelected }: any
        ) => ({
            ...styles,
            borderColor: "transparent",
            borderRadius: "50px",
            width: "280px",
            padding: "0 10px 0 10px",
            height: "50px",
            backgroundColor: "var(--secondary-background)",
            boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
            // backgroundColor: isFocused ? "#ffffff" : "red",
            zIndex: "2",
        }),
        option: (
            provided: any,
            state: { isSelected: any; isFocused: any }
        ) => ({
            ...provided,
            border: "none",
            color: "var(--primary-text)",
            padding: 10,
            margin: 0,
            backgroundColor: state.isFocused
                ? "var(--secondary-text)"
                : "var(--secondary-background)",
        }),

        input: (base: any, state: any) => ({
            ...base,
            color: "var(--primary-color)",
        }),

        menu: (base: any) => ({
            ...base,
            backgroundColor: "var(--secondary-background)",
            // override border radius to match the box
            borderRadius: 0,
            width: "280px",
            // kill the gap
            margin: "-20px 0 0 0",
            padding: "20px 0 20px 0",
            zIndex: "1",
        }),
        menuList: (base: any) => ({
            ...base,
            backgroundColor: "var(--secondary-background)",
            // kill the white space on first and last option
            padding: "5px 0 0 0",
            margin: "0",
            height: "150px",

            "::-webkit-scrollbar": {
                width: "2px",
                height: "0px",
            },
            "::-webkit-scrollbar-track": {
                background: "#f1f1f1",
            },
            "::-webkit-scrollbar-thumb": {
                background: "#888",
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "#555",
            },
        }),
    };
    return (
        <Select
            options={options}
            onChange={handleChange}
            styles={Styles}
            components={{
                IndicatorSeparator: () => null,
            }}
            placeholder={<div>Wybierz miasto</div>}
            isSearchable={false}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    text: "var(--primary-color)",
                    font: "var(--primary-color)",
                    primary25: "#aaa",
                    primary: "white",
                    neutral80: "var(--primary-color)",
                    color: "var(--primary-color)",
                },
            })}
        />
    );
};
