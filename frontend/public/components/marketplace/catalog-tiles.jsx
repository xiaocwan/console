import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, ModelessOverlay, Button, Modal } from 'patternfly-react';
import { CatalogTile, CatalogTileBadge, CatalogTileView, CatalogTileViewCategory } from 'patternfly-react-extensions';

import { mockTileItems } from './mockItems';
import { MarketplaceToolbar } from './toolbar';
import { MarketplaceModelessOverlay } from './modeless-manager';
import { interpolateMagma } from 'd3';

class MarketplaceCatalogTileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: null
    };
  }

  onViewAll = id => {
    this.setState({ showAll: id });
  };

  renderCategory = category => {
    const { showAll } = this.state;

    if (!showAll || category.id === showAll) {
      return (
        <CatalogTileViewCategory
          key={category.id}
          title={category.category}
          totalItems={category.items && category.items.length}
          viewAll={showAll === category.id}
          onViewAll={() => this.onViewAll(category.id)}
        >
          {category.items &&
            category.items.map((item, index) => <MarketplaceModelessOverlay key={index} item={item} index={index}/>)}
        </CatalogTileViewCategory>
      );
    }

    return null;
  };

  render() {
    const { showAll } = this.state;

    const activeCategory = showAll ? mockItems.find(category => category.id === showAll) : null;

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#" active={!activeCategory} onClick={() => this.onViewAll(null)}>
            All Categories
          </Breadcrumb.Item>

          {activeCategory && <Breadcrumb.Item active>{activeCategory.category}</Breadcrumb.Item>}
        </Breadcrumb>

        <MarketplaceToolbar onSortChanged={null} />

        <CatalogTileView>
          {activeCategory
            ? this.renderCategory(activeCategory)
            : mockTileItems.map(category => this.renderCategory(category))}
        </CatalogTileView>
      </div>
    );
  }
};

export { MarketplaceCatalogTileView };
