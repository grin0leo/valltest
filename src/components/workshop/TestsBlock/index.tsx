'use client'

import { useRequests } from "@/shared/api/req"
import { Test } from "@/shared/model/test";
import { TestCard } from "@/shared/ui/TestCard";
import { useQuery } from "@tanstack/react-query"
import css from './testsBlock.module.css'
import { ErrorMessage } from "@/shared/ui/ErrorMessage";


type TestWithoutProblems = Test;

type ResponseData = {
    data: TestWithoutProblems[];
};

export function TestsBlock({ userId }: { userId: string | number }) {
    const { getAllTests } = useRequests()


    const { data, error, isLoading } = useQuery<ResponseData>({
        queryKey: ['tests', userId],
        queryFn: () => getAllTests(userId)
    })

    if (isLoading) return (
        <div className={css.loaderWrapper}>
            <span className={css.loader}></span>
        </div>
    );
    if (error) return <ErrorMessage message='Ошибка загрузки' isActive={true} />;

    const tests = data?.data || [];


    return (
        tests.length > 0 ? (
            // <section>
            <ul className={css.testsList}>
                {tests.map((test) => (
                    <TestCard
                        key={test.id}
                        testId={test.id as number}
                        difficulty={test.difficulty}
                        tags={test.tags}
                        questions={test.problems.length}
                        testName={test.difficulty}
                    />
                ))}
            </ul>
            // </section>
        ) : (
            <div>Нет тестов</div>
        )
    );




}