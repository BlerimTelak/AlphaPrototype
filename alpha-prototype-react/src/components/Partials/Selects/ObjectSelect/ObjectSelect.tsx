import React from "react";

interface Props {
    name?: string,
    options?: any[],

    onChange?(event: any): void

    optionValueKey?: string,
    optionDisplayKey?: string,
}

const ObjectSelect: React.FC<Props> = (props) => {
    return (
        <select name={props.name} onChange={props.onChange}>
            <option value={undefined}>Select a value...</option>
            {props?.options?.map((option, idx) => {
                return (
                    <option key={idx} value={props.optionValueKey ? option[props.optionValueKey] : option.id}>
                        {props.optionDisplayKey ? option[props.optionDisplayKey] : option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default ObjectSelect;

