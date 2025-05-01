import css from './numberOfProblems.module.css'
import clsx from 'clsx';

interface Props {
    number: number;
    isActive?: boolean;
};

export function NumberOfProblems ({ number, isActive = false }: Props) {
    return (
        <div className={clsx(css.problem_number, isActive && css.problem_number__active)}>
            {number}
        </div>
    );
}