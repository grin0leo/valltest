
import { AxiosResponse } from "axios";
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
type UseTests = {
    createTest: (creationInfo: Test) => Promise<AxiosResponse>;
    getAllTests: (userId: string | number) => Promise<AxiosResponse>;
    getTestById: (testId: string | number) => Promise<AxiosResponse>;
    // loading: boolean;
    // error: string | null;
};

export const useRequests = (): UseTests => {
    // CREATE_TEST
    const createTest = async (creationInfo: Test) => {
        return await api.post("/create_test_manually", creationInfo);
    }
    // WORKSHOP
    const getAllTests = async (userId: string | number) => {
        // ИСПРАВИТЬ РУЧКУ
        return await api.get(`/user/tests/${userId}`)

    }
    //SOLVE_TEST/
    const getTestById = async (testId: string | number) => {
        return await api.get(`/get_test/${testId}`)
        // const response = await api.get(`/tests/${testId}`);

    }


    return { createTest, getAllTests, getTestById };


}