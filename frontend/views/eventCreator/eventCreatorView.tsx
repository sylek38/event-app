import useTranslation from "next-translate/useTranslation";
import { Routes } from "../../routes/Routes";
import * as S from "./eventCreatorView.style";

import { TextInput } from "../../components/inputs/text/TextInput";
import { Select } from "../../components/option/SelectField";
import { TextareaInput } from "../../components/inputs/textarea/TextareaInput";
import { Slider } from "../../components/inputs/slider/Slider";
import { FileInput } from "../../components/inputs/file/FileInput";
// import { DatePicker } from "../../components/inputs/datePicker/DatePicker";
import { DateInput } from "../../components/inputs/date/DateInput";

import { Layout } from "../../views/layout/Layout";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { useState } from "react";

import React from "react";
import { useAPIEventCreator } from "../../api/events/useAPIEventCreator";

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

export const EventCreatorView = () => {
    const { t: t1 } = useTranslation("global");
    const { t: t2 } = useTranslation("eventManager");

    const { isError, isLoading, mutateAsync } = useAPIEventCreator();

    const listOfCat = [
        "Sportowo",
        "Karaoke",
        "Impreza domowa",
        "Klub",
        "Urodziny",
        "Góry",
        "Randka",
        "Pub",
        "Wycieczka",
    ];

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
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
            date: new Date(),
        },
    });

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        await mutateAsync(data);
    };
    return (
        <Layout
            small
            header={{
                title: t2("creator.heading"),
            }}
        >
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput id="photo" register={register} control={control} />
                <S.NewLine>{t1("info")}</S.NewLine>
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
                    <Select
                        id="category"
                        register={register}
                        control={control}
                        values={listOfCat}
                        isError={!!errors.category}
                        required
                        fullWidth
                        dark
                    ></Select>
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
                    <Slider
                        id="peopleLimit"
                        register={register}
                        control={control}
                        fullWidth
                        min={2}
                        max={99}
                    ></Slider>
                    <DateInput
                        id="date"
                        isError={!!errors.map}
                        register={register}
                        control={control}
                    ></DateInput>
                </S.Content>
                <S.NewLine>{t1("map")}</S.NewLine>
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
                        {t1("confirm")}
                    </Button>
                </S.Content>
            </S.Form>
            {isError && <div>isError</div>}

            {isLoading && <div>isLoading</div>}
        </Layout>
    );
};
