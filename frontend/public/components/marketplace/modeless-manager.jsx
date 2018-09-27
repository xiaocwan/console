import * as React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'patternfly-react';
import { CatalogTile, CatalogTileBadge, CatalogItemHeader, PropertiesSidePanel, PropertyItem } from 'patternfly-react-extensions';

import { AdminSubscribe } from './admin-subscribe';
import { mockPropertyItems } from './mockItems';

class MarketplaceModelessOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      showSubscribe: false
    };
  }

  close = () => {
    this.setState({
      showOverlay: false,
      showSubscribe: false
    });
  };

  openSubscribe = () => {
    this.setState({
      showSubscribe: true
    })
  };

  closeSubscribe = subscription => {
    if (subscription) {
      // TODO: Do something with subscription form
    }
    this.close();
  };

  toggleOpen = () => {
    this.setState({
      showOverlay: !this.state.showOverlay
    });
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

  render() {
    const { size, item } = this.props;
    const { showSubscribe } = this.state;

    return (
      <div>
        <CatalogTile
          title={item.title}
          featured={item.featured}
          iconImg={item.image}
          vendor={item.vendor}
          description={item.description}
          badges={this.getBadges(item)}
          onClick={this.toggleOpen}
        />
        <Modal show={this.state.showOverlay} className='right-side-modal-pf' bsSize={'lg'}>
          <Modal.Header>
            <Modal.CloseButton onClick={this.close} />
          </Modal.Header>
          { showSubscribe &&
            <React.Fragment>
              <Modal.Body>
                <AdminSubscribe item={item} close={this.closeSubscribe}/>
              </Modal.Body>
            </React.Fragment>
          }
          { !showSubscribe &&
            <React.Fragment>
              <Modal.Body>
                <CatalogItemHeader
                  className="long-description-test"
                  iconImg={item.image}
                  title={item.title}
                  vendor={<span> {item.vendor}</span>}
                />
                <div className="co-marketplace-modal">
                  <div className="co-marketplace-modal--item co-marketplace-modal--properties__border">
                    <PropertiesSidePanel>
                      { mockPropertyItems.map( (item, index) => <PropertyItem key={index} label={item.label} value={item.value} />)}
                    </PropertiesSidePanel>
                  </div>
                  <div className="co-marketplace-modal--item co-marketplace-modal--description">
                    {item.description}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
                  Cancel
                </Button>
                <Button bsStyle="primary" onClick={this.openSubscribe}>
                  Save
                </Button>
              </Modal.Footer>
            </React.Fragment>
          }
        </Modal>
      </div>
    );
  }
}

MarketplaceModelessOverlay.propTypes = {
  size: PropTypes.string
};

MarketplaceModelessOverlay.defaultProps = {
  size: 'default'
};

export { MarketplaceModelessOverlay };
