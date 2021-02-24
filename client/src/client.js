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

  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));
})();