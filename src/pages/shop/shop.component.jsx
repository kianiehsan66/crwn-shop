import React from 'react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import CollectionsOverviewContainer from './../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';


import { fetchCollectionsStart } from '../../redux/shop/shop.actions';



class ShopePage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

    }

    render() {
        const { match, isFetched } = this.props;

        return (<div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({


})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopePage);