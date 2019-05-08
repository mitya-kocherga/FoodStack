export const getToken = () => {
    const token = localStorage.getItem('food_token');
    return token ? token.replace('Bearer ', '') : null;
};
