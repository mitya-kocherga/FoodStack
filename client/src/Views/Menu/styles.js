export const styles = theme => ({
  root: {
    minHeight: 600,
  },
  redText: {
    color: theme.primaryRedColor,
    margin: 10
  },
  tableStyle: {
    border: `1.5px solid ${theme.secondaryBlueColor}`,
    borderRadius: 7,
    minHeight: 325,
  },
  tableRowBorderBottom: {
    borderBottom: '.5px solid #80808057',
  }
});
