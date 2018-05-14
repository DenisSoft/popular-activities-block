import React, {PureComponent} from 'react';
import styled from 'styled-components';

export const Root = styled.div`
  position:relative;  
  &:hover .img_category {
    filter: brightness(100%);
  }
`;
const Title = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  color: white;
  font: 500 2.2rem sans-serif;
  letter-spacing: 0.25rem;
  padding: 0 20px;
  text-align: center;
  text-shadow: 0.1em 0.1em 0.2em black;    
`;
const Caption = styled.div`
  font: 550 1.54rem sans-serif;
  letter-spacing: 0.09rem;
  color: #4b5259;
  margin-bottom: 17px;
  background: #f5f6f7;
  display: flex;
  justify-content: space-between;
`;
const Activities = styled.p`
  margin: 5px 0 5px 12px;     
`;
const Price = styled.p`
  margin: 5px 18px 5px 0;      
`;
const TitleBlock = styled.div`
`;
const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.img`
  max-width: 100%;
  height: auto;
  filter: brightness(80%);

  $:hover {
  display: none;
    filter: brightness(100%);
  }
`;

export default class Category extends PureComponent {
  constructor (props) {
    super(props);

    this.state = { sizeWidth: 1};
    this.updateWindowSizeWidth = this.updateWindowSizeWidth.bind(this);
  }
  componentDidMount() {
    this.updateWindowSizeWidth();
    window.addEventListener('resize', this.updateWindowSizeWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSizeWidth);
  }

  updateWindowSizeWidth() {
    const width = window.innerWidth;
    this.setState({ sizeWidth: width > 1200 ? 5 : width > 1080 ? 4 : width > 960 ? 3 : width > 720 ? 2 : 1});
  }

  render() {
    const {category} = this.props;

    return (
      <Root>
        <ImgBlock>
          <Picture className="img_category"
                   src={category.imgUrl +this.state.sizeWidth + '.png'}
                   alt={category.title} responsive/>
          <Title>
            {category.title}
          </Title>
        </ImgBlock>
        <Caption>
          <Activities>{category.activities + ' '}Activities</Activities>
          <Price>from ${category.price}</Price>
        </Caption>
      </Root>
    );
  }
}
