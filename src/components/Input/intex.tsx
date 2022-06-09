import styles from './styles.module.scss';

interface IInput {
    label: string;
    type: string;
    value: string;
    setValue: any;
    className?: string | undefined
}

const Input = ({type, label,value, setValue, className}:IInput) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
						
            <input
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={styles.input}
                placeholder={type === 'tel' ? '(__)____-____':''}
                required
            />
        </div>
    )
}

export {Input}