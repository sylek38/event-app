import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filters } from "../../../components/filters/Filters";
import { DateInput } from "../../../components/inputs/date/DateInput";
import { Slider } from "../../../components/inputs/slider/Slider";
import { Select } from "../../../components/inputs/option/Select";
import { useWallContext } from "../../../context/WallContext";
import * as S from "./PostFilters.style";

interface FormTypes {
    city?: string;
    category?: string;
    date?: number;
    peopleLimit?: number;
}

export const PostFilters = () => {
    const { query, pathname, replace } = useRouter();
    const { wallFiltersSSR } = useWallContext();
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
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
                <Select
                    id="city"
                    register={register}
                    control={control}
                    values={[""]}
                    isError={!!errors.city}
                />

                <Select
                    id="category"
                    register={register}
                    control={control}
                    isError={!!errors.category}
                />

                <DateInput
                    id="date"
                    register={register}
                    control={control}
                    isError={!!errors.date}
                />
                <Slider
                    id="peopleLimit"
                    register={register}
                    control={control}
                />
            </S.Form>
        </Filters>
    );
};
