import './styles.scss';

interface IButton {
    title:string;
    className?: string | undefined
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any | null
}

const Button = ({title, className, type, onClick}:IButton) => {
    return (
        <button 
            type={type} 
            className={`btn btn--${className}` }
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export { Button }