import * as React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'patternfly-react';
import { CatalogTile, CatalogTileBadge, CatalogItemHeader, PropertiesSidePanel, PropertyItem } from 'patternfly-react-extensions';

import { AdminSubscribe } from './admin-subscribe';
import { mockPropertyItems } from './mockItems';

class MarketplaceModelessOverlay extends React.Component {

  /*
  openSubscribe = () => {
    this.setState({
      showSubscribe: true
    })
  };
  */

  closeSubscribe = subscription => {
    if (subscription) {
      // TODO: Do something with subscription form
    }
    this.props.close();
  };

  toggleOpen = () => {
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  };

  render() {
    const { size, item, showSubscribe, close, openSubscribe } = this.props;

    return (
      <React.Fragment>

        <Modal show={true} className='right-side-modal-pf' bsSize={'lg'}>
          <Modal.Header>
            <Modal.CloseButton onClick={close} />
          </Modal.Header>
          {/*showSubscribe &&
            <React.Fragment>
              <Modal.Body>
                <AdminSubscribe item={item} close={this.closeSubscribe} />
              </Modal.Body>
            </React.Fragment>
          */}

            <Modal.Body>
              <CatalogItemHeader
                className="long-description-test"
                iconImg={item.image}
                title={item.title}
                vendor={<span> {item.vendor}</span>}
              />
              <div className="co-marketplace-modal">
                <div className="co-marketplace-modal--item co-marketplace-modal--properties__border">
                  <Button bsStyle="primary" style={{ width : '100%' }} onClick={openSubscribe}>
                    Subscribe
                  </Button>
                  <br/>
                  <br></br>
                  <PropertiesSidePanel>
                    {mockPropertyItems.map((item, index) => <PropertyItem key={index} label={item.label} value={item.value} />)}
                  </PropertiesSidePanel>
                </div>
                <div className="co-marketplace-modal--item co-marketplace-modal--description">
                  {item.description}
                </div>
              </div>
            </Modal.Body>

        </Modal>
      </React.Fragment>
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
