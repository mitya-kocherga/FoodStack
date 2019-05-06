export const styles = theme => ({
  paperMain: {
    width: 500,
    height: 315,
    margin: 'auto',
    marginTop: 200,
    border: `2.5px solid ${theme.borderColor}`,
  },
  header: { 
    width: '100%',
  },
  headerTypo: {
    color: theme.typoColor,
    padding: '12px 0 0 15px',
  },
  chkLabel: {
    color: theme.typoColor,
  },
  textField: {
    width: 325,
  },
});
