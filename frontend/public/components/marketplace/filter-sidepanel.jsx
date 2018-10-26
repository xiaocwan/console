import React from 'react';
import PropTypes from 'prop-types';
import { FilterSidePanel } from 'patternfly-react-extensions';
import { Icon, FormControl } from 'patternfly-react';
import { navSectionFor } from 'integration-tests/views/sidenav.view';
import { mockFilterSidebarCategories } from './mockItems';

class MarketplaceFilterSidePanel extends React.Component {
  state = {
    activeFilters: {
      typeKubernetesApps: false,
      typeSourceToImage: false,
      typeContainerImages: false,
      typeOffClusterServices: false,
      upgradeAuto: false,
      upgradeManual: false,
      certifiedCertified2: false,
      certifiedCertified1: false,
      certifiedPrimed: false,
      certifiedCommunity: false,
      providerRedHat: false,
      providerCouchbase: false,
      providerCrunchyData: false,
      providerDynatrace: false,
      providerF5Networks: false,
      healthA: false,
      healthB: false,
      healthC: false,
      healthD: false,
      healthE: false,
      healthF: false
    },
    showAllCategories: {
      type: false,
      upgrade: false,
      certifiedLevel: false,
      provider: false,
      healthIndex: false
    }
  };

  onShowAllToggle = id => {
    const showAllCategories = { ...this.state.showAllCategories };
    showAllCategories[id] = !showAllCategories[id];
    this.setState({ showAllCategories });
  };

  onFilterChange = (id, value) => {
    const activeFilters = { ...this.state.activeFilters };
    activeFilters[id] = value;
    this.setState({ activeFilters });
  };

  render() {
    const { activeFilters, showAllCategories } = this.state;
    const { maxShowCount, leeway } = this.props;

    return (
      <FilterSidePanel id="filter-panel">
        <FilterSidePanel.Category>
          <FormControl type="text" placeholder="Filter by keyword..." bsClass="form-control" />
        </FilterSidePanel.Category>
        {
          mockFilterSidebarCategories &&
          mockFilterSidebarCategories.map((category, index) => (
            <FilterSidePanel.Category
              key={`filter-category-${category.type}-${index}`}
              title={category.title}
              maxShowCount={maxShowCount}
              leeway={leeway}
              showAll={showAllCategories[category.type]}
              onShowAllToggle={() => this.onShowAllToggle(category.type)}
            >
              {
                category.items &&
                category.items.map((item, index) => (
                  <FilterSidePanel.CategoryItem
                    key={`filter-item-${category.type}-${item.type}-${index}`}
                    children={item.title}
                    count={item.count}
                    checked={activeFilters[item.type]}
                    onChange={e => this.onFilterChange(item.type, e.target.checked)}
                  />
                ))
              }
            </FilterSidePanel.Category>
          ))
        }
      </FilterSidePanel>
    );
  }
}
MarketplaceFilterSidePanel.propTypes = {
  maxShowCount: PropTypes.number,
  leeway: PropTypes.number
};
MarketplaceFilterSidePanel.defaultProps = {
  maxShowCount: 5,
  leeway: 2
};

export { MarketplaceFilterSidePanel };
