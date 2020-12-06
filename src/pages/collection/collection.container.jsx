
import { createStructuredSelector } from 'reselect';
import { selectIsFetched } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isFetched: selectIsFetched
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
