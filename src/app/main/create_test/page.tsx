'use client';

import { useState } from 'react';
import css from './create_test.module.css';
import Container from '@/components/create_test/container/container';
import Input from '@/components/create_test/input/input';
import Dropdown from '@/components/create_test/dropdown/dropdown';
import SimpleButton from '@/components/create_test/simplebutton/simplebutton';

export default function GeneralInfoPage() {
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
                label={<span>Категория <span className={css.required}>*</span></span>}
                placeholder="Уровень"
                options={dropdownOptions}
                value={selectedLevel}
                onSelect={handleSelect}
                isOpen={isDropdownOpen}
                onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          </Container>
  
          <SimpleButton href="/create-test">
            Создать тест
          </SimpleButton>
        </main>
      </div>
    );
  }