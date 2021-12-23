import * as React from "react"

interface Props { 
    labelText: string
}

export const InputWithLabel = (props: Props) => {
    const { labelText } = props
    return (
        <div>
            <div>
                <label>{labelText}</label>
            </div>
            <div>
                <input />
            </div>
        </div>
    )
}