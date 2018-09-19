import React from 'react';
import { MarketplaceFilterSidePanel } from './filter-sidepanel';
import { MarketplaceCatalogTileView } from './catalog-tiles';
import { MarketplaceVerticalTabs } from './vertical-tabs';

export class KubernetesMarketplace extends React.Component {
    render() {
        return (
          <div>
            <div style={{ margin: '15px', width: '15%', border: 'none', float: 'left' }}>
              <MarketplaceVerticalTabs/>
              <br/>
              <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
            </div>

            <div style={{ width: '80%', float: 'left' }}>
            
              <div style={{ display: 'flex' }}>
                < MarketplaceCatalogTileView/>
              </div>
            </div>
          </div>
        )
    }
};