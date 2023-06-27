import { PropsWithChildren } from 'react';

export type TaskProps = {
    name: string;
    description: string;
};

const Task = (props: PropsWithChildren<TaskProps>) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Task;
