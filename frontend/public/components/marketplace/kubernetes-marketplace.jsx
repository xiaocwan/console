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
            <NavTitle
              title="Kubernetes Markteplace"
              detail={true}
              >
              <div className="co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter">
                <TextFilter label="Kubernetes Markteplace by name" />
              </div>
            </NavTitle>

            <div>
              <div style={{ margin: '15px', width: '15%', border: 'none', float: 'left' }}>
                <MarketplaceVerticalTabs/>
                <br/>
                <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
              </div>

              <div style={{ width: '80%', float: 'left' }}>

                <div style={{ display: 'flex' }}>
                  <MarketplaceCatalogTileView/>
                </div>
              </div>
            </div>
        </React.Fragment>
        )
    }
};
