import { TestAI } from '@/shared/model/test';
import { create } from 'zustand'

interface CreateTestAI {
    creationInfoAI: TestAI;
    setInfo: (newInfo: Partial<TestAI>) => void;
    resetAllInfo: () => void;
    isTestOptionsValid: () => boolean;
}

export const useTestCreateAI = create<CreateTestAI>((set, get) => ({
    creationInfoAI: {
        testName: "",
        subject: "",
        difficulty: "Легкий",
        topic: '',
        tags: ['ИИ']

        // totalQuestions: 0,
        // description: '',
    },

    setInfo: (newInfo) => set((state) => ({
        creationInfoAI: { ...state.creationInfoAI, ...newInfo }
    })),

    resetAllInfo: () => set({
        creationInfoAI: {
            testName: "",
            subject: "",
            difficulty: "Легкий",
            topic: '',
            tags: ['ИИ']
            // totalQuestions: 0,
        }
    }),


    isTestOptionsValid: () => {
        const { creationInfoAI: creationInfoAI } = get();
        if (!creationInfoAI.testName.trim()) return false;
        if (!creationInfoAI.subject.trim()) return false;
        if (typeof creationInfoAI.topic === 'string') {
            if (!creationInfoAI.topic.trim()) return false;
        }

        // if (creationInfoAI.totalQuestions === 0) return false;
        // if (!creationInfoAI.description.trim()) return false;

        return true;
    },


}))