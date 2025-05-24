"use client";

import { useState } from "react";
import css from "./create_test_ai.module.css";
import Dropdown from "@/components/create_test/dropdown/dropdown";
import Container from "@/components/create_test/container/container";
import Input from "@/components/create_test/input/input";
import SimpleButton from "@/components/create_test/simplebutton/simplebutton";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import { useRequests } from "@/shared/api/req";
import { useRouter } from "next/navigation";

export default function CreateTestAIPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [inputValues, setInputValues] = useState({
    testName: "",
    subject: "",
    topic: "",
    difficulty: "Легкий",
    questionsCount: "",
  });

  const { createTestAI, getTestByIdLc } = useRequests();

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelect = (field: keyof typeof inputValues, value: string) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = Object.values(inputValues).every((val) => val.trim() !== "");

  const handleSubmit = async () => {
    if (!isValid || isLoading) return;

    setIsLoading(true);
    try {
      const res = await createTestAI(inputValues);
      const testId = res.data.testId;
      await getTestByIdLc(testId);
      router.push("/main/edit");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const dropdowns = [
    {
      id: "subject",
      label: (
        <>
          Предмет<span className={css.required}> *</span>
        </>
      ),
      placeholder: "Выберите предмет",
      options: ["Математика"],
    },
    {
      id: "questionsCount",
      label: (
        <>
          Количество вопросов<span className={css.required}> *</span>
        </>
      ),
      placeholder: "Выберите количество",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      id: "topic",
      label: (
        <>
          Тема<span className={css.required}> *</span>
        </>
      ),
      placeholder: "Выберите тему",
      options: ["Матрицы", "Интегралы", "Производные", "Пределы", "Векторы"],
    },
    {
      id: "difficulty",
      label: (
        <>
          Уровень<span className={css.required}> *</span>
        </>
      ),
      placeholder: "Выберите уровень сложности",
      options: ["Легкий", "Средний", "Сложный"],
    },
  ];

  return (
    <div className={css.fullPageBackground}>
      <main className={css.pageContainer}>
        <h1 className={css.heading}>Создание теста с ИИ</h1>

        <Container title="Общая информация">
          <Input
            label={
              <span>
                Название теста <span className={css.required}>*</span>
              </span>
            }
            placeholder="Напишите название теста"
            name="testName"
            value={inputValues.testName}
            onChange={handleInputChange}
          />
        </Container>

        <Container title="Настройки теста ИИ">
          <div className={css.dropdownsContainer}>
            {dropdowns.map((dropdown) => (
              <Dropdown
                key={dropdown.id}
                id={dropdown.id}
                label={dropdown.label}
                placeholder={dropdown.placeholder}
                options={dropdown.options}
                value={inputValues[dropdown.id as keyof typeof inputValues]}
                onSelect={(value) =>
                  handleSelect(dropdown.id as keyof typeof inputValues, value)
                }
                isOpen={openDropdown === dropdown.id}
                onToggle={() => toggleDropdown(dropdown.id)}
              />
            ))}
          </div>
        </Container>

        {!isValid && (
          <ErrorMessage isActive={true} message="Заполните все поля" />
        )}
        {error && <ErrorMessage isActive={true} message={error} />}

        <div className={css.buttonsContainer}>
          <SimpleButton
            href="#"
            onClick={handleSubmit}
            disabled={!isValid || isLoading}
          >
            {isLoading ? "Создание..." : "Создать тест"}
          </SimpleButton>
        </div>
      </main>
    </div>
  );
}
