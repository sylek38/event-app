import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
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
    date?: number;
    peopleLimit?: number;
}

export const PostFilters = () => {
    const { t } = useTranslation("global");
    const { query, pathname, replace } = useRouter();
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
    } = useForm<FormTypes>({
        defaultValues: {
            city: wallFiltersSSR?.city,
            category: wallFiltersSSR?.category,
            date: wallFiltersSSR?.date ? +wallFiltersSSR.date : undefined,
            peopleLimit: wallFiltersSSR?.peopleLimit
                ? +wallFiltersSSR.peopleLimit
                : undefined,
        },
    });

    const onSubmit: SubmitHandler<FormTypes> = async (
        { city, category, date, peopleLimit },
        data
    ) => {
        console.log(city, category, date, peopleLimit, "DATA");
        if (!data) {
            delete query.city;
            delete query.category;
            delete query.date;
            delete query.peopleLimit;
        } else {
            query.city = city;
            query.category = category;
            query.date = date?.toString();
            query.peopleLimit = peopleLimit?.toString();
        }

        replace(
            {
                pathname,
                query,
            },
            undefined,
            { shallow: true }
        );
    };

    //     <Select
    //     id="category"
    //     register={register}
    //     control={control}
    //     values={listOfCat}
    //     isError={!!errors.category}
    //     required
    //     fullWidth
    //     dark
    // />

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
                            text: t(category),
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
                    hideLabel
                />
            </S.Form>
        </Filters>
    );
};
