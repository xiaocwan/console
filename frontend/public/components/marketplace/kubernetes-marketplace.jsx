import React from 'react';
import { Helmet } from 'react-helmet';

import { MarketplaceFilterSidePanel } from './filter-sidepanel';
import { MarketplaceCatalogTileView } from './catalog-tiles';
import { MarketplaceVerticalTabs } from './vertical-tabs';
import { NavTitle } from '../utils';
import { KubernetesMarketplaceModel } from '../../models';
import { referenceForModel } from '../../module/k8s';
import { TextFilter } from '../factory';
import { AdminSubscribe } from './admin-subscribe';

export class KubernetesMarketplace extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showSubscribe: false,
        item: null};
    }

    openSubscribe = (item) => {
      this.setState({showSubscribe: true, item: item});
    }

    closeSubscribe = () => {
      this.setState({showSubscribe: false, item: null});
    }

    render() {
        const { showSubscribe, item } = this.state;

        return (
          <React.Fragment>
            { !showSubscribe &&
              <React.Fragment>
                <Helmet>
                  <title>Kubernetes Marketplace</title>
                </Helmet>
                <NavTitle title="Kubernetes Markteplace"/>

                <div className="co-marketplace-sidepanel">
                  <MarketplaceVerticalTabs/>
                  <div className="co-marketplace-sidepanel--separator">
                    <br/>
                  </div>
                  <MarketplaceFilterSidePanel maxShowCount={5} leeway={2} />
                </div>

                <div className="co-marketplace-tileview">
                  <MarketplaceCatalogTileView openSubscribe={this.openSubscribe}/>
                </div>
              </React.Fragment>
            }
            { showSubscribe &&
            <AdminSubscribe item={item} close={this.closeSubscribe} />}
          </React.Fragment>
        )
    }
};
