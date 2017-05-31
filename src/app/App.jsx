// import React from 'react';
import cat_1 from 'images/cat_1.png';
import gif_1 from 'images/supa_hot_fire.gif';
import cat_2 from 'images/cat_2.jpg';

const app = [
  {
    key: 0,
    id: 'card_h',
    info: {
      type: 'home',
      title: ['hello', 'world'],
      subtitle: 'I am David Duffy. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time ideation.',
      containerClasses: 'card--photos card__home-card',
      leftContentClasses: '',
      rightContentClasses: 'mosaic-container',
      fa_icon: 'fa-home',
      curtain: false,
      contentMeta: [
        {
          type: 'image',
          src: 'http://i.imgur.com/O6dzQQA.jpg',
          alt: "David Duffy's bespoke Master Chief costume from Halo 3",
          classes: 'photo photo--mc'
        },
        {
          type: 'image',
          src: 'http://i.imgur.com/FPdvZUE.jpg',
          alt: 'A silly photo of David Duffy and his wife Amy Galbraith on their wedding day',
          classes: 'photo photo--wedding'
        },
        {
          type: 'image',
          src: 'http://i.imgur.com/dyvK95C.jpg',
          alt: 'A photo of David Duffy holding a trout which was caught on a dry fly from a high alpine lake in Washington',
          classes: 'photo photo--fish'
        },
        {
          type: 'image',
          src: 'http://i.imgur.com/Wiiiora.jpg',
          alt: 'In a snow-covered chute, David Duffy makes a hard turn on a snowboard',
          classes: 'photo photo--snow'
        }
      ]
    }
  },
  {
    key: 1,
    id: 'card_1',
    info:   {
      type: 'mosaic',
      title: ['my', 'github'],
      subtitle: 'lorem ipsum sit dolor amet',
      containerClasses: 'card--mosaic card__first-card',
      leftContentClasses: '',
      rightContentClasses: '',
      fa_icon: 'fa-github',
      curtain: true,
      contentMeta: [
        {
          type: 'image',
          src: `${cat_1}`,
          alt: 'a cat image again',
          classes: ''
        }
      ]
    }
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0,
      prev: 1
    };
    this.changePage = this.changePage.bind(this);
  };


  changePage(id) {
    this.setState((prevState, props) => {
      return {
        curr: id,
        prev: prevState.curr
      }
    });
  }

  
  render () {
    const info = app;
    return (
      <div className="card-container">
        {info.map((current, index) => {
          return (
            <Card
              id={current.id}
              cardStatus={this.state}
              cardInfo={current.info}
              index={current.key}
              key={current.key} />
            );
          })
        }
        <TopControls />
        <div className='controls controls--bottom'>
          {app.map((current, index) => {
            return (
              <BottomButton
                fa_icon={current.info.fa_icon}
                pageChangeHandler={this.changePage}
                index={current.key}
                key={index} />
              );
            })
          }
        </div>
      </div>
    )
  }
}

const Card = (props) => {
  const cardInfo = props.cardInfo;
  const currentClass = props.cardStatus.curr === props.index ? 'card--active' : '';
  const previousClass = props.cardStatus.prev === props.index ? 'card--previous' : '';
  return (
    <div className={`card ${cardInfo.containerClasses} ${currentClass} ${previousClass}`} >
      <div className={cardInfo.leftContentClasses ? `${cardInfo.leftContentClasses} card__content-left` : 'card__content-left'}>
        <h2>{cardInfo.title[0]}<strong>{cardInfo.title[1]}</strong></h2>
        <p>{cardInfo.subtitle}</p>
      </div>
      <div className={cardInfo.rightContentClasses ? `${cardInfo.rightContentClasses} card__content-right` : 'card__content-right'}>
        <div className="card__content-right-wrapper">
          {
            cardInfo.contentMeta.map((current, index) => {
            return (
              <Feature
                type={current.type}
                src={current.src}
                alt={current.alt}
                classes={current.classes}
                key={index} />
              );
            })
          }
        </div>
      </div>
      <div className="card__bg"></div>
      { 
        cardInfo.curtain &&
        <div className="curtain"></div>
      }
    </div>
  )
}

const Feature = (props) => {
  return (
    <div className={props.classes} >
      {
        props.type === 'image' &&
        <img src={props.src} alt={props.alt} />
      }
    </div>
  )
}

const TopControls = () => {
  return (
    <div className='controls controls--top'>
      <a className='controls__link controls__link--top controls__link--active' data-index='card_h' href='javascript:void(0)' id='home_card_trigger'>
        <svg height='30' viewBox='0 0 30 30' width='40' xmlns='http://www.w3.org/2000/svg'>
          <polyline fill='none' points='15 5 5 15 15 25' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
          <polyline fill='none' points='5 15 35 15' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
        </svg>
      </a>
      <a className='controls__link controls__link--top' href='javascript:void(0)' id='close_trigger'>
        <svg height='30' viewBox='0 0 30 30' width='30' xmlns='http://www.w3.org/2000/svg'>
          <polyline fill='none' points='5 5 25 25' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
          <polyline fill='none' points='5 25 25 5' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
        </svg>
      </a>
    </div>
  )
}
const BottomButton = (props) => {
  return (
      <a className='controls__link controls__link--bottom' href='javascript:void(0)' onClick={ function(){props.pageChangeHandler(props.index)} }>
        <i aria-hidden='true' className={`fa ${props.fa_icon}`}></i>
      </a>
  )
}

export default App;