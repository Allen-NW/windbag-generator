// define sample function
function sample(array) {
  const length = array.length
  const index = Math.floor(Math.random() * length)
  return index
}

// define windbag function
function generateWindbag(selectedArray) {
  // define things users might want
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']

  // create a collection to store thing user picked up
  let collection = []

  if (!selectedArray) {
    return '請選擇職業!'
  }

  for (let career in task) {
    if (selectedArray.career === career) {
      collection = task[career]
    }
  } 

  // return
  return `身為一個${selectedArray.title}，${collection[sample(collection)]+phrase[sample(phrase)]}`
}

module.exports = generateWindbag