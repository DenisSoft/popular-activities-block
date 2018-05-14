import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import PopularActivities from 'components/PopularActivities';

export const Root = styled.div`
`;

export default class Content extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          id: '1',
          title: 'Deep Sea Fishing',
          imgUrl: './images/categories/1_',
          price: '37',
          activities: '19'
        },
        {
          id: '2',
          title: 'Snorkeling Tours',
          imgUrl: './images/categories/2_',
          price: '31',
          activities: '15'
        },
        {
          id: '3',
          title: 'Beach Photography',
          imgUrl: './images/categories/3_',
          price: '22',
          activities: '16'
        },
        {
          id: '4',
          title: 'Pontoon Boat Rentals',
          imgUrl: './images/categories/4_',
          price: '37',
          activities: '19'
        },
        {
          id: '5',
          title: 'Kayak Rentals',
          imgUrl: './images/categories/5_',
          price: '31',
          activities: '15'
        },
        {
          id: '6',
          title: 'Sailing Charters',
          imgUrl: './images/categories/6_',
          price: '22',
          activities: '16'
        },
        {
          id: '7',
          title: 'Kiteboarding',
          imgUrl: './images/categories/7_',
          price: '31',
          activities: '18'
        },
        {
          id: '8',
          title: 'Cruise Ship',
          imgUrl: './images/categories/8_',
          price: '22',
          activities: '11'
        },
      ],
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <Root>
        <Route path="/" render={() => {
          return (
            <PopularActivities categories={categories} />
          );
        }} />
      </Root>
    );
  }
}
