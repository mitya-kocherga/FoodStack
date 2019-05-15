import { getTomorrow } from '@common/getTommorow';

export class Menus {
    date = getTomorrow(); // <- дефолтное значение "завтра"
    menu = [];
};
