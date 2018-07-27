import { connect } from 'react-redux';
import view from './view';

const mapStateToProps = state => {
  return {
    login: {},
  };
};

const mapActionToProps = dispatch => {
  return {
    login: () => dispatch(),
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(view);
