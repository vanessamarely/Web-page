function showPage( hash ){
  const elem = document.getElementsByTagName('section');
  console.log(elem)
  //elem.css.display = 'none';
  const id = hash.replace('#', ''),
    page = document.getElementById(id);
  document.location.hash = hash;
  page.style.display = 'block';
}

showPage('#home');