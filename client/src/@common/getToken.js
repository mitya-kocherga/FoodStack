
export const getToken = () => localStorage.getItem('food_token').replace('Bearer ', '');
