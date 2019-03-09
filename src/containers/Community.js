import React from 'react';
import './Community.css';
import SubNavigation from '../components/SubNavigation';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import slide1 from "../assets/imgs/img1.jpg";
import slide2 from "../assets/imgs/img2.jpg";
import slide3 from "../assets/imgs/img3.jpg";


class Community extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(5),
      })
    }, 100);
  }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>i</div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {

    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
        <div>
            <SubNavigation />
            <div class="page-community">
                <div class="container pt-3">
                  <div class = "community-content">
                    <div class ="community-header">
                      <h1> Seattle Food Bank Community</h1>
                      <h6> We would love to share any pictures of donations being made or handed out! Please email us any pictures at seattlefoodbank@gmail.com. </h6>
                    </div>

                    <div class ="community-bottom">

                    <div class="slideshow-container">

                    <ItemsCarousel
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{ height: 200, background: '#900'}}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={3}
                    gutter={12}
                    showSlither={true}
                    firstAndLastGutter={true}
                    freeScrolling={false}

                    // Active item configurations
                    requestToChangeActive={this.changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    chevronWidth={24}
                    rightChevron={'>'}
                    leftChevron={'<'}
                    outsideChevron={false}
                    >
                    {children}
                    </ItemsCarousel>
                    </div>

                  </div>


                </div>
              </div>
            </div>
        </div>
    );

}
}

export default Community;
