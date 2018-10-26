import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTabs, VerticalTabsTab } from 'patternfly-react-extensions';

import { mockVerticalTabsMarketplace } from './mockItems';

class MarketplaceVerticalTabs extends React.Component {
  state = {
    activeTabId: 'all'
  };

  onActivateTab = id => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { restrictTabs } = this.props;
    const { activeTabId } = this.state;

    const showAll =
      activeTabId === 'all';

    const isTopLevelActive =
      showAll ||
      activeTabId === 'one' ||
      activeTabId === 'two';

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={isTopLevelActive}>

        {
          mockVerticalTabsMarketplace &&
          mockVerticalTabsMarketplace.map((tab, index) => (
            <VerticalTabsTab
              key={`vertical-tab-${tab.id}-${index}`}
              id={tab.id}
              title={tab.title}
              onActivate={() => this.onActivateTab(tab.id)}
              active={activeTabId === tab.id}
            />
          ))
        }

      </VerticalTabs>
    );
  }
}

MarketplaceVerticalTabs.propTypes = {
  restrictTabs: PropTypes.bool
};

MarketplaceVerticalTabs.defaultProps = {
  restrictTabs: false
};

export { MarketplaceVerticalTabs };
