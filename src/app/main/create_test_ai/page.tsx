'use client';

import { useState } from 'react';
import css from './create_test_ai.module.css';
import Button from '@/components/create_test/button/button';
import Dropdown from '@/components/create_test/dropdown/dropdown';
import Container from '@/components/create_test/container/container';
import Input from '@/components/create_test/input/input';

export default function CreateTestAIPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState({
    subject: '',
    questionType: '',
    language: '',
    questionCount: ''
  });

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelect = (field: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  const dropdowns = [
    {
      id: 'item',
      label: <>Предмет<span className={css.required}> *</span></>,
      placeholder: 'Выберите Категорию',
      options: ['Математика']
    },
    {
      id: 'questioncount',
      label: <>Количество вопросов<span className={css.required}> *</span></>,
      placeholder: 'Выберите кол-во вопросов',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    {
      id: 'subject',
      label: <>Тема<span className={css.required}> *</span></>,
      placeholder: 'Выберите тему',
      options: ['Матрицы', 'Интегралы', 'Производные', 'Пределы', 'Векторы']
    },
    {
      id: 'level',
      label: <>Уровень<span className={css.required}> *</span></>,
      placeholder: 'Выберите уровень сложности',
      options: ['Легкий', 'Средний', 'Сложный']
    }
  ];

  return (
    <div className={css.fullPageBackground}>
      <main className={css.pageContainer}>
        <h1 className={css.heading}>Создание теста с ИИ</h1>
        
        <Container title="Общая информация">
        <Input 
          label={<span>Название теста <span className={css.required}>*</span></span>} 
          placeholder="Напишите название теста" 
          name="testName"
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
                value={selectedValues[dropdown.id as keyof typeof selectedValues]}
                onSelect={(value) => handleSelect(dropdown.id, value)}
                isOpen={openDropdown === dropdown.id}
                onToggle={() => toggleDropdown(dropdown.id)}
              />
            ))}
          </div>
        </Container>

        <div className={css.buttonsContainer}>
          <Button
            href="/main/edit"
            tooltip="Вы перейдете на страницу с тестом с возможностью редактирования"
          >
            Создать тест
          </Button>
          
          <Button
            href="/take-test"
            tooltip="Вы перейдёте на страницу с тестом и сразу начнёте его прохождение"
          >
            Пройти тест
          </Button>
        </div>
      </main>
    </div>
  );
}