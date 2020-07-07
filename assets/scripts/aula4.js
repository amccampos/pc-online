/** Associação do slide com uma função de controle dos fragmentos. */
const outputMap = {
  'exemplo-do-enquanto': exemploDoEnquanto,
  'exemplo-do-for': exemploDoPara,
}

/** Controla a saída do código no slide "Exemplo do Enquanto" */
function exemploDoEnquanto(data) {
  const fragIndex = data.fragmentIndex
  const lineNumbers = data.lineNumbers
  const varElm = document.getElementById('p1var')
  const outElm = document.getElementById('p1out')

  if (fragIndex === '0') {
    varElm.innerText = 'count: 0'
    outElm.innerText = '\n'
  }
  else if (lineNumbers === '3') {
    switch(fragIndex) {
      case '2': outElm.innerText = '0\n'; break;
      case '5': outElm.innerText = '0\n1\n'; break;
      case '8': outElm.innerText = '0\n1\n2\n';
    }
  }
  else if (lineNumbers === '4') {
    const frag = parseInt(fragIndex, 10)
    varElm.innerText = `count: ${frag/3}`
  }
  else if (lineNumbers === '5') {
    outElm.innerText = '0\n1\n2\nterminou\n';
  }
}

/** Controla a saída do código no slide "Exemplo do Para" */
function exemploDoPara(data) {
  const fragIndex = data.fragmentIndex
  const lineNumbers = data.lineNumbers
  const varElm = document.getElementById('p2var')
  const outElm = document.getElementById('p2out')

  if (fragIndex === '0') {
    varElm.innerText = 'element: 1'
    outElm.innerText = '\n'
  }
  else if (lineNumbers === '1') {
    const frag = parseInt(fragIndex, 10)
    varElm.innerText = (frag > 6) ? `element: ?` : `element: ${(frag+2)/2}`
  }
  else if (lineNumbers === '2') {
    switch(fragIndex) {
      case '1': outElm.innerText = '1\n'; break;
      case '3': outElm.innerText = '1\n2\n'; break;
      case '5': outElm.innerText = '1\n2\n3\n'; break;
      case '7': outElm.innerText = '1\n2\n3\n4\n';
    }
  }
  else if (lineNumbers === '3') {
    outElm.innerText = '1\n2\n3\n4\nterminou\n';
  }
}


/** Verifica se precisa chamar alguma função quando fragmentos são apresentados. */
function checkCodeFragments(slide, fragment) {
  const fc = slide.firstChild
  const data = fragment.dataset
  
  if (fc && data && outputMap[fc.id]) {
    outputMap[fc.id](data)
  }
}


Reveal.on('fragmentshown', event => {
  checkCodeFragments(Reveal.getCurrentSlide(), event.fragment)
});