// import React from 'react';
import master_chief   from 'images/master_chief.jpg';
import fish           from 'images/fish.jpg';
import surf_earth     from 'images/surf_earth.jpg';
import wedding        from 'images/wedding.jpg';
import webpack        from 'images/webpack.gif';
import gulp           from 'images/gulp.png';

const app = [
  {
    key: 0,
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
          src: `${master_chief}`,
          alt: "David Duffy's bespoke Master Chief costume from Halo 3",
          classes: 'photo photo--mc'
        },
        {
          type: 'image',
          src: `${wedding}`,
          alt: 'A silly photo of David Duffy and his wife Amy Galbraith on their wedding day',
          classes: 'photo photo--wedding'
        },
        {
          type: 'image',
          src: `${fish}`,
          alt: 'A photo of David Duffy holding a trout which was caught on a dry fly from a high alpine lake in Washington',
          classes: 'photo photo--fish'
        },
        {
          type: 'image',
          src: `${surf_earth}`,
          alt: 'In a snow-covered chute, David Duffy makes a hard turn on a snowboard',
          classes: 'photo photo--snow'
        }
      ]
    }
  },
  {
    key: 1,
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
          src: `${webpack}`,
          alt: 'a cat image again',
          classes: false
        },
        {
          type: 'image',
          src: `${gulp}`,
          alt: 'gulp logo',
          classes: false
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
    this.changeCard = this.changeCard.bind(this);
  };


  changeCard(id) {
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
              cardStatus={this.state}
              cardInfo={current.info}
              index={current.key}
              key={current.key} />
            );
          })
        }
        <TopControls
          cardChangeHandler={this.changeCard}
          current={this.state.curr} />
        <div className='controls controls--bottom'>
          {app.map((current, index) => {
            return (
              <BottomButton
                fa_icon={current.info.fa_icon}
                cardChangeHandler={this.changeCard}
                current={this.state.curr}
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
    <div className={props.classes && `${props.classes}`} >
      {
        props.type === 'image' &&
        <img src={props.src} alt={props.alt} />
      }
    </div>
  )
}

const TopControls = (props) => {
  const activeClass = props.current === 0 ? 'controls__link--active' : '';
  return (
    <div className='controls controls--top'>
      <a className={`controls__link controls__link--top ${activeClass}`} onClick={ function(){props.cardChangeHandler(0)}} href='javascript:void(0)'>
        <svg height='30' viewBox='0 0 30 30' width='30' xmlns='http://www.w3.org/2000/svg'>
          <polyline fill='none' points='15 5 5 15 15 25' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
          <polyline fill='none' points='5 15 35 15' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
        </svg>
      </a>
      <a className='controls__link controls__link--top' href='javascript:void(0)'>
        <svg height='30' viewBox='0 0 30 30' width='30' xmlns='http://www.w3.org/2000/svg'>
          <polyline fill='none' points='5 5 25 25' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
          <polyline fill='none' points='5 25 25 5' strokeLinecap='butt' strokeLinejoin='miter' strokeWidth='3' stroke='white'></polyline>
        </svg>
      </a>
    </div>
  )
}
const BottomButton = (props) => {
  const activeClass = props.current === props.index ? 'controls__link--active' : '';
  const hiddenClass = props.index === 0 ? 'controls__link--hidden' : '';
  return (
      <a className={`controls__link controls__link--bottom ${activeClass} ${hiddenClass}`} href='javascript:void(0)' onClick={ function(){props.cardChangeHandler(props.index)} }>
        <i aria-hidden='true' className={`fa ${props.fa_icon}`}></i>
      </a>
  )
}

export default App;