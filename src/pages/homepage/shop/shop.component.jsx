import React, { Component } from 'react';
import CollectionPreview from '../../../components/preview-collection/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopePage extends Component {
    state = { collections: SHOP_DATA }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />
                    )
                }
            </div>
        );
    }
}

export default ShopePage;