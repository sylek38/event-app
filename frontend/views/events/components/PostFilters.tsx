import { format } from "date-fns";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAPICategories } from "../../../api/categories/useAPICategories";
import { Filters } from "../../../components/filters/Filters";
import { DateInput } from "../../../components/inputs/date/DateInput";
import { SelectInput } from "../../../components/inputs/option/SelectInput";
import { Slider } from "../../../components/inputs/slider/Slider";
import { TextInput } from "../../../components/inputs/text/TextInput";
import { useAuth } from "../../../context/UserContext";
import { useWallContext } from "../../../context/WallContext";
import * as S from "./PostFilters.style";

interface FormTypes {
    city?: string;
    category?: string;
    date?: string;
    peopleLimit?: number;
}

export const PostFilters = () => {
    const { t } = useTranslation("global");
    const { query, pathname, replace, push } = useRouter();
    const { csrf } = useAuth();
    const { data: categories, isLoading, isError } = useAPICategories({ csrf });
    const { wallFiltersSSR } = useWallContext();
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        watch,
        setValue,
        trigger,
    } = useForm<FormTypes>({
        defaultValues: {
            city: wallFiltersSSR?.city ?? "",
            category: wallFiltersSSR?.category ?? "",
            date: wallFiltersSSR?.date
                ? `${wallFiltersSSR.date}T${wallFiltersSSR.time}`
                : undefined,
            peopleLimit: wallFiltersSSR?.peopleLimit
                ? +wallFiltersSSR.peopleLimit
                : undefined,
        },
        mode: "onTouched",
    });

    const onSubmit: SubmitHandler<FormTypes> = async ({
        city,
        category,
        date,
        peopleLimit,
    }) => {
        console.log("POST FILTERS SUBMIT");
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
                time: format(time, "HH:mm"),
            };
        } else {
            delete currentQuery.date;
            delete currentQuery.time;
        }

        if (peopleLimit) {
            currentQuery = {
                ...currentQuery,
                peopleLimit: peopleLimit.toString(),
            };
        } else {
            delete currentQuery.peopleLimit;
        }

        push(
            {
                pathname,
                query: { ...currentQuery, page: 1 },
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <Filters>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    id="city"
                    register={register}
                    control={control}
                    isError={!!errors.city}
                    hideLabel
                    placeholder
                />

                <SelectInput
                    id="category"
                    register={register}
                    control={control}
                    items={
                        categories?.map((category: string) => ({
                            text: t(`categories.${category}`),
                            id: category,
                        })) ?? []
                    }
                    setValue={setValue}
                    titleItem={watch("category") ?? ""}
                    isError={!!errors.category}
                    hideLabel
                />

                <DateInput
                    id="date"
                    isError={!!errors.date}
                    register={register}
                    control={control}
                    required
                    hideLabel
                />
                <Slider
                    id="peopleLimit"
                    register={register}
                    control={control}
                    min={1}
                    max={99}
                    hideLabel
                />
            </S.Form>
        </Filters>
    );
};
