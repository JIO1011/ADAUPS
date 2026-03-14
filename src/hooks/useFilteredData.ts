import { useState, useMemo } from 'react';

interface UseFilteredDataOptions<T> {
  data: T[];
  searchField: keyof T;
  categoryField: keyof T;
}

export function useFilteredData<T>({ data, searchField, categoryField }: UseFilteredDataOptions<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(data.map((item) => String(item[categoryField]))))],
    [data, categoryField]
  );

  const filteredData = useMemo(
    () =>
      data.filter((item) => {
        const matchesSearch = String(item[searchField]).toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todas' || String(item[categoryField]) === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [data, searchField, categoryField, searchTerm, selectedCategory]
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredData,
  };
}
