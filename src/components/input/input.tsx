
interface propsInput {

    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    padding?: string
    width?: string;
    height?: string;
    fontSize?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ name, placeholder, type, value, height, width, checked, fontSize, onChange }: propsInput) {
    return (

        <input
            onChange={onChange}
            checked={checked}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            style={{ height, width, fontSize }}
        ></input>



    )
}

