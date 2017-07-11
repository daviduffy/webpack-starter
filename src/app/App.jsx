// main assets
import cover          from 'images/cover.jpg'

// commercials
import aller    from 'images/commercials/medium/allergease.jpg'
import aller_bg from 'images/commercials/medium/allergease_bg.jpg'
import att      from 'images/commercials/medium/att.jpg'
import att_bg   from 'images/commercials/medium/att_bg.jpg'
import be_cr    from 'images/commercials/medium/be_creative_again.jpg'
import be_cr_bg from 'images/commercials/medium/be_creative_again_bg.jpg'
import bridg    from 'images/commercials/medium/bridgestone.jpg'
import bridg_bg from 'images/commercials/medium/bridgestone_bg.jpg'
import carni    from 'images/commercials/medium/carnival_cruise.jpg'
import carni_bg from 'images/commercials/medium/carnival_cruise_bg.jpg'

// illustrations
import i_1      from 'images/illustrations/medium/IMG_0998.JPG'
import i_2      from 'images/illustrations/medium/IMG_0999.JPG'
import i_3      from 'images/illustrations/medium/IMG_1001.JPG'
import i_4      from 'images/illustrations/medium/IMG_1002.JPG'
import i_5      from 'images/illustrations/medium/IMG_1003.JPG'
import i_6      from 'images/illustrations/medium/IMG_1005.JPG'

// features
import f_0      from 'images/features/medium/TheHeelerPoster2015.jpg'
import f_1      from 'images/features/medium/monkeyman_935.jpg'
import f_2      from 'images/features/medium/setpping_high.jpg'
import f_3      from 'images/features/medium/thief.jpg'
import f_4      from 'images/features/medium/a_man_before_his_time.jpg'
import f_5      from 'images/features/medium/night_owls.jpg'
import f_6      from 'images/features/medium/sirk.jpg'
import f_7      from 'images/features/medium/william_the_magnificent.jpg'
import f_8      from 'images/features/medium/contrition.jpg'
import f_9      from 'images/features/medium/nightmare_code.jpg'
import f_10     from 'images/features/medium/targeting.jpg'
import f_11     from 'images/features/medium/gitd_movie_poster_web.jpg'
import f_12     from 'images/features/medium/on_the_outside.jpg'
import f_13     from 'images/features/medium/the_adventures_of_don_juan_and_don_tu.jpg'
import f_14     from 'images/features/medium/i_love_you.jpg'
import f_15     from 'images/features/medium/salvation_road.jpg'
import f_16     from 'images/features/medium/the_christmas_colt.jpg'

// music videos


// transitions
import { CSSTransitionGroup } from 'react-transition-group'

