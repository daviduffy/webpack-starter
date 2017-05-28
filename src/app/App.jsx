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
    contentMeta: [
      {
        type: 'image',
        src: {cat_1},
        alt: 'a cat image again',
        classes: ''
      }
    ]
  }
]


const App = () => {
  return (
    <div className="card-container">
      {app.map((current) => {
        return (
          <Page
            type={current.type}
            title={current.title}
            subtitle={current.subtitle}
            containerClasses={current.containerClasses}
            rightContentClasses={current.rightContentClasses}
            leftContentClasses={current.leftContentClases}
            id={current.id}
            contentMeta={current.contentMeta} />
          );}
        )}
    </div>
  )
}

const Page = (props) => {
  const type = props.type;
  return (
    <div className={props.containerClasses}>
      <div className={props.leftContentClasses ? `${props.leftContentClasses} card__content-left` : 'nope card__content-left'}>
        <h2>{props.title[0]}<strong>{props.title[1]}</strong></h2>
        <p>{props.subtitle}</p>
      </div>
      <div className={props.rightContentClasses ? `${props.rightContentClasses} card__content-right` : 'nope card__content-right'}>
        {
          props.contentMeta.map((current) => {
          return (
            <Card
              type={current.type}
              src={current.src}
              alt={current.alt}
              classes={current.classes} />
            );}
        )}
      </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className={props.classes}>
      {
        props.type === 'image' &&
        <img src={props.src} alt={props.alt} />
      }
    </div>
  )
}

export default App;