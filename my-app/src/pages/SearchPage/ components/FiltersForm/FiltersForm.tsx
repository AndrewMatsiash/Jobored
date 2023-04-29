import { Card, Title, Stack, TextInput, Button } from '@mantine/core';
import React from 'react';
import './FiltersForm.css';

export default function FiltersForm() {
  const [industry, setIndustry] = React.useState('');
  const [salaryFrom, setSalaryFrom] = React.useState('');
  const [salaryTo, setSalaryTo] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Обработка данных формы
  };

  return (
    <Card>
      <Title order={3}>Фильтры</Title>
      <form onSubmit={handleSubmit}>
        <Stack spacing="sm">
          <Title order={4}>Отрасль</Title>
          <TextInput
            placeholder="Введите название отрасли"
            value={industry}
            onChange={event => setIndustry(event.target.value)}
          />
          <Title order={4}>Оклад</Title>
          <TextInput
            type="number"
            placeholder="от"
            value={salaryFrom}
            onChange={event => setSalaryFrom(event.target.value)}
          />
          <TextInput
            type="number"
            placeholder="до"
            value={salaryTo}
            onChange={event => setSalaryTo(event.target.value)}
          />
        </Stack>
        <Button type="submit" variant="outline" style={{ marginTop: '1rem' }}>
          Применить
        </Button>
      </form>
    </Card>
  );
}
