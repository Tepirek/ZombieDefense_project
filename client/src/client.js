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

(() => {
  log('<b>Welcome!</b>');

  const sock = io();

  sock.emit('getChat');
  sock.on('message', log);
  
  const game = new Board();
  const player = new Player(game.getCtx());
  const wave = new Wave(2,game.getCtx());

  player.draw();
  player.getGun().draw();

  const getMouseCoordinates = (element, event) => {
    const { top, left } = element.getBoundingClientRect();
    const { clientX, clientY } = event;
    return {
      x: clientX - left,
      y: clientY - top
    }
  }

  setInterval(() => {
    player.getGun().drawBullets();
  }, 1000/24);


  game.getCanvas().addEventListener('click', (event) => {
    const { x , y } = getMouseCoordinates(game.getCanvas(), event);
    if(player.getGun().canShoot()) player.getGun().shoot(x, y);
  });

  game.getCanvas().addEventListener('mousemove', (event) => {
    const { x , y } = getMouseCoordinates(game.getCanvas(), event);
  });

  document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    if(e.keyCode == 82) {
      player.gun.reload();
    }
    player.move(e.keyCode);
  });

  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));
})();