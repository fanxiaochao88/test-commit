import './index.scss';

interface ContainerProps {
    children: React.ReactNode;
    name: string;
    control: () => void;
}

const Container: React.FC<ContainerProps> = (props) => {
    return (
        <div>
            <h2 className="header">{ props.name }</h2>
            <button onClick={props.control}>控制</button>
        </div>
    )
}

export default Container;
