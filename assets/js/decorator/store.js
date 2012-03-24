var pics = [];

function store_save(data) {
  pics.push(data);
}

function store_get_last() {
  return pics[pics.length - 1];
}