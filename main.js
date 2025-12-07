function changeCursorRepeatedly(time){
  window.switched = false;
  
  setInterval(() => {
      window.switched = !window.switched;
      document.body.style.cursor = window.switched ? 'default' : 'pointer';
  }, time);
}
