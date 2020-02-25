import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

import { styles } from './styles'
import Menu from './Menu'
import {
  setOptionAction,
  dishesOptions,
} from '../../@store/course'

import { getOptions } from '../../@store/course/thunk';


const mapStateToProps = createStructuredSelector({
  dishesOptions
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getOptions,
        setOptionAction,
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Menu))

