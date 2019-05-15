import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY_RED    = '#fa646c',
      SECONDARY_BLUE = '#74c3be',
      WHITE          = '#ffffff';

const fontFamilyLucidaGrande         = '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      fontFamilyProximaNovaRgregular = '"proxima_nova_rgregular", "Roboto", Arial, Helvetica, sans-serif',
      fontFamilyOpenSans             = '"Open Sans", sans-serif';


export default createMuiTheme({
    borderColor: '#959595',
    typoColor: '#8a8a8a',
    primaryRedColor: PRIMARY_RED,
    secondaryBlueColor: SECONDARY_BLUE,
    overrides: {//переписывает стандартные материал стили
        MuiButton: { //button
            outlinedPrimary: {
                backgroundColor: WHITE,
                color: SECONDARY_BLUE,
                border: `.5px solid ${SECONDARY_BLUE}`,
                fontWeight: 'normal',
                padding: '4px 16px',
                '&:hover': {
                    color: WHITE,
                    backgroundColor: SECONDARY_BLUE,
                    border: `.5px solid ${SECONDARY_BLUE}`,
                },
            },
        },
        MuiTableCell: { //убираем бордер для <TableCell/> // в случае надобнности их можно добавить к <TableRow />
            root: {
                borderBottom: 'none'
            }
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
        },
        MuiIconButton: {
            root: {
                padding: 8
            }
        }

    },
    typography: {
        fontFamily: fontFamilyProximaNovaRgregular,
        openSans: fontFamilyOpenSans,
        useNextVariants: true,
        h1: {
          fontSize: 60,
        },
        h2: {
          fontSize: 37.5,
        },
        h3: {
          fontSize: 30,
        },
        h4: {   //h4 всегжа красный!!!!
          fontSize: 18,
          color: PRIMARY_RED
        },
        h5: {
          fontSize: 16,
          fontWeight: "bold",
        },
        h6: {
          fontSize: 14.5,
        },
        subtitle1: {
          fontSize: 14,
        },
        subtitle2: {
          fontSize: 12,
        },
        body1: {
          fontSize: 12
        },
        body2: {
          fontSize: 14,
        },
        button: {
          fontSize: 14,
          textTransform: "none",
        },
        caption: {
          fontSize: 11,
        },
        overline: {
          fontSize: 11,
        },
      },
    themeName: 'food_theme',
});