import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTabs, VerticalTabsTab } from 'patternfly-react-extensions';

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

        <VerticalTabsTab id="all" title="All Categories" onActivate={() => this.onActivateTab('all')} active={showAll} shown />
        <VerticalTabsTab id="lng" title="Languages" onActivate={() => this.onActivateTab('lng')} active={activeTabId === 'lng'} />
        <VerticalTabsTab id="dbs" title="Databases" onActivate={() => this.onActivateTab('dbs')} active={activeTabId === 'dbs'}  />
        <VerticalTabsTab id="mid" title="Middleware" onActivate={() => this.onActivateTab('mid')} active={activeTabId === 'mid'}  />
        <VerticalTabsTab id="cid" title="CI/CD" onActivate={() => this.onActivateTab('cid')} active={activeTabId === 'cid'} />
        <VerticalTabsTab id="oth" title="Other" onActivate={() => this.onActivateTab('oth')} active={activeTabId === 'oth'} />

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