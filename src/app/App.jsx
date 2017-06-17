// import React from 'react';
import cover          from 'images/cover.jpg'
import illustration_1 from 'images/illustrations/IMG_0998.JPG'

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
          src: `http://placehold.it/600x600`,
          alt: 'testing tall',
          classes: 'ph ph-s'
        },
        {
          type: 'image',
          src: `http://placehold.it/600x400`,
          alt: 'testing tall',
          classes: 'ph ph-w'
        },
        {
          type: 'image',
          src: `http://placehold.it/400x500`,
          alt: 'testing wide',
          classes: 'ph ph-w'
        },
        {
          type: 'image',
          src: `http://placehold.it/400x600`,
          alt: 'testing tall',
          classes: 'ph ph-t'
        },
        {
          type: 'image',
          src: `http://placehold.it/700x400`,
          alt: 'testing extra wide',
          classes: 'ph ph-xw'
        },
        {
          type: 'image',
          src: `http://placehold.it/400x700`,
          alt: 'testing extra tall',
          classes: 'ph ph-xt'
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
          alt: 'a cat image again',
          classes: false
        },
        {
          type: 'image',
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
    const coverStyles = {
      backgroundImage: `url('${cover}')`
    }
    const imgStyles = [
      {
        backgroundImage: `url(${illustration_1})`
      }
    ]
    return (
      <div className="cont">
        <header className="header">
          <div className="header__bg">
            <a className="header__trigger u-flex u-flex--c">
              <span className="header__bars"></span>
            </a>
          </div>
          <Nav classes="nav--header nav--closed"/>
        </header>
        <section className="cover u-flex">
          <div className="cover__bg u-abs-c" style={coverStyles}></div>
          <div className="cover__t-c u-flex u-flex--c">
            <div className="cover__t">
              <h1 className="cover__h1">Helena Falangus</h1>
              <p className="cover__p h4">Costume Designer</p>
            </div>
          </div>
          <div className="cover__nav-b"></div>
        </section>
        <Nav classes="nav--body"/>
        <main className="gallery" id="gallery">
          <section className="card">
            <div className="card__img"></div>
            <div className="card__cont u-flex u-flex--c">
              <h3 className="card__title">illustration title</h3>
              <p className="card__sub">lorem ipsum dolor</p>
            </div>
          </section>
          <section className="card">
            <div className="card__img"></div>
            <div className="card__cont u-flex u-flex--c">
              <h3 className="card__title">illustration title</h3>
              <p className="card__sub">sit amet, consectetur</p>
            </div>
          </section>
          <section className="card">
            <div className="card__img"></div>
            <div className="card__cont u-flex u-flex--c">
              <h3 className="card__title">illustration title</h3>
              <p className="card__sub">lorem ipsum sit dolor</p>
            </div>
          </section>
          <section className="card">
            <div className="card__img"></div>
            <div className="card__cont u-flex u-flex--c">
              <h3 className="card__title">illustration title</h3>
              <p className="card__sub">sit amet, consectetur</p>
            </div>
          </section>
        </main>
        </div>
    );
  }

  // render () {
  //   const info = app;
  //   return (
  //     <div className="card-container">
  //       {info.map((current, index) => {
  //         return (
  //           <Card
  //             cardStatus={this.state}
  //             cardInfo={current.info}
  //             index={current.key}
  //             key={current.key} />
  //           );
  //         })
  //       }
  //       <TopControls
  //         cardChangeHandler={this.changeCard}
  //         current={this.state.curr} />
  //       <div className='controls controls--bottom'>
  //         {app.map((current, index) => {
  //           return (
  //             <BottomButton
  //               fa_icon={current.info.fa_icon}
  //               cardChangeHandler={this.changeCard}
  //               current={this.state.curr}
  //               index={current.key}
  //               key={index} />
  //             );
  //           })
  //         }
  //       </div>
  //     </div>
  //   )
  // }
}

const Nav = (props) => {
  return (
    <nav role="navigation" className={`nav ${props.classes}`}>
      <ul className="nav__ul u-flex">
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-star-o" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h5 nav__a-title">commercials</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-picture-o" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h5 nav__a-title">illustrations</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-film" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h5 nav__a-title">features</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-television" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h5 nav__a-title">music videos</h2>
          </a>
        </li>
      </ul>
    </nav>
  )
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
  const divStyle = {
    backgroundImage: 'url(' + props.src + ')'
  }
  const divClasses = 'f ' + props.classes
  return (
    <div className={divClasses} style={divStyle} alt={props.alt}></div>
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