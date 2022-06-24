import styles from './styles.module.scss';

interface IInput {
    label: string;
    type: string;
    value: string;
    setValue: any;
    inputClassName?: string;
    labelClassName?:string;
}

const Input = ({type, label,value, setValue, labelClassName, inputClassName}:IInput) => {
    return (
        <div className={styles.container}>
            <label className={[styles.label, styles[`label${labelClassName}`]].join(' ')}>{label}</label>
						
            <input
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={[styles.input, styles[`input${inputClassName}`]].join(' ')}
                placeholder={type === 'tel' ? '(__)____-____':''}
                required
            />
        </div>
    )
}

export {Input}