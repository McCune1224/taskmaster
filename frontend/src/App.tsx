import { Button, Label, TextInput } from 'flowbite-react';
import Timer from './components/Timer';
import Task from './components/Task';
import { useState } from 'react';

type Task = {
    name: string;
    description: string;
};

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const handleNewTaskClick = () => {
        setTasks([
            ...tasks,
            {
                name: taskName || `Task Name (${tasks.length + 1}))`,
                description:
                    taskDescription ||
                    `Task Description (${tasks.length + 1}))`,
            },
        ]);
        setTaskName('');
        setTaskDescription('');
    };
    return (
        <div className="container">
            <div className="flex flex-row">
                <h1>React App</h1>
                <Label className="ml-2">Task Name</Label>
                <TextInput
                    className="ml-2"
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                />
                <Label className="ml-2">Task Description</Label>
                <TextInput
                    className="ml-2"
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                />
                <Button
                    color="orange"
                    onClick={() => {
                        handleNewTaskClick();
                    }}
                    pill={true}
                >
                    +
                </Button>
            </div>
            <div>
                <ul>
                    {tasks.map((task: Task, index) => {
                        return (
                            <li key={index}>
                                <Task
                                    name={task.name}
                                    description={task.description}
                                />
                                <Timer />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;
