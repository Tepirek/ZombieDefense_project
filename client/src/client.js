const log = (text) => {
  const parent = document.querySelector('#events');
  const el = document.createElement('li');
  el.innerHTML = text;
  parent.appendChild(el);
  parent.scrollTop = parent.scrollHeight;
};

const onChatSubmitted = (sock) => (e) => {
  e.preventDefault();
  const input = document.querySelector('#chat');
  const text = input.value;
  if(text != '') sock.emit('message', text);
  input.value = '';
};

const getMouseCoordinates = (element, event) => {
  const { top, left } = element.getBoundingClientRect();
  const { clientX, clientY } = event;
  return {
    x: clientX - left,
    y: clientY - top
  }
}

(() => {
  log('<b>Welcome!</b>');

  const sock = io();

  sock.emit('getChat');
  sock.on('message', log);
  
  const board = new Board();
  board.draw();
  
   
  const player = new Player();
  
  const game = new Board();
  const wave = new Wave(1,game.getCtx(), player);


  var onMouseClick = function (ev) { 
    var posX = ev.clientX,
        posY = ev.clientY;
    var baricade = new Barricade(game.getCtx(),posX,posY,50);
    baricade.draw();
    console.log(posX,posY);
  };
  document.addEventListener("mousedown",onMouseClick);

  document.addEventListener('keydown', (e) => {
    if(e.keyCode == 82) {
      player.gun.reload();
    }
    player.movePlayer(e.keyCode);
  });

  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));

  const gameObject = new GameObject(0, 0, 1, '../img/zombie01.png');
  gameObject.run();
  const gameObject2 = new GameObject(0, 300, -1, '../img/zombie01.png');
  gameObject2.run();

})();