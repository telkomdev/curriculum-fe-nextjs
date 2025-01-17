import { fixedInputClass } from './constants';

export default function Input(props){
    const {
        handleChange,
        value,
        labelText,
        labelFor,
        id,
        name,
        type,
        isRequired = false,
        placeholder,
        customClass
    } = props;
    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + ' ' + customClass}
                placeholder={placeholder}
            />
        </div>
    )
}