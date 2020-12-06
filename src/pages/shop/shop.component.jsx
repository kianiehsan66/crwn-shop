import React from 'react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import CollectionsOverviewContainer from './../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';


import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';



class ShopePage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();

    }

    render() {
        const { match, isFetched } = this.props;
        console.log(isFetched);
        return (<div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({


})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopePage);