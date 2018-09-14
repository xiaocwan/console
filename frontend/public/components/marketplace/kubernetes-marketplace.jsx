import React from 'react';
import PropTypes from 'prop-types';
import { FilterSidePanel } from 'patternfly-react-extensions';
import { Icon, FormControl } from 'patternfly-react';

class MockFilterSidePanelExample extends React.Component {
  state = {
    activeFilters: {
      typeKubernetesApps: false,
      typeSourceToImage: false,
      typeContainerImages: false,
      typeOffClusterServices: false,
      upgradeAuto: false,
      upgradeManual: false,
      certifiedCertified2: false,
      certifiedCertified1: false,
      certifiedPrimed: false,
      certifiedCommunity: false,
      providerRedHat: false,
      providerCouchbase: false,
      providerCrunchyData: false,
      providerDynatrace: false,
      providerF5Networks: false,
      healthA: false,
      healthB: false,
      healthC: false,
      healthD: false,
      healthE: false,
      healthF: false
    },
    showAllCategories: {
      type: false,
      upgrade: false,
      certifiedLevel: false,
      provider: false,
      healthIndex: false
    }
  };

  onShowAllToggle = id => {
    const showAllCategories = { ...this.state.showAllCategories };
    showAllCategories[id] = !showAllCategories[id];
    this.setState({ showAllCategories });
  };

  onFilterChange = (id, value) => {
    const activeFilters = { ...this.state.activeFilters };
    activeFilters[id] = value;
    this.setState({ activeFilters });
  };

  render() {
    const { activeFilters, showAllCategories } = this.state;
    const { maxShowCount, leeway } = this.props;

    return (
      <FilterSidePanel id="filter-panel">
        <FilterSidePanel.Category
          title="Type"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.type}
          onShowAllToggle={() => this.onShowAllToggle('type')}
        >
          <FilterSidePanel.CategoryItem
            count={23}
            checked={activeFilters.typeKubernetesApps}
            onChange={e => this.onFilterChange('typeKubernetesApps', e.target.checked)}
          >
            Kubernetes Apps 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={11}
            checked={activeFilters.typeSourceToImage}
            onChange={e => this.onFilterChange('typeSourceToImage', e.target.checked)}
          >
            Source-to-Image 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.typeContainerImages}
            onChange={e => this.onFilterChange('typeContainerImages', e.target.checked)}
          >
            Container Images 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.typeOffClusterServices}
            onChange={e => this.onFilterChange('typeOffClusterServices', e.target.checked)}
          >
            Off-Cluster Services 
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Upgrade"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.upgrade}
          onShowAllToggle={() => this.onShowAllToggle('upgrade')}
        >
          <FilterSidePanel.CategoryItem
            count={6}
            checked={activeFilters.upgradeAuto}
            onChange={e => this.onFilterChange('upgradeAuto', e.target.checked)}
          >
            Auto 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.upgradeManual}
            onChange={e => this.onFilterChange('upgradeManual', e.target.checked)}
          >
            Manual 
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Certified Level"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.certifiedLevel}
          onShowAllToggle={() => this.onShowAllToggle('certifiedLevel')}
        >
          <FilterSidePanel.CategoryItem
            checked={activeFilters.ceritfiedCertified2}
            onChange={e => this.onFilterChange('certifiedCertified2', e.target.checked)}
          >
            Certified II 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            checked={activeFilters.ceritfiedCertified1}
            onChange={e => this.onFilterChange('certifiedCertified1', e.target.checked)}
          >
            Certified I 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            checked={activeFilters.certifiedPrimed}
            onChange={e => this.onFilterChange('certifiedPrimed', e.target.checked)}
          >
            Certified Primed 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            checked={activeFilters.certifiedCommunity}
            onChange={e => this.onFilterChange('certifiedCommunity', e.target.checked)}
          >
            Certified Community 
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Provider"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.mileage}
          onShowAllToggle={() => this.onShowAllToggle('provider')}
        >
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.providerRedHat}
            onChange={e => this.onFilterChange('providerRedHat', e.target.checked)}
          >
            Red Hat, Inc 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={7}
            checked={activeFilters.providerCouchbase}
            onChange={e => this.onFilterChange('providerCouchbase', e.target.checked)}
          >
            Couchbase 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={9}
            checked={activeFilters.providerCrunchyData}
            onChange={e => this.onFilterChange('providerCrunchyData', e.target.checked)}
          >
            Crunchy Data 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={12}
            checked={activeFilters.providerDynatrace}
            onChange={e => this.onFilterChange('providerDynatrace', e.target.checked)}
          >
            Dynatrace 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={8}
            checked={activeFilters.providerF5Networks}
            onChange={e => this.onFilterChange('providerF5Networks', e.target.checked)}
          >
            F5 Networks 
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
        <FilterSidePanel.Category
          title="Health Index"
          maxShowCount={maxShowCount}
          leeway={leeway}
          showAll={showAllCategories.healthIndex}
          onShowAllToggle={() => this.onShowAllToggle('healthIndex')}
        >
          <FilterSidePanel.CategoryItem
            count={2}
            checked={activeFilters.healthA}
            onChange={e => this.onFilterChange('healthA', e.target.checked)}
          >
            A 
          </FilterSidePanel.CategoryItem>
          
          <FilterSidePanel.CategoryItem
            count={12}
            checked={activeFilters.healthB}
            onChange={e => this.onFilterChange('healthB', e.target.checked)}
          >
            B 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={8}
            checked={activeFilters.healthC}
            onChange={e => this.onFilterChange('healthC', e.target.checked)}
          >
          C 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={5}
            checked={activeFilters.healthD}
            onChange={e => this.onFilterChange('healthD', e.target.checked)}
          >
            D 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.healthE}
            onChange={e => this.onFilterChange('healthE', e.target.checked)}
          >
            E 
          </FilterSidePanel.CategoryItem>
          <FilterSidePanel.CategoryItem
            count={3}
            checked={activeFilters.healthF}
            onChange={e => this.onFilterChange('healthF', e.target.checked)}
          >
            F 
          </FilterSidePanel.CategoryItem>
        </FilterSidePanel.Category>
      </FilterSidePanel>
    );
  }
}
MockFilterSidePanelExample.propTypes = {
  maxShowCount: PropTypes.number,
  leeway: PropTypes.number
};
MockFilterSidePanelExample.defaultProps = {
  maxShowCount: 5,
  leeway: 2
};

export class KubernetesMarketplace extends React.Component {
    render() {
        return (
          <div style={{ margin: '15px', width: '195px', border: 'none' }}>
            <MockFilterSidePanelExample maxShowCount='5' leeway='2' />
          </div>
        )    
    }
};