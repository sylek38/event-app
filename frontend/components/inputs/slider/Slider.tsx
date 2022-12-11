import { useEffect, useRef, useState } from "react";

import useTranslation from "next-translate/useTranslation";

import * as S from "./Slider.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

interface Props<T> {
    min?: number;
    max?: number;
    type?: "range";
    disabled?: boolean;
    fullWidth?: boolean;
}

export function Slider<T>({
    min,
    max,
    type = "range",
    disabled,
    fullWidth,
}: Props<T>) {
    const { t } = useTranslation("inputs");

    const [value, setValue] = useState(0);
    const [step, setStep] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        const rangeLinePadding = 16;
        if (ref.current != null) {
            const calcStep =
                (ref.current.offsetWidth - rangeLinePadding) /
                (Number(ref.current.max) - Number(ref.current.min));
            setStep(calcStep);
        }
    }, []);

    const stepTransform = {
        transform: `translateX(${value * step - step}px)`,
    };

    return (
        <S.Container fullWidth={fullWidth}>
            <S.Counter>{min}</S.Counter>
            <S.Content>
                <S.Slider
                    type={type}
                    value={value}
                    min={min}
                    max={max}
                    disabled={disabled}
                    ref={ref}
                    onInput={handleChange}
                    onChange={handleChange}
                />

                <S.Icon style={stepTransform}>
                    <FontAwesomeIcon icon={faPerson} />
                </S.Icon>

                <S.Bubble style={stepTransform}>{value}</S.Bubble>
            </S.Content>
            <S.Counter>{max}+</S.Counter>
        </S.Container>
    );
}
