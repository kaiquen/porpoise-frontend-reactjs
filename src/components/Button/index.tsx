import './styles.scss';

interface IButton {
    title:string;
    className?: string | undefined
}

const Button = ({title, className}:IButton) => {
    return (
        <button className={`btn btn--${className}`}>
            {title}
        </button>
    );
}

export { Button }