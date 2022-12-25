import useTranslation from "next-translate/useTranslation";
import { Routes } from "../../routes/Routes";
import * as S from "./eventCreatorView.style";

import { TextInput } from "../../components/inputs/text/TextInput";
import { Select } from "../../components/option/SelectField";
import { TextareaInput } from "../../components/inputs/textarea/TextareaInput";
import { Slider } from "../../components/inputs/slider/Slider";
import { FileInput } from "../../components/inputs/file/FileInput";

import { Layout } from "../../views/layout/Layout";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { useState } from "react";

import React from "react";

interface FormTypes {
    addFile: string;
    title: string;
    desc: string;
    map: string;
    cat: string;
    slider_create: string;
    search_bar: string;
}

export const EventCreatorView = () => {
    const { t: t1 } = useTranslation("global");
    const { t: t2 } = useTranslation("eventManager");

    // const { isError, isLoading, mutateAsync } = useAPIEventCreator();

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
    } = useForm<FormTypes>();

    const onSubmit: SubmitHandler<FormTypes> = (data) => {
        console.log(data);
    };
    return (
        <Layout
            small
            header={{
                title: t2("creator.heading"),
            }}
        >
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput id="addFile" register={register} control={control} />
                <S.newLine>{t1("info")}</S.newLine>
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
                        id="cat"
                        register={register}
                        control={control}
                        values={listOfCat}
                        isError={!!errors.cat}
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
                        id="slider_create"
                        register={register}
                        control={control}
                        fullWidth
                        min={2}
                        max={99}
                    ></Slider>
                </S.Content>
                <S.newLine>{t1("map")}</S.newLine>
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
        </Layout>
    );
};
