import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Clearfix } from 'react-bootstrap';

import Category from 'components/Category';

const Root = styled.section`
  padding-right: 19px;
  padding-left: 19px;
  margin-right: auto;
  margin-left: auto;
  color: #4b5259;
  a {
    text-decoration: none;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0 9px 0;  
`;
const List = styled.div`
  margin-right: -8px;
  margin-left: -8px;
  .block_category {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;        
`;
const Title = styled.h3`
  font: 600 2.1rem sans-serif;
  text-transform: uppercase;
`;
const AllCategory = styled.a`
  margin: 17px 24px 0 0;
  color: #4b5259;
  font-size: 2.1rem;  
`;

export default class PopularActivitiesList extends PureComponent {
  render() {
    const { categories } = this.props;

    return (
      <Root>
        <Heading>
          <TitleBlock>
            <Title>popular</Title>
            <Clearfix visibleMdBlock visibleLgBlock visibleSmBlock>
              <Title> &nbsp; activities</Title>
            </Clearfix>
          </TitleBlock>
          <AllCategory href="/categories">
            See all
          </AllCategory>
        </Heading>
        <List>
          {
            categories.map((category, index) => {
              return (
                <Col xs={4} sm={3} xsHidden={index > 5} className="block_category" key={category.id}>
                  <Link to={`/category/${category.id}`}>
                    <Category category={category}/>
                  </Link>
                </Col>
              );
            })
          }
        </List>
      </Root>
    );
  }
}
