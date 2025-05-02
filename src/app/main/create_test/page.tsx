'use client'

import { useState } from 'react';
import css from './create_test.module.css';
import Container from '@/components/create_test/container/container';
import Input from '@/components/create_test/input/input';
import Dropdown from '@/components/create_test/dropdown/dropdown';
import SimpleButton from '@/components/create_test/simplebutton/simplebutton';
import { useRouter } from 'next/navigation';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';

export default function GeneralInfoPage() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [inputValues, setInputValues] = useState({
    testName: '',
    topic: ''
  });

  const handleSelect = (value: string) => {
    setSelectedLevel(value);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };


  //ВАЛИДАЦИЯ

  const isValid =
    inputValues.testName.trim() !== '' &&
    inputValues.topic.trim() !== '' &&
    selectedLevel.trim() !== '';


  const handleSubmit = () => {
    if (!isValid) return;

    const testData = {
      testName: inputValues.testName.trim(),
      topic: inputValues.topic.trim(),
      level: selectedLevel.trim()
    };

    localStorage.setItem('testDraft', JSON.stringify(testData));
    router.push('/main/edit');
  };

  const dropdownOptions = ['Легкий', 'Средний', 'Сложный'];

  return (
    <div className={css.fullPageBackground}>
      <main className={css.pageContainer}>
        <h1 className={css.heading}>Общая информация</h1>

        <Container title="Общая информация">
          <div className={css.fieldsRow}>
            <Input
              label={<span>Название теста<span className={css.required}> *</span></span>}
              placeholder="Введите название теста"
              name="testName"
              value={inputValues.testName}
              onChange={handleInputChange}
            />

            <Input
              label={<span>Тема<span className={css.required}> *</span></span>}
              placeholder="Введите тему"
              name="topic"
              value={inputValues.topic}
              onChange={handleInputChange}
            />

            <Dropdown
              id="level"
              label={<span>Уровень <span className={css.required}>*</span></span>}
              placeholder="Уровень"
              options={dropdownOptions}
              value={selectedLevel}
              onSelect={handleSelect}
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>
        </Container>
        {!isValid && <ErrorMessage isActive={!isValid} message='Заполните поля' />}

        <SimpleButton href="/create-test" onClick={handleSubmit} disabled={!isValid}>
          Создать тест
        </SimpleButton>

      </main>
    </div>
  );
}