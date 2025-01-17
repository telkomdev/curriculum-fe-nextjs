import { fixedButtonClass } from './constans';

export default function Input(props){
    const {
        onClick,
        customClass,
        children
    } = props;
    return (
        <button onClick={onClick} className={fixedButtonClass + ' ' + customClass}>
            {children}
        </button>
    )
}