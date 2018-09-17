import React from 'react';
import { MarketplaceFilterSidePanel } from './filter-sidepanel';
import { MarketplaceCatalogTileView } from './catalog-tiles';

export class KubernetesMarketplace extends React.Component {
    render() {
        return (
          <div>
            <div style={{ margin: '15px', width: '15%', border: 'none', float: 'left' }}>
              <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
            </div>
            
            <div style={{ display: 'flex', width: '80%', float: 'left' }}>
              < MarketplaceCatalogTileView />
            </div>
          </div>
        )
    }
};