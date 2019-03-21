import { connect } from 'react-redux';
import { getDogImage } from '../../selectors/dogs';
import { fetchImages } from '../../actions/dogs';
import Images from '../../components/dogs/Images';


const mapStateToProps = (state) => ({
  image: getDogImage(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    dispatch(fetchImages());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);

