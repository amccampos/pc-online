const fs = require('fs')
const path = require('path')

/** Transformações personalizadas do markdown */
module.exports = (md, options) => {
  return new Promise((resolve, reject) => {
    md = handleIncludes(md)
    md = handleBlocks(md)
    md = handleIdAndClasses(md)
    md = handleImages(md)
    return resolve(md)
  });
};

/**
 * Insere um arquivo markdown externo.
 * 
 * Sintaxe:
 * @include(filepath)
 * 
 * Exemplo:
 * @include(./my_subfile.md)
 */
function handleIncludes(md) {
  const re = /^\s*\@include\s*\(\s*([\.\/\w]*)\s*\)/gm
  return md.replace(re, (match, filename) => {
    const filepath = path.join(__dirname, '..', filename)
    if (fs.existsSync(filepath)) {
      return fs.readFileSync(filepath, 'utf8')
    }
    return ''
  })
}

/**
 * Atribui um id e/ou uma ou mais classes a um elemento.
 * 
 * Sintaxe:
 * [#id .class1 .class2 ...]
 * 
 * Exemplo:
 * Este parágrafo tem id e classes [#parag .fragment .my-class]
 */
function handleIdAndClasses(md) {
  const re = /\[\s*(.*)\s*\][ \t]*$/gm
  return md.replace(re, (match, content) => {
    let idStr = ''
    let classStr = ''
    const id = content.match(/#\w[\w-]*/)
    const classList = content.match(/\.\w[\w-]*/g)

    if (!id && !classList) {
      return match  // se não há #id nem .class dentro dos [], não realiza alterações
    }

    if (id) {
      idStr = ` id="${id[0].substring(1)}"`
    }
    if (classList) {
      const clsList = classList.map(cls => cls.substring(1)).join(' ')
      classStr = ` class="${clsList}"` 
    }
    return `<!-- .element:${idStr}${classStr} -->`
  })
}

/**
 * Insere uma imagem com atributos de tamanho e posição absoluta.
 * 
 * Sintaxe:
 * $img(imagepath w=largura h=altura @XxY)
 * 
 * Exemplos:
 * $img(./assets/img.png)  
 * $img(./assets/img.png w=300)  
 * $img(./assets/img.png w=300 @100x300)  
 * $img(./assets/img.png h=400)
 * $img(./assets/img.png w=300 h=400 @100x300)  
 */
function handleImages(md) {
  const re = /\$img\s*\(\s*([\.\/\w]*)\s*(.*)\s*\)/g
  return md.replace(re, (match, filename, complement) => {
    let attrs = ''

    // muda w=200 por width="200"
    const width = complement.match(/w=(\d+)/)
    if (width) {
      attrs += ` width="${width[1]}"`
    }

    // muda h=300 por height="300"
    const height = complement.match(/h=(\d+)/)
    if (height) {
      attrs += ` height="${height[1]}"`
    }

    // muda @400x500 por style="position: absolute; left: 400px; top: 500px"
    const pos = complement.match(/@(\d+)x(\d+)/)
    if (pos) {
      attrs += ` style="position: absolute; left: ${pos[1]}px; top: ${pos[2]}px"`
    }

    return `<img src="${filename}"${attrs}/>`
  })
}

/**
 * Cria um block <div> para agrupar um conteúdo e atribuir classes e/ou id.
 * 
 * Sintaxe:
 * (@ conteúdo @)
 * 
 * Ex:
 * (@[.fragment]
 *   Parágrafo 1
 *   
 *   ```python
 *   x = 5
 *   ```
 * @)
 */
function handleBlocks(md) {
  const re = /\(@([\S\s]*?)@\)/g
  return md.replace(re, (match, content) => {
    return `<div>${content}</div>`
  })
}
