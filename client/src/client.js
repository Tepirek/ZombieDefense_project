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
  
  const game = new Game();
  const player = new Player(game.getCtx());
  const creature = new Creature(game.getCtx());
  player.draw();
  player.getGun().draw();
  const board = new Board();
  board.draw();

  const getMouseCoordinates = (element, event) => {
    const { top, left } = element.getBoundingClientRect();
    const { clientX, clientY } = event;
    return {
      x: clientX - left,
      y: clientY - top
    }
  }

  setInterval(() => {
    creature.move(-1, -1);
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
  board.getCanvas().addEventListener('click', (event) => {
    const { x , y } = getClickedCoordinates(board.getCanvas(), event);
    console.log({x, y});
  });

  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));
})();