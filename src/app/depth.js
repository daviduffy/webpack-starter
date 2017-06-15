window.onload = function(){
  const setAnimation = (function(){
    let elem = document.getElementById('p');
    let styleVars = document.documentElement.style;
    let info = {};
    info.widthMidpoint = elem.offsetWidth / 2;
    info.heightMidpoint = elem.offsetHeight / 2;
    info.scrollMidpoint = elem.clientHeight / 2;
    info.windowMidpoint = window.innerHeight / 2;
    // offset = scroll()
    let current = {
      topOffset: 0
    };

    return {
      mouse: function(e) {
        // set shared mouse location
        var e = e || window.event;
        current.widthMidpoint = e.clientX - info.widthMidpoint;
        current.heightMidpoint = e.clientY - info.heightMidpoint;
        setAnimation.run();
      },
      scroll: function(e) {
        // set shared scroll location
        current.topOffset = (info.heightMidpoint - window.pageYOffset) - info.windowMidpoint;
        setAnimation.run();
      },
      run: function(e){
        styleVars.setProperty(`--f-t`, `${-current.widthMidpoint/8}px, ${-current.heightMidpoint/6 + current.topOffset * 2}px` )
        styleVars.setProperty(`--m-t`, `${-current.widthMidpoint/12}px, ${-current.heightMidpoint/11 + current.topOffset}px` )
        styleVars.setProperty(`--b-t`, `${-current.widthMidpoint/16}px, ${-current.heightMidpoint/16 + current.topOffset / 2}px` )
      }
    };
  }());
  document.body.onscroll = setAnimation.scroll;
  document.body.onmousemove = setAnimation.mouse;
};