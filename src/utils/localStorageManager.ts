export const getLocalValue = (key: string) => {
  if (typeof window !== undefined) {
    const localValues = localStorage.getItem(key);
    return localValues ? JSON.parse(localValues) : '';
  }
};

export const setLocalValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
