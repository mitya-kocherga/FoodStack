import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    borderColor: '#959595',
    typoColor: '#8a8a8a',
    overrides: {//переписывает стандартные материал стили
        MuiButton: { // сейчас в этом блоке ничего не переписано, нужно написать тему для кнопок, сектроово и прч, в нужных цветах
            outlined: {
                padding: '4px 16px',
                fontWeight: 'normal',
            },
            root: {
                fontSize: 14,
                fontWeight: 'normal',
                minHeight: 34,
                padding: '4px 16px',
                textDecoration: 'none',
            },
            containedPrimary: {
                backgroundColor: '#ffffff',
                border: '0.5px solid #959595',
                fontWeight: 'normal',
                padding: '4px 16px',
                '&:hover': {
                backgroundColor: '#7b7b7b52',
                },
            },
        },
        // переписывает стиль для бордера в текст филд
        MuiOutlinedInput: {
            root: {
                '&$focused $notchedOutline': {
                    borderColor: '#6d6d6d',
                }
            },  
        },
        // переписывает стиль для лейбла в текст филд
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#6d6d6d',
                }
            }
        }

    },
    themeName: 'food_theme',
});