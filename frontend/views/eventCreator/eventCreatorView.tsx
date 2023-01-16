import useTranslation from "next-translate/useTranslation";
import { Routes } from "../../routes/Routes";
import * as S from "./EventCreatorView.style";

import { TextInput } from "../../components/inputs/text/TextInput";
import { TextareaInput } from "../../components/inputs/textarea/TextareaInput";
import { Slider } from "../../components/inputs/slider/Slider";
import { FileInput } from "../../components/inputs/file/FileInput";
import { DateInput } from "../../components/inputs/date/DateInput";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";

import React from "react";
import { SelectInput } from "../../components/inputs/option/SelectInput";
import { useCategories } from "../../context/CategoriesContext";
import { useAPICategories } from "../../api/categories/useAPICategories";
import { useAuth } from "../../context/UserContext";

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

export const EventCreatorView = () => {
    const { t } = useTranslation("global");
    const { csrf } = useAuth();
    const { data: categories, isLoading, isError } = useAPICategories({ csrf });

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

    console.log(categories, "CATEGORIES EVENT CREATOR");

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        // await mutateAsync(data);
        console.log(data, "SUBMIT event");
    };

    return (
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
                        categories?.map((category: string) => ({
                            text: t(category),
                            id: category,
                        })) ?? []
                    }
                    loading={isLoading}
                    // items={[
                    //     { id: "elko", text: "elko" },
                    //     { id: "elko2", text: "elko2" },
                    //     { id: "elko3", text: "elk3" },
                    //     { id: "elko4", text: "elko4" },
                    //     { id: "elko23", text: "elko2" },
                    //     { id: "elko32", text: "elk3" },
                    //     { id: "elko41", text: "elko4" },
                    // ]}
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
                    dark
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
