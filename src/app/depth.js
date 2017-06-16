window.onload = function(){
  const setAnimation = (function(){

    // container element
    let elem = document.getElementById('p');

    // current data used by function
    let current = {
      topOffset: 0
    };
    // used to supercede vars set in css
    let styleVars = document.documentElement.style;

    // global info used to create initial offsets
    let info = {};
    info.widthMidpoint = elem.offsetWidth / 2;
    info.heightMidpoint = elem.offsetHeight / 2;
    info.windowMidpoint = window.innerHeight / 2;



    return {
      mouse: function(e) {
        // set shared mouse location
        var e = e || window.event;
        current.widthMidpoint = e.clientX - info.widthMidpoint;
        current.heightMidpoint = e.clientY - info.heightMidpoint + window.pageYOffset;
        setAnimation.run();
      },
      scroll: function(e) {
        // set shared scroll location
        current.topOffset = (info.heightMidpoint - window.pageYOffset) - info.windowMidpoint;
        setAnimation.run();
      },
      run: function(e){
        // render from shared vars
        styleVars.setProperty(`--w-mid`, `${-current.widthMidpoint}px`)
        styleVars.setProperty(`--h-mid`, `${-current.heightMidpoint}px`)
        styleVars.setProperty(`--sc-mid`, `${current.topOffset}px`)
      }
    };
  }());
  document.body.onscroll = setAnimation.scroll;
  document.body.onmousemove = setAnimation.mouse;
};