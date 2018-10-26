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
      showAll: null,
      selectedTile: null
    };
  }

  onViewAll = id => {
    this.setState({ showAll: id });
  };

  getBadges = item => {
    const badges = [];

    if (item.certified) {
      badges.push(<CatalogTileBadge key="certified" type="fa" name="cog" title="Certified" id="certified" />);
    }

    if (item.approved) {
      badges.push(<CatalogTileBadge key="certified" type="pf" name="ok" title="USDA Approved" id="approved" />);
    }

    return badges;
  };

  toggleOpen = (item) => {
    this.setState(prevState => {
      if (prevState.selectedTile === item) {
        return {
          selectedTile: null
        };
      }
      return {
        selectedTile: item
      };
    });
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
            category.items.map((item, index) => <CatalogTile
              key={index}
              title={item.title}
              featured={item.featured}
              iconImg={item.image}
              vendor={item.vendor}
              description={item.description}
              badges={this.getBadges(item)}
              onClick={() => this.toggleOpen(item)}
            />)}
        </CatalogTileViewCategory>
      );
    }

    return null;
  };

  render() {
    const { showAll, selectedTile } = this.state;
    const { openSubscribe } = this.props;

    const activeCategory = showAll ? mockTileItems.find(category => category.id === showAll) : null;

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#" active={!activeCategory} onClick={() => this.onViewAll(null)}>
            All Categories
          </Breadcrumb.Item>

          {activeCategory && <Breadcrumb.Item active>{activeCategory.category}</Breadcrumb.Item>}
        </Breadcrumb>

        <MarketplaceToolbar onSortChanged={null} numItems={activeCategory ? activeCategory.items.length : mockTileItems.reduce((total, x) => total + x.items.length, 0) } />

        <CatalogTileView>
          {activeCategory
            ? this.renderCategory(activeCategory)
            : mockTileItems.map(category => this.renderCategory(category))}
        </CatalogTileView>
        {selectedTile &&
          <MarketplaceModelessOverlay item={selectedTile} close={() => this.toggleOpen(null)} openSubscribe={() => openSubscribe(selectedTile)}/>}
      </div>
    );
  }
};

export { MarketplaceCatalogTileView };
