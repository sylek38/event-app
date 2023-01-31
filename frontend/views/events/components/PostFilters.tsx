import { format } from "date-fns";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { FormEvent, SyntheticEvent, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAPICategories } from "../../../api/categories/useAPICategories";
import { Button } from "../../../components/button/Button";
import { Filters } from "../../../components/filters/Filters";
import { DateInput } from "../../../components/inputs/date/DateInput";
import { SelectInput } from "../../../components/inputs/option/SelectInput";
import { Slider } from "../../../components/inputs/slider/Slider";
import { TextInput } from "../../../components/inputs/text/TextInput";
import { useAuth } from "../../../context/UserContext";
import { useWallContext } from "../../../context/WallContext";
import * as S from "./PostFilters.style";

export interface FormTypes {
    city?: string;
    category?: string;
    date?: string;
}

export const PostFilters = () => {
    const { t } = useTranslation("global");
    const { query, pathname, replace, push } = useRouter();
    const { csrf } = useAuth();
    const { data: categories, isLoading, isError } = useAPICategories({ csrf });
    const { wallFiltersSSR } = useWallContext();
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        watch,
        setValue,
        reset,
    } = useForm<FormTypes>({
        defaultValues: {
            city: wallFiltersSSR?.city ?? "",
            category: wallFiltersSSR?.category ?? "",
            date: wallFiltersSSR?.date
                ? `${wallFiltersSSR.date}`
                : new Date().toISOString().substring(0, 10),
        },
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<FormTypes> = async ({
        city,
        category,
        date,
    }) => {
        let currentQuery = { ...query };
        if (city) {
            currentQuery = {
                city,
            };
        } else {
            delete currentQuery.city;
        }
        if (category) {
            currentQuery = {
                ...currentQuery,
                category: category,
            };
        } else {
            delete currentQuery.category;
        }
        if (date) {
            const time = new Date(date);

            currentQuery = {
                ...currentQuery,
                date: format(time, "yyyy-MM-dd"),
            };
        } else {
            delete currentQuery.date;
        }

        push(
            {
                pathname,
                query: { ...currentQuery },
            },
            undefined,
            { shallow: true }
        );
    };

    const resetValues = () => {
        reset({
            city: "",
            category: "",
            date: new Date().toISOString().substring(0, 10),
        });
    };

    return (
        <Filters resetFiltersFunction={resetValues}>
            <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="city"
                    register={register}
                    control={control}
                    isError={!!errors.city}
                    hideLabel
                    placeholder
                    withoutDesc
                />

                <SelectInput
                    id="category"
                    register={register}
                    control={control}
                    items={
                        categories?.results?.map((category: string) => ({
                            text: t(`categories.${category}`),
                            id: category,
                        })) ?? []
                    }
                    setValue={setValue}
                    titleItem={watch("category") ?? ""}
                    isError={!!errors.category}
                    hideLabel
                    withoutDesc
                />

                <DateInput
                    id="date"
                    isError={!!errors.date}
                    register={register}
                    control={control}
                    required
                    hideLabel
                    withoutDesc
                />
                <Button type="submit">Search</Button>
            </S.Form>
        </Filters>
    );
};
