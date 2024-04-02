const boxes = document.querySelectorAll('.color');
const states = document.querySelectorAll('.state');
const substanceName = document.querySelector('.substanceName');
const submitBtn = document.querySelector('.submitBtn');
const nextBtn = document.querySelector('.nextBtn');
const score = document.querySelector('.score');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove selected class from all color divs
    boxes.forEach(otherBox => {
      otherBox.classList.remove('selectedColor');
    });
  
    // Add selected class to the clicked color div
    box.classList.add('selectedColor');
  });
});

states.forEach(state => {
  state.addEventListener('click', () => {
    states.forEach(otherState => {
      otherState.classList.remove('selectedState');
    })
    state.classList.add('selectedState');
  })
})

const data = [
  ['PbS', 'black', 'solid'],
  ['KI', 'white', 'solid'],
  ['NO', 'colorless', 'gas'],
  ['Fe(OH)\u2082', 'green', 'solid'],
  ['Fe(OH)\u2083', 'brown', 'solid'],
  ['NO\u2082', 'brown', 'gas'],
  ['CH\u2084', 'colorless', 'gas'],
  ['KMnO\u2084', 'purple', 'solid'],
  ['AgCl', 'white', 'solid'],
  ['NaOH', 'white', 'solid'],
  ['Al(OH)\u2083', 'white', 'solid'],
  ['BaSO\u2084', 'white', 'solid'],
  ['Cu(OH)\u2082', 'blue', 'solid'],
  ['CuO','black','solid'],
  ['CuSO\u2084*5H\u2082O','blue','solid'],
  ['Cu','brown','solid'],
  ['Fe\u2082O\u2083','red','solid'],
  ['Cr\u2082O\u2083','green','solid'],
  ['CrO\u2083','red','solid'],
  ['K\u2082Cr\u2082O\u2087','orange','solid'],
  ['Ag\u2083PO\u2084','yellow','solid'],
  ['K\u2082MnO\u2084','green','solid'],
  ['MnO\u2082','brown','solid'],
  ['Br\u2082','brown','liquid'],
  ['S','yellow','solid'],
  ['BaCrO\u2084','yellow','solid'],
  ['AgI','yellow','solid'],
  ['Cu\u2082O','red','solid'],
  ['Cr(OH)\u2083','green','solid'],
  ['Ag\u2082S','black','solid'],
  ['FeS','black','solid'],
  ['CuO','black','solid'],
  ['FeO','black','solid'],
  ['Fe\u2083O\u2084','black','solid'],
  ['CuS','black','solid'],
  ['I\u2082','black','solid'],
]

function clearClasses() {
  document.querySelector('.selectedState').classList.remove('selectedState');
  document.querySelector('.selectedColor').classList.remove('selectedColor');
}

function App() {
  let shuffledData = shuffleArray(data);
  let i = 0;
  let elem = undefined;
  let newScore = 0;
  let start = false;
  let already = false;
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (i == data.length) {
      shuffledData = shuffleArray(data);
      i = 0;
    }
      already = true;
      start = true;
      elem = shuffledData[i];
      i++;
      substanceName.innerHTML = elem[0];
  })
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (already && start && document.querySelector('.selectedState').classList.contains(`${elem[2]}`) && 
    (document.querySelector('.selectedColor').classList.contains(`${elem[1]}`)) ) {
      newScore++;
      score.innerHTML = newScore;
      already = false;  
      clearClasses()
    } else if (already && start && document.querySelector('.selectedState') && document.querySelector('.selectedColor')) {
      newScore--;
      score.innerHTML = newScore;
      clearClasses()
    }
  })

}


App();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
