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
  input.value = '';
  sock.emit('message', text);
};

(() => {
  const sock = io();
  sock.emit('getChat');
  sock.on('message', log);

  log('<b>Welcome!</b>');
  document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted(sock));
})();