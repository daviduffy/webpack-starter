// import React from 'react';
import cat_1 from 'images/cat_1.png';
import gif_1 from 'images/supa_hot_fire.gif';
import cat_2 from 'images/cat_2.jpg';

const app = [
  {
    type: 'home',
    title: ['hello', 'world'],
    subtitle: 'I am David Duffy. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time ideation.',
    containerClasses: 'card card--photos card__home-card card--active',
    leftContentClasses: '',
    rightContentClasses: 'mosaic-container',
    id: 'card_h',
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
  },
  {
    type: 'mosaic',
    title: ['my', 'github'],
    subtitle: 'lorem ipsum sit dolor amet',
    containerClasses: 'card card--mosaic card__first-card',
    leftContentClasses: '',
    rightContentClasses: '',
    id: 'card_1',
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
]


const App = () => {

  const changePage = () => {
    console.log(this);

    if ( this.classList.contains('controls__link--active') ) {
      console.log('break');
      return;
    }
    console.log('change');
    let cardPrev = document.getElementsByClassName('card--previous');
    console.log(`click ${this}`);
    
    let cardCurr = document.querySelector('.card--active');
    let buttonCurr = document.getElementsByClassName('controls__link--active')[0];
    
    if ( !!cardPrev ) {
      cardPrev[0].classList.remove('card--previous');
    }
    
    cardCurr.classList.add('card--previous');
    cardCurr.classList.remove('card--active');
    buttonCurr.classList.remove('controls__link--active');
    
    let cardNextIndex = this.getAttribute('data-index');
    let cardNext = document.getElementById(cardNextIndex);
    cardNext.classList.add('card--active');
    this.classList.add('controls__link--active');
  }

  return (
    <div className="card-container">
      {app.map((current, index) => {
        return (
          <Page
            type={current.type}
            title={current.title}
            subtitle={current.subtitle}
            containerClasses={current.containerClasses}
            rightContentClasses={current.rightContentClasses}
            leftContentClasses={current.leftContentClases}
            id={current.id}
            contentMeta={current.contentMeta}
            curtain={current.curtain}
            key={index}  />
          );
        })
      }
      <TopControls />
      <div className='controls controls--bottom'>
        {app.map((current, index) => {
          return (
            <BottomButton
              id={current.id}
              fa_icon={current.fa_icon}
              pageChangeHandler={changePage}
              key={index} />
            );
          })
        }
      </div>
    </div>
  )
}

const Page = (props) => {
  return (
    <div className={props.containerClasses} >
      <div className={props.leftContentClasses ? `${props.leftContentClasses} card__content-left` : 'nope card__content-left'}>
        <h2>{props.title[0]}<strong>{props.title[1]}</strong></h2>
        <p>{props.subtitle}</p>
      </div>
      <div className={props.rightContentClasses ? `${props.rightContentClasses} card__content-right` : 'nope card__content-right'}>
        <div className="card__content-right-wrapper">
          {
            props.contentMeta.map((current, index) => {
            return (
              <Card
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
        props.curtain &&
        <div className="curtain"></div>
      }
    </div>
  )
}

const Card = (props) => {
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
      <a className='controls__link controls__link--bottom' data-index={props.id} href='javascript:void(0)' id={`${props.id}_trigger`} onClick={props.pageChangeHandler}>
        <i aria-hidden='true' className={`fa ${props.fa_icon}`}></i>
      </a>
  )
}

export default App;