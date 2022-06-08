import { platform } from 'os';
import './styles.scss';

interface IInput {
    label: string;
    type: string;
    value: string;
    setValue: any;
    className?: string | undefined
}

const Input = ({type, label,value, setValue, className}:IInput) => {

    return (
        <div className="input">
            <label className="input__label">{label}</label>
						
            <input
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={`input__input ${className}`}
                placeholder={type === 'tel' ? '(__)____-____':''}
                required
            />
        </div>
    )
}

export {Input}