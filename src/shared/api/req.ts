import { AxiosResponse } from "axios";
import { api } from "./api";
import { error } from "console";

// ТАЙПСЫ ПЕРЕНЕСТИ
export type Test = {
  name: string;
  subject: string;
  difficulty: "Легкий" | "Средний" | "Сложный";
  topic: string;
  problems: Problem[];
  tags?: Tag[];
  rating?: number;
};
export type TestAI = {
  testName: string;
  subject: string;
  difficulty: string;
  topic: string;
  questionsCount: string;
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
  createTestAI: (creationInfo: TestAI) => Promise<AxiosResponse>;
  getAllTests: (userId: string | number) => Promise<AxiosResponse>;
  getTestById: (testId: string | number) => Promise<AxiosResponse>;
  postUserAnswers: (
    testId: string | number,
    payload: { answers: { answerId: number }[] }
  ) => Promise<AxiosResponse>;
  getTestByIdLc: (testId: string | number) => Promise<void>;
  submitDraftTest: () => Promise<string>;
};

export type LocalStorageDraftTest = {
  testName: string;
  topic: string;
  difficulty: string;
  problems: {
    problem: string;
    answers: {
      answer: string;
      isCorrect: boolean;
    }[];
  }[];
};

export const useRequests = (): UseTests => {
  // CREATE_TEST
  const createTest = async (creationInfo: Test) => {
    return await api.post("/create_test_manually", creationInfo);
  };

  // CREATE_TEST_AI
  const createTestAI = async (creationInfoAI: TestAI) => {
    return await api.post("/generate_math_quastion", creationInfoAI, {
      timeout: 20000,
    });
  };

  // WORKSHOP
  const getAllTests = async (userId: string | number) => {
    return await api.get(`/get_user_tests/${userId}`);
  };

  //SOLVE_TEST/
  const getTestById = async (testId: string | number) => {
    return await api.get(`/get_test/${testId}`);
  };

  // получаем тест по ID и добавляем его в localStorage
  const getTestByIdLc = async (testId: string | number) => {
    try {
      const response = await getTestById(testId);
      if (response.status === 200) {
        localStorage.setItem("testDraft", JSON.stringify(response.data));
      } else {
        console.error("Не удалось получить тест", response.status);
      }
    } catch (error) {
      console.error("Ошибка при получении теста:", error);
    }
  };

  // ожидаю в ответе количество правильных ответов, добавляю его в localStorag
  const postUserAnswers = async (
    testId: string | number,
    payload: { answers: { answerId: number }[] }
  ) => {
    try {
      const data = await api.post(
        `/get_correct_answers_amount/${testId}`,
        payload
      );

      const result = data.data;
      localStorage.setItem("result", result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // Отправляю json а бэк, это запрос к странице edit
  const submitDraftTest = async (): Promise<string> => {
    const raw = localStorage.getItem("testDraft");

    if (!raw) throw new Error("Нет черновика в localStorage");

    const draft: LocalStorageDraftTest = JSON.parse(raw);
    const res = await api.post("/create_test_manually", draft);

    return res.data.testId;
  };

  return {
    createTest,
    getAllTests,
    getTestById,
    getTestByIdLc,
    submitDraftTest,
    createTestAI,
    postUserAnswers,
  };
};
