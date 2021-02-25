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
  
  const board = new Board();
  const player = new Player();
  player.draw();
  player.move();
  const creature = new Creature(board.getCtx());
  board.draw();
  const game = new Board();
  const wave = new Wave(1,game.getCtx(), player);

  const getMouseCoordinates = (element, event) => {
    const { top, left } = element.getBoundingClientRect();
    const { clientX, clientY } = event;
    return {
      x: clientX - left,
      y: clientY - top
    }
  }

  setInterval(() => {

  }, 1000/24);

  board.getCanvas().addEventListener('click', (event) => {
    const { x , y } = getMouseCoordinates(board.getCanvas(), event);

  game.getCanvas().addEventListener('click', (event) => {
    const { x , y } = getMouseCoordinates(game.getCanvas(), event);
    if(player.getGun().canShoot()) player.getGun().shoot(x, y);
  });

  board.getCanvas().addEventListener('mousemove', (event) => {
    const { x , y } = getMouseCoordinates(board.getCanvas(), event);
  });

  document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    if(e.keyCode == 82) {
      
    }
    player.move(e.keyCode);
  });

    board.getCanvas().addEventListener('click', (event) => {
      const { x , y } = getClickedCoordinates(board.getCanvas(), event);
      console.log({x, y});
    });
  });
  game.getCanvas().addEventListener('click', (event) => {
    const { x , y } = getMouseCoordinates(game.getCanvas(), event);
    console.log({x, y});
  });

  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));

  const gameObject = new GameObject(0, 0, 1, '../img/zombie01.png');
  // gameObject.getInfo();
  console.log(gameObject);

  const gameObject2 = new GameObject(0, 300, -1, '../img/zombie01.png');

  setInterval(() => {
    
  }, 1000/30);


  class A {
    constructor(x) {
      this.x = x;
    }
  }

  A.prototype.pies = function() {
    console.log(this.x);
  }

  class B extends A {
    constructor(x) {
      super(x);
    }
    kot = function() {
      this.pies();
    }
  }

  const a = new A(1);
  const b = new A(2);
  const c = new A(3);
  const d = new B(4);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  a.pies();
  b.pies();
  c.pies();
  d.kot();











})();