import { connect } from 'react-redux';
import ShowPage from './ShowPage';
import { showRequest } from '../../actions/show';

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  show: state.shows.show
});

const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);