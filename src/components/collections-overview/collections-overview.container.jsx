
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from './../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';
import { connect } from 'react-redux';
import WithSpinner from './../with-spinner/with-spinner.component';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)
    (CollectionsOverview);

export default CollectionsOverviewContainer;