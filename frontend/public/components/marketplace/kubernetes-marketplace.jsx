import React from 'react';
import { Helmet } from 'react-helmet';

import { MarketplaceFilterSidePanel } from './filter-sidepanel';
import { MarketplaceCatalogTileView } from './catalog-tiles';
import { MarketplaceVerticalTabs } from './vertical-tabs';
import { NavTitle } from '../utils';
import { KubernetesMarketplaceModel } from '../../models';
import { referenceForModel } from '../../module/k8s';
import { TextFilter } from '../factory';

export class KubernetesMarketplace extends React.Component {
    render() {
        return (
          <React.Fragment>
            <Helmet>
              <title>Kubernetes Marketplace</title>
            </Helmet>

            <div className="co-marketplace-header">
              <div className="co-marketplace-header--navtitle">
                <NavTitle title="Kubernetes Markteplace"/>
              </div>
              <div className="co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter co-marketplace-header--search">
                <TextFilter label="Kubernetes Markteplace by name" />
              </div>
            </div>
            
            <div className="co-marketplace-sidepanel">
              <MarketplaceVerticalTabs/>
              <div className="co-marketplace-sidepanel--separator">
                <br/>
              </div>
              <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
            </div>

            <div className="co-marketplace-tileview">
              <MarketplaceCatalogTileView/>
            </div>
          </React.Fragment>
        )
    }
};
