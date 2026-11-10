const $ = id => document.getElementById(id);
const styles = {fio:['center',24,'#222'],job:['center',14,'#666']};

function set(key, value) {
  styles[key][typeof value === 'number' ? 1 : 0] = value;
  updateCard();
}
function addPhone() {
  $('extra').insertAdjacentHTML('beforeend', '<input type="text" placeholder="Дополнительный телефон" style="display:block;margin-top:7px">');
}
for (const [key, colors] of Object.entries({
  fio:['#222','#4285f4','#ec3e64','#088f46','#e4aa00','#bf12d0'],
  job:['#444','#222','#666','#999','#bbb','#ddd']
})) {
  $(key+'Colors').innerHTML = colors.map(color =>
    `<button type="button" style="background:${color}" onclick="styles['${key}'][2]='${color}';updateCard()"></button>`
  ).join('');
}
function updateCard() {
  for (const id of ['org','fio','job']) $('out'+id[0].toUpperCase()+id.slice(1)).textContent = $(id).value;
  $('outPhone').textContent = [$('phone'), ...$('extra').querySelectorAll('input')].map(x => x.value).filter(Boolean).join(' / ');
  for (const id of ['email','address']) $('out'+id[0].toUpperCase()+id.slice(1)).textContent = $('show'+id[0].toUpperCase()+id.slice(1)).checked ? $(id).value : '';
  for (const id of ['fio','job']) {
    const e = $('out'+id[0].toUpperCase()+id.slice(1));
    const [align,size,color] = styles[id];
    e.style.textAlign = align;
    e.style.fontSize = size+'px';
    e.style.color = color;
  }
}
updateCard();
