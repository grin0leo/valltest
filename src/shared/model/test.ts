

export type Test = {
    id?: number;
    testName: string;
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
    tags: Tag[];
    problems: Problem[]
    topic?: string;
}

export type TestAI = {
    id?: number;
    testName: string;
    difficulty: string;
    tags: Tag[];
    subject: string;
    topic?: string;
};

export type SolveTest = {
    id: number;
    problems: Problem[]
}



export type Problem = {
    question: string;
    answers: Answer[];
};

export type Answer = {
    value: string;
    is_correct: boolean;
};

type Tag = string;