import './styles.scss';

interface IInput {
    label: string;
    type: string;
    value: string;
    setValue: any;
}

const Input = ({type, label,value, setValue}:IInput) => {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
						
            <input
                className="input__input"
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                required
            />
        </div>
    )
}

export {Input}