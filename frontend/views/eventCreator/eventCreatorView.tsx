import useTranslation from "next-translate/useTranslation";
import { Routes } from "../../routes/Routes";
import * as S from "./eventCreatorView.style";

import { TextInput } from "../../components/inputs/text/TextInput";
import { TextareaInput } from "../../components/inputs/textarea/TextareaInput";
import { Slider } from "../../components/inputs/slider/Slider";
import { FileInput } from "../../components/inputs/file/FileInput";
import { DateInput } from "../../components/inputs/date/DateInput";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";

import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/inputs/option/SelectInput";
import { useAPICategories } from "../../api/categories/useAPICategories";
import { useAuth } from "../../context/UserContext";
import dynamic from "next/dynamic";
import { useAPIForwardGeocoding } from "../../api/geolocation/useAPIForwardGeocoding";
import { MarkerProps } from "../../components/map/mapTypes";
import { useAPIEventCreator } from "../../api/events/useAPIEventCreator";

const Map = dynamic(() => import("../../components/map/Map"), {
    ssr: false,
});

interface FormTypes {
    title: string;
    desc: string;
    category: string;
    date: Date;
    peopleLimit: number;
    image: string;

    city: string;
    street: string;
    map: string;
}

export const EventCreatorView = () => {
    const { t } = useTranslation("global");
    const { csrf } = useAuth();
    const { data: categories, isLoading, isError } = useAPICategories({ csrf });
    const [mapMarker, setMapMarker] = useState<MarkerProps | null>(null);

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        watch,
    } = useForm<FormTypes>({
        defaultValues: {
            title: "",
            desc: "",
            category: "",
            peopleLimit: 1,
            image: "",
            map: "",
            date: undefined,
        },
    });

    const locationFromWatch = watch("map");

    const {
        data: mapData,
        isError: mapError,
        isLoading: mapLoading,
        refetch,
    } = useAPIForwardGeocoding({
        location: locationFromWatch,
    });

    const {
        mutateAsync,
        isLoading: isLoadingAddPost,
        isError: isErrorAddPost,
    } = useAPIEventCreator();

    const handleGeolocation = () => {
        if (locationFromWatch) {
            refetch();
        }
    };

    const onSubmit: SubmitHandler<FormTypes> = async (data) => {
        await mutateAsync({ csrf, ...data, map: mapMarker });
        console.log(data, "SUBMIT event");
    };

    useEffect(() => {
        if (mapData?.data) {
            const newCoordinates = {
                latitude: mapData?.data[0].latitude,
                longitude: mapData?.data[0].longitude,
            };

            setMapMarker(newCoordinates);
        }
    }, [mapData]);

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput id="image" register={register} control={control} />
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
                        categories?.results.map((category: string) => ({
                            text: t(`categories.${category}`),
                            id: category,
                        })) ?? []
                    }
                    loading={isLoading}
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

                <TextInput
                    id="city"
                    register={register}
                    control={control}
                    isError={!!errors.city}
                    required
                    dark
                />

                <TextInput
                    id="street"
                    register={register}
                    control={control}
                    isError={!!errors.street}
                    dark
                />
            </S.Content>
            <S.NewLine>{t("map")}</S.NewLine>
            <S.Content>
                <TextInput
                    id="map"
                    register={register}
                    control={control}
                    isError={!!errors.map}
                    placeholder
                    dark
                />

                <Button fullWidth variant="gray" onClick={handleGeolocation}>
                    {t("map_info")}
                </Button>

                <S.MapContainer>
                    <Map marker={mapMarker ?? null} />
                </S.MapContainer>

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
