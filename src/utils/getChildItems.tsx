
export const getChildItems = (obj: any) => {
  for (const key in obj) {
    if (obj[key] instanceof Array) return obj[key];
  }
};
