import React from 'react';
import { MarketplaceFilterSidePanel } from './filter-sidepanel';
import { MarketplaceCatalogTileView } from './catalog-tiles';
import { MarketplaceToolbar } from './toolbar';

export class KubernetesMarketplace extends React.Component {
    render() {
        return (
          <div>
            <div style={{ margin: '15px', width: '15%', border: 'none', float: 'left' }}>
              <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
            </div>

            <div style={{ width: '80%', float: 'left' }}>
              <div>
                <MarketplaceToolbar/>
              </div>
            
              <div style={{ display: 'flex' }}>
                < MarketplaceCatalogTileView/>
              </div>
            </div>
          </div>
        )
    }
};