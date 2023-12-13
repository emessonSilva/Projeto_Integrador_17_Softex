
interface propsInput {

    placeholder: string;
    type: string;
    name: string;
    value: string;
}

export default function Input({ name, placeholder, type, value }: propsInput) {
    return (
        <input
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

