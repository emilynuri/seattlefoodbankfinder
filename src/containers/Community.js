import React from 'react';
import './Community.css';
import SubNavigation from '../components/SubNavigation';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import slide1 from "../assets/imgs/img1.jpg";
import slide2 from "../assets/imgs/img2.jpg";
import slide3 from "../assets/imgs/img3.jpg";
import slide4 from "../assets/imgs/img4.jpg";
import slide5 from "../assets/imgs/img5.jpg";
import slide6 from "../assets/imgs/img6.jpg";
import slide7 from "../assets/imgs/img7.jpg";


class Community extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    this.images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];


    setTimeout(() => {
      this.setState({
        children: this.createChildren(7),

      })
    }, 100);
  }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333'}}><img src={ this.images[i]}/></div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {

    const {
      activeItemIndex,
      children,
      images,
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
                    outsideChevron={true}

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
