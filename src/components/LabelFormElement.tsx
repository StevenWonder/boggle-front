import * as React from "react"

interface Props { 
    labelText: string
    children: JSX.Element
}

export const LabelFormElement = (props: Props) => {
    const { labelText, children } = props
    return (
        <div>
            <div>
                <label>{labelText}</label>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}