// main assets
import cover          from 'images/cover.jpg'
// commercials
import aller    from 'images/commercials/allergease.png'
import aller_bg from 'images/commercials/allergease_bg.jpg'
import att      from 'images/commercials/att.png'
import att_bg   from 'images/commercials/att_bg.jpg'
import be_cr    from 'images/commercials/be_creative_again.jpg'
import be_cr_bg from 'images/commercials/be_creative_again_bg.jpg'
import bridg    from 'images/commercials/bridgestone.png'
import bridg_bg from 'images/commercials/bridgestone_bg.jpg'

// illustrations
import i_1      from 'images/illustrations/IMG_0998.JPG'
// features
// music videos

const app = {
  content: [
    {
      key: 0,
      name: 'commercials',
      cards: [
        {
          key: 0,
          src: aller,
          bg_src: aller_bg,
          title: "Don't Miss a Moment!",
          subtitle: 'AllergEase'
        },
        {
          key: 1,
          src: att,
          bg_src: att_bg,
          title: 'Incredible Game Winning Play!',
          subtitle: 'AT&T'
        },
        {
          key: 2,
          src: be_cr,
          bg_src: be_cr_bg,
          title: 'Be Creative Again.',
          subtitle: 'Umano Productions'
        },
        {
          key: 3,
          src: bridg,
          bg_src: bridg_bg,
          title: 'Tire vs. Olympic Archer',
          subtitle: 'Bridgestone'
        }
      ]
    },
    {
      key: 1,
      name: 'illustrations',
      cards: [
        {
          key: 1,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 2,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 3,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 4,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        }
      ]
    },
    {
      key: 2,
      name: 'features',
      cards: [
        {
          key: 1,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 2,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 3,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 4,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        }
      ]
    },
    {
      key: 3,
      name: 'music videos',
      cards: [
        {
          key: 1,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 2,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 3,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        },
        {
          key: 4,
          src: '',
          bg_src: '',
          title: '',
          subtitle: ''
        }
      ]
    }
  ],
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mNav: false,
      active: 1
    };
    this.toggleMobNav = this.toggleMobNav.bind(this);
  };

  toggleMobNav(e) {
    this.setState(prevState => ({
      mNav: !prevState.mNav
    }));
  }

  render () {
    const coverStyles = {
      backgroundImage: `url('${cover}')`
    }
    const imgStyles = [
      {
        backgroundImage: `url(${app.content[0].cards[0].bg_src})`
      },
      {
        backgroundImage: `url(${app.content[0].cards[1].bg_src})`
      },
      {
        backgroundImage: `url(${app.content[0].cards[2].bg_src})`
      },
      {
        backgroundImage: `url(${app.content[0].cards[3].bg_src})`
      }
    ]
    return (
      <div className="cont">
        <header className={this.state.mNav ? `header header--open` : `header`}>
          <a className="header__trigger u-abs-c" id="header_nav_trigger" onClick={this.toggleMobNav}>
            <span className="header__bars"></span>
          </a>
          <div className="header__bg u-abs-c"></div>
          <Nav classes="nav--header"/>
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
        <Nav classes="nav--body" active={this.state.active}/>
        <main className="main">
          <div className="gallery u-flex" id="gallery">
            <section className="card">
              <div className="card__img" style={imgStyles[0]}></div>
              <div className="card__cont u-flex u-flex--c">
                <h3 className="card__title">illustration title</h3>
                <p className="card__sub">lorem ipsum dolor</p>
              </div>
            </section>
            <section className="card">
              <div className="card__img" style={imgStyles[1]}></div>
              <div className="card__cont u-flex u-flex--c">
                <h3 className="card__title">illustration title</h3>
                <p className="card__sub">sit amet, consectetur</p>
              </div>
            </section>
            <section className="card">
              <div className="card__img" style={imgStyles[2]}></div>
              <div className="card__cont u-flex u-flex--c">
                <h3 className="card__title">illustration title</h3>
                <p className="card__sub">lorem ipsum sit dolor</p>
              </div>
            </section>
            <section className="card">
              <div className="card__img" style={imgStyles[3]}></div>
              <div className="card__cont u-flex u-flex--c">
                <h3 className="card__title">illustration title</h3>
                <p className="card__sub">sit amet, consectetur</p>
              </div>
            </section>
          </div>
          <div className="gallery__c-more u-flex u-flex--c">
            <a href="#" className="h6 gallery__more btn btn--more" id="more">See All</a>
          </div>
        </main>
        <div className="x u-abs-c">
          <a href="#" className="u-abs-c" onClick={this.toggleMobNav}></a>
        </div>
        <div className="mq">
          <div className="mq-w">
            <span>B:&nbsp;
              <span className="small-only">Small</span>
              <span className="smedium-only">Smedium</span>
              <span className="medium-only">Medium</span>
              <span className="large-only">Large</span>
              <span className="xlarge-only">XLarge</span>
            </span>
          </div>
          <div className="mq-o">
            <span>O:&nbsp;
              <span className="portrait-only">Portrait</span>
              <span className="landscape-only">Landscape</span>
            </span>
          </div>
        </div>
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
        <li className={props.active === 1 ? `nav__li--active nav__li` : `nav__li`}>
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-star-o" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h6 nav__a-title">commercials</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-picture-o" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h6 nav__a-title">illustrations</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-film" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h6 nav__a-title">features</h2>
          </a>
        </li>
        <li className="nav__li">
          <a href="#" className="nav__a u-flex">
            <i className="nav__fa nav__fa--i fa fa-television" aria-hidden="true"></i>
            <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
            <h2 className="h6 nav__a-title">music videos</h2>
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