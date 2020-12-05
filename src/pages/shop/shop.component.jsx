import React from 'react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';


const ShopePage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

const mapStateToProps = createStructuredSelector({

})

export default connect(mapStateToProps)(ShopePage);