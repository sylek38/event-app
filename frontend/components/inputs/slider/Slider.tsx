import {
    ChangeEventHandler,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    Control,
    Path,
    PathValue,
    UseFormRegister,
    Validate,
    ValidationRule,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./Slider.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const KEY_PREFIX = "slider";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    required?: boolean;
    min?: number;
    max?: number;
    type?: "range";
    disabled?: boolean;
    fullWidth?: boolean;
    hideLabel?: boolean;
}

export function Slider<T>({
    id,
    register,
    control,
    required,
    min,
    max,
    type = "range",
    disabled,
    fullWidth,
    hideLabel,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState(2);
    const [step, setStep] = useState(0);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const { ref, ...rest } = register(id, {
        disabled,
        setValueAs: (value: number) => value,
        required,
    });

    useEffect(() => {
        const rangeLinePadding = 16;

        if (inputRef.current != null) {
            const calcStep =
                (inputRef.current.offsetWidth - rangeLinePadding) /
                (Number(inputRef.current.max) - Number(inputRef.current.min));
            setStep(calcStep);
        }
    }, []);

    const stepTransform = {
        transform: `translateX(${value * step - step}px)`,
    };

    return (
        <S.Container fullWidth={fullWidth}>
            {!hideLabel && (
                <S.Label>
                    <span>{t(`${KEY_PREFIX}.${id}_label`)}</span>
                </S.Label>
            )}
            <S.Element>
                <S.Counter>{min}</S.Counter>
                <S.Content>
                    {/* Taki mój autorski patent, żeby slider wykorzystywał dwa refy - jeden z typem "RefCallBack", a drugi "RefObject"
                     jak masz pomysł jak to zrobić lepiej to przerób kod, idea jest taka, aby "ref" był odpowiedzialny za przekazywanie wartości do formularza
                     a inputRef odpowiedzialny jest za przemieszczanie ludzika nad sliderem, oraz wartości pod sliderem. 
                     Ze względu na to, że ref jest typem "RefCallBack" to nie ma właściwości "current", która jest potrzebna dla wyliczenia o ile przesunąć ludzika i wartość */}
                    <S.Slider
                        style={{ display: `none` }}
                        ref={ref}
                        type={type}
                        value={value}
                        min={min}
                        max={max}
                        disabled={disabled}
                        onInput={handleChange}
                        onChange={handleChange}
                    />
                    <S.Slider
                        ref={inputRef}
                        {...rest}
                        type={type}
                        value={value}
                        min={min}
                        max={max}
                        disabled={disabled}
                        onInput={handleChange}
                        onChange={handleChange}
                    />

                    <S.Icon style={stepTransform}>
                        <FontAwesomeIcon icon={faPerson} />
                    </S.Icon>

                    <S.Bubble style={stepTransform}>{value}</S.Bubble>
                </S.Content>
                <S.Counter>{max}+</S.Counter>
            </S.Element>
        </S.Container>
    );
}
