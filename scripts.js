const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    for(let item of items.querySelectorAll('.item')){
      const checkbox = item.querySelector('.item__checkbox');
      checkbox.addEventListener('click', finish);
      const text = item.querySelector('.item__text');
      text.addEventListener('click', edit);
      const button = item.querySelector('button');
      button.addEventListener('click', deleteItem)
  
    }
        items.addEventListener('keyup',commit);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    let input = document.querySelector('.form__input');
    console.log(input.value)
    if(input.value.trim() != ''){
      add(input.value);
    }
    input.value = '';
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle('item--done');


  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log(e.target);
     //let span = document.querySelector("span");
     let input = document.createElement("input");
     input.classList.add('item__text');
      input.value = e.target.innerHTML;
      e.target.parentNode.replaceChild(input, e.target);
      input.focus();
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    console.log(e.keyCode);
    if(e.keyCode === ENTER_KEYCODE){
     let span = document.createElement('span');
     span.classList.add('item__text');
      span.innerHTML = e.target.value;
      span.addEventListener('click', edit);
      e.target.parentNode.replaceChild(span, e.target);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const list = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerHTML = value;//addar texta inní value functionið.
    button.innerHTML = 'Eyða';

    list.classList.add('item');
    input.classList.add('item__checkbox');
    span.classList.add('item__text');
    button.classList.add('item__button');

    input.setAttribute('type','checkbox');
    input.addEventListener('click', finish);
    span.addEventListener('click', edit);
    button.addEventListener('click', deleteItem);

    list.appendChild(input);
    list.appendChild(span);
    list.appendChild(button);

    items.appendChild(list);





  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.target.parentNode.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
