export const localStorage = {
  save: function (key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  fetch: function (key: string) {
    const data = window.localStorage.getItem(key);
    if (!data) return undefined;
    return JSON.parse(data);
  },
};
