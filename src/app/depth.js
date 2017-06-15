window.onload = function(){
  const setCanvas = (function(){
    let elem = document.getElementById('g');
    let styleVars = document.documentElement.style;
    let s = [];
    s.push(elem.offsetWidth / 2);
    s.push(elem.offsetHeight / 2);
    return {
      run: function(e) {
        var e = e || window.event;
        let x = e.clientX - s[0];
        let y = e.clientY - s[1];
        styleVars.setProperty(`--foreground-translate`, `${-x/8}px, ${-y/6}px` )
        styleVars.setProperty(`--midground-translate`, `${-x/12}px, ${-y/11}px` )
        styleVars.setProperty(`--background-translate`, `${-x/16}px, ${-y/16}px` )


        // console.log( `x-coord: ${x}px`, `y-coord: ${y}px`);
      },
    };
  }());

  document.body.onmousemove = setCanvas.run;
};