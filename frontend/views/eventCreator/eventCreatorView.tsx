import useTranslation from "next-translate/useTranslation";
import { Routes } from "../../routes/Routes";
import * as S from "./EventCreatorView.style";

import { TextInput } from "../../components/inputs/text/TextInput";
import { Select } from "../../components/inputs/option/Select";
import { TextareaInput } from "../../components/inputs/textarea/TextareaInput";
import { Slider } from "../../components/inputs/slider/Slider";
import { FileInput } from "../../components/inputs/file/FileInput";
// import { DatePicker } from "../../components/inputs/datePicker/DatePicker";
import { DateInput } from "../../components/inputs/date/DateInput";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";

import React from "react";
import { CategoriesResponse } from "../../types/responses/categoriesResponse.type";
import { SelectInput } from "../../components/inputs/option/SelectInput";
import { CategoriesType } from "../../types/categories.type";

interface FormTypes {
    name: string;
    surname: string;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    map: string;
    search_bar: string;
    email: string;
    date: Date;
}

interface Props {
    categories?: string[];
    isCategoriesError: boolean;
    isCategoriesLoading: boolean;
}

export const EventCreatorView = ({
    categories,
    isCategoriesError,
    isCategoriesLoading,
}: Props) => {
    const { t } = useTranslation("global");
    console.log(categories, "CATEGORIES");
    // const processedCategories = categories?.results.
    // const { t: t2 } = useTranslation("eventManager");

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        watch,
    } = useForm<FormTypes>({
        defaultValues: {
            name: "test",
            surname: "test",
            title: "",
            desc: "",
            category: "",
            peopleLimit: 2,
            photo: "",
            map: "",
            email: "test@test.pl",
            date: undefined,
        },
    });

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        // await mutateAsync(data);
    };

    return (
        // <Layout
        //     small
        //     csrf={csrf}
        //     header={{
        //         title: t2("creator.heading"),
        //     }}
        // >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput id="photo" register={register} control={control} />
            <S.NewLine>{t("info")}</S.NewLine>
            <S.Content>
                <TextInput
                    id="title"
                    register={register}
                    control={control}
                    isError={!!errors.title}
                    required
                    placeholder
                    dark
                />
                <SelectInput
                    id="category"
                    register={register}
                    control={control}
                    setValue={setValue}
                    items={
                        categories?.map((category) => ({
                            text: category,
                            id: t(category),
                        })) ?? []
                    }
                    titleItem={watch("category") ?? []}
                    isError={!!errors.category}
                    required
                    fullWidth
                    dark
                />
                <TextareaInput
                    id="desc"
                    placeholder
                    register={register}
                    control={control}
                    isError={!!errors.desc}
                    // fullWidth
                    rows={4}
                    cols={50}
                    dark
                />
                <DateInput
                    id="date"
                    isError={!!errors.date}
                    register={register}
                    control={control}
                    required
                />
                <Slider
                    id="peopleLimit"
                    register={register}
                    control={control}
                    fullWidth
                    min={2}
                    max={99}
                />
            </S.Content>
            <S.NewLine>{t("map")}</S.NewLine>
            <S.Content>
                <TextInput
                    id="map"
                    register={register}
                    control={control}
                    isError={!!errors.map}
                    required
                    placeholder
                    dark
                />
                <Button variant="gradient" type="submit" fullWidth>
                    {t("confirm")}
                </Button>
            </S.Content>
        </S.Form>
        // {isError && <div>isError</div>}

        // {isLoading && <div>isLoading</div>}
        // </Layout>
    );
};