const content = [
  {
    name: 'commercials',
    icon: 'fa-star-o',
    mosaic: false,
    cards: [
      {
        key: 0,
        src: aller,
        bg_src: aller_bg,
        title: 'AllergEase',
        subtitle: "Don't Miss a Moment!",
        featured: true
      },
      {
        key: 1,
        src: att,
        bg_src: att_bg,
        title: 'AT&T',
        subtitle: 'Incredible Game Winning Play!',
        featured: true
      },
      {
        key: 2,
        src: be_cr,
        bg_src: be_cr_bg,
        title: 'Umano Productions',
        subtitle: 'Be Creative Again.',
        featured: true
      },
      {
        key: 3,
        src: bridg,
        bg_src: bridg_bg,
        title: 'Bridgestone',
        subtitle: 'Tire vs. Olympic Archer',
        featured: true
      },
      {
        key: 4,
        src: carni,
        bg_src: carni_bg,
        title: 'Carnival Cruise Lines',
        subtitle: 'Lorem Ipsum Dolor',
        featured: false
      }
    ]
  },
  {
    name: 'illustrations',
    icon: 'fa-picture-o',
    mosaic: true,
    cards: [
      {
        key: 0,
        src: '',
        bg_src: i_1,
        title: 'Wonder Woman',
        subtitle: 'lorem ipsum dolor',
        featured: true
      },
      {
        key: 1,
        src: '',
        bg_src: i_2,
        title: 'Space Hulk Hogan',
        subtitle: 'lorem ipsum dolor',
        featured: true
      },
      {
        key: 2,
        src: '',
        bg_src: i_3,
        title: 'The Flash',
        subtitle: 'lorem ipsum dolor',
        featured: true
      },
      {
        key: 3,
        src: '',
        bg_src: i_4,
        title: 'Some Hoe',
        subtitle: 'lorem ipsum dolor',
        featured: true
      }
    ]
  },
  {
    name: 'features',
    icon: 'fa-film',
    mosaic: true,
    cards: [
      {
        key: 0,
        src: '',
        bg_src: f_0,
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 1,
        src: '',
        bg_src: f_1,
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 2,
        src: '',
        bg_src: f_2,
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 3,
        src: '',
        bg_src: f_3,
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 4,
        src: '',
        bg_src: f_4,
        title: '',
        subtitle: '',
        featured: false
      },
      {
        key: 5,
        src: '',
        bg_src: f_5,
        title: '',
        subtitle: '',
        featured: false
      },
      {
        key: 6,
        src: '',
        bg_src: f_6,
        title: '',
        subtitle: '',
        featured: false
      },
      {
        key: 7,
        src: '',
        bg_src: f_7,
        title: '',
        subtitle: '',
        featured: false
      },
      {
        key: 8,
        src: '',
        bg_src: f_8,
        title: '',
        subtitle: '',
        featured: false
      },
      {
        key: 9,
        src: '',
        bg_src: f_9,
        title: '',
        subtitle: '',
        featured: false
      }
    ]
  },
  {
    name: 'music videos',
    icon: 'fa-television',
    mosaic: false,
    cards: [
      {
        key: 0,
        src: '',
        bg_src: '',
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 1,
        src: '',
        bg_src: '',
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 2,
        src: '',
        bg_src: '',
        title: '',
        subtitle: '',
        featured: true
      },
      {
        key: 3,
        src: '',
        bg_src: '',
        title: '',
        subtitle: '',
        featured: true
      }
    ]
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mNav: false,
      active: 0,
      expanded: false,
    };
    this.toggleMobNav = this.toggleMobNav.bind(this);
    this.selectGallery = this.selectGallery.bind(this);
    this.expandGallery = this.expandGallery.bind(this);
  };

  toggleMobNav(e) {
    this.setState(prevState => ({
      mNav: !prevState.mNav,

    }));
  }

  selectGallery(num) {
    this.setState(prevState => ({
      active: num,
      expanded: false,
    }));
  }

  expandGallery() {
    this.setState({
      expanded: true
    })
  }

  render () {
    const coverStyles = {
      backgroundImage: `url('${cover}')`
    }
    const currentContent = content[this.state.active]
    const navItems = content.map((current, index) => {
      return ({
        name: current.name,
        icon: current.icon,
        index: index,
        key: index
      })
    })
    if ( !this.state.expanded ) {
      var cards = currentContent.cards.map((current) => {
        if ( current.featured ) {
          return ({
            key: current.key,
            src: current.src,
            bg_src: current.bg_src,
            title: current.title,
            subtitle: current.subtitle
          })
        }
      })
    } else {
      var cards = currentContent.cards;
    }

    return (
      <div className="cont">
        <header className={this.state.mNav ? `header header--open` : `header`}>
          <a className="header__trigger u-abs-c" id="header_nav_trigger" onClick={this.toggleMobNav}>
            <span className="header__bars"></span>
          </a>
          <div className="header__bg u-abs-c"></div>

          <Nav  classes= "nav--header"
                active= {this.state.active}
                navItems= {navItems}
                selectGallery= {this.selectGallery} />

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

        <Nav  classes         = "nav--body"
              active          = {this.state.active}
              navItems        = {navItems}
              selectGallery   = {this.selectGallery} />

        <main className='main'>
          <div className={ currentContent.mosaic ? `gallery gallery--mosaic` : `gallery gallery--flex`} id="gallery" >
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={1500}
              transitionEnterTimeout={500}>
              {
                cards.map((current, index) => {
                  if ( current != null ) {
                    return (
                      <Card bg_src      = {current.bg_src}
                            title       = {current.title}
                            subtitle    = {current.subtitle}
                            key         = {index} />
                    )
                  }
                })
              }
            </CSSTransitionGroup>

            
          </div>
          <div className="gallery__c-more u-flex u-flex--c">
            <a className={ this.state.expanded ? `h6 gallery__more btn btn--more` : `gallery__more--expanded h6 gallery__more btn btn--more`}
               onClick={this.expandGallery}
               id="more">See All</a>
          </div>
        </main>
        <div className="x u-abs-c">
          <a className="u-abs-c" onClick={this.toggleMobNav}></a>
        </div>
        <MediaQueryHelper />
      </div>
    );
  }
}

const Nav = (props) => {
  return (
    <nav role="navigation" className={`nav ${props.classes}`}>
      <ul className="nav__ul u-flex">
        {
          props.navItems.map((current, index) => {
            return (
              <NavLink 
                changeGallery = {props.selectGallery}
                icon          = {current.icon}
                name          = {current.name}
                is_active     = {props.active == index}
                index         = {index}
                key           = {index}
              />
            )
          })
        }
      </ul>
    </nav>
  )
}

const NavLink = (props) => {
  return (
    <li className={ props.is_active ? `nav__li nav__li--active` : `nav__li`}>
      <a className="nav__a u-flex" onClick={function(){props.changeGallery(`${props.index}`)}}>
        <i className={`nav__fa nav__fa--i fa ${props.icon}`} aria-hidden="true"></i>
        <i className="nav__fa fa fa-circle" aria-hidden="true"></i>
        <h2 className="h6 nav__a-title">{props.name}</h2>
      </a>
    </li>
  )
}

const Card = (props) => {
  return (
    <section className="card">
      <div className="card__img">
        <img className="" src={props.bg_src}/>
      </div>
      <div className="card__cont u-flex u-flex--c">
        <h3 className="h6 card__title">{props.title}</h3>
        <p className="h6 card__sub">{props.subtitle}</p>
      </div>
    </section>
  )
}

const MediaQueryHelper = (props) => {
  return (
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
  )
}










// really old stuff
const CardOld = (props) => {
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