import React from 'react';
import PropTypes from 'prop-types';

import {
  Sort,
  Toolbar
} from 'patternfly-react';

import { mockSortFields, mockFilterExampleFields } from './mockItems';

const noop = Function.prototype;

export class MarketplaceToolbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list',
    };
  }

  setViewType(viewType) {
    const { onViewChanged } = this.props;
    this.setState({ currentViewType: viewType });
    onViewChanged && onViewChanged(viewType);
  }

  clearFilters = () => {
    const { onFiltersChanged } = this.props;
    this.setState({ activeFilters: [] });
    onFiltersChanged && onFiltersChanged('Filters cleared.');
  };

  toggleCurrentSortDirection = () => {
    const { isSortAscending } = this.state;
    const { onSortChanged } = this.props;

    this.setState({ isSortAscending: !isSortAscending });
    onSortChanged && onSortChanged(`sort ascending: ${!isSortAscending}`);
  };

  updateCurrentSortType = sortType => {
    const { currentSortType } = this.state;
    const { onSortChanged } = this.props;

    if (currentSortType !== sortType) {
      this.setState({
        currentSortType: sortType,
        isSortNumeric: sortType.isNumeric,
        isSortAscending: true
      });
    }
    onSortChanged && onSortChanged(`sort type: ${sortType.title}`);
  };

  render() {
    const {
      currentFilterType,
      activeFilters,
      currentSortType,
      isSortNumeric,
      isSortAscending,
      currentViewType
    } = this.state;

    const { numItems } = this.props
    
    return (
      <Toolbar>
        <Toolbar.Results>
            <h5>{ numItems > 0 ? `${numItems} Results` : `no results` }</h5>
        </Toolbar.Results>

        <Toolbar.RightContent style={{borderLeft:"1px solid rgb(209, 209, 209)"}}>
          <Sort>
              {'Sort by '}
            <Sort.TypeSelector
                sortTypes={mockSortFields}
                currentSortType={currentSortType}
                onSortTypeSelected={this.updateCurrentSortType}
            />

            <Sort.DirectionSelector
                isNumeric={isSortNumeric}
                isAscending={isSortAscending}
                onClick={() => this.toggleCurrentSortDirection()}
            />
          </Sort>
        </Toolbar.RightContent>
      </Toolbar>
    );
  }
}

MarketplaceToolbar.propTypes = {
  onFiltersChanged: PropTypes.func,
  onSortChanged: PropTypes.func,
  onViewChanged: PropTypes.func,
  onActionPerformed: PropTypes.func,
  onFindAction: PropTypes.func
};

MarketplaceToolbar.defaultProps = {
    onFiltersChanged: noop,
    onSortChanged: noop,
    onViewChanged: noop,
    onActionPerformed: noop,
    onFindAction: noop
  };
