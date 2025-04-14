
import { api } from "./api"

// ТАЙПСЫ ПЕРЕНЕСТИ
export type Test = {
    name: string;
    subject: string;
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
    topic: string;
    problems: Problem[];
    tags?: Tag[];
    rating?: number;
};
export type Problem = {
    question: string;
    answers: Answer[];
};

export type Answer = {
    value: string;
    is_correct: boolean;
};

type Tag = {
    name: string;
};

export const req = {
    // CREATE_TEST
    createTest: async (creationInfo: Test) => {
        return await api.post("/create_test_manually", creationInfo);
    },
    // WORKSHOP
    getAllTest: async (userId: string | number) => {
        // ИСПРАВИТЬ РУЧКУ
        const { data } = await api.get(`tests`)
        return data
    },
    //SOLVE_TEST/
    getTestById: async (testId: string | number) => {
        const response = await api.get(`/get_test/${testId}`);
        // const response = await api.get(`/tests/${testId}`);
        return response
    }

}