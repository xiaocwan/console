import React from 'react';
import { Breadcrumb } from 'patternfly-react';
import { mockItems } from './mockItems';

import { CatalogTile, CatalogTileBadge, CatalogTileView, CatalogTileViewCategory } from 'patternfly-react-extensions';

import { MarketplaceToolbar } from './toolbar';

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
            category.items.map((item, index) => (
              <CatalogTile
                key={`tile-${index}`}
                title={item.title}
                featured={item.featured}
                iconImg={item.image}
                vendor={item.vendor}
                description={item.description}
                badges={this.getBadges(item)}
              />
            ))}
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

        <MarketplaceToolbar onSortChanged={null}/>

        <CatalogTileView>
          {activeCategory
            ? this.renderCategory(activeCategory)
            : mockItems.map(category => this.renderCategory(category))}
        </CatalogTileView>
      </div>
    );
  }
}

export { MarketplaceCatalogTileView };
