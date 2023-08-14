import { useState } from "react"

export const ListForm = (props: any): any => {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {
                props.addItem(value)
                setValue('');
                }}>submit</button>
        </div>
    )
}