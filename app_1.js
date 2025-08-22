// Game data with varied incubation periods averaging ~24 hours
const gameData = {
  cases: [
    {"id": 1, "age": 34, "sex": "F", "dining_datetime": "2023-06-19 7:00 PM", "onset_datetime": "2023-06-20 6:00 PM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 23},
    {"id": 2, "age": 28, "sex": "M", "dining_datetime": "2023-06-19 8:00 PM", "onset_datetime": "2023-06-21 10:00 AM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 38},
    {"id": 3, "age": 45, "sex": "F", "dining_datetime": "2023-06-20 6:00 PM", "onset_datetime": "2023-06-21 4:00 PM", "symptoms": ["diarrhea", "cramps", "vomiting"], "hospitalized": false, "incubation_hours": 22},
    {"id": 4, "age": 52, "sex": "M", "dining_datetime": "2023-06-20 7:30 PM", "onset_datetime": "2023-06-21 9:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 26},
    {"id": 5, "age": 19, "sex": "F", "dining_datetime": "2023-06-20 8:00 PM", "onset_datetime": "2023-06-21 6:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever", "vomiting"], "hospitalized": true, "incubation_hours": 22},
    {"id": 6, "age": 67, "sex": "M", "dining_datetime": "2023-06-20 6:30 PM", "onset_datetime": "2023-06-22 12:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 42},
    {"id": 7, "age": 31, "sex": "F", "dining_datetime": "2023-06-21 7:00 PM", "onset_datetime": "2023-06-22 3:00 PM", "symptoms": ["diarrhea", "cramps"], "hospitalized": false, "incubation_hours": 20},
    {"id": 8, "age": 38, "sex": "M", "dining_datetime": "2023-06-21 8:30 PM", "onset_datetime": "2023-06-22 8:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 24},
    {"id": 9, "age": 29, "sex": "F", "dining_datetime": "2023-06-21 6:00 PM", "onset_datetime": "2023-06-22 8:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "vomiting"], "hospitalized": false, "incubation_hours": 26},
    {"id": 10, "age": 44, "sex": "M", "dining_datetime": "2023-06-21 7:30 PM", "onset_datetime": "2023-06-22 11:30 AM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 16},
    {"id": 11, "age": 55, "sex": "F", "dining_datetime": "2023-06-21 8:00 PM", "onset_datetime": "2023-06-23 2:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever", "vomiting"], "hospitalized": true, "incubation_hours": 42},
    {"id": 12, "age": 26, "sex": "M", "dining_datetime": "2023-06-22 6:30 PM", "onset_datetime": "2023-06-23 8:30 AM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 14},
    {"id": 13, "age": 33, "sex": "F", "dining_datetime": "2023-06-22 7:00 PM", "onset_datetime": "2023-06-23 11:00 PM", "symptoms": ["diarrhea", "cramps", "fever"], "hospitalized": false, "incubation_hours": 28},
    {"id": 14, "age": 41, "sex": "M", "dining_datetime": "2023-06-22 8:00 PM", "onset_datetime": "2023-06-23 6:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 22},
    {"id": 15, "age": 36, "sex": "F", "dining_datetime": "2023-06-22 6:00 PM", "onset_datetime": "2023-06-23 8:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "vomiting"], "hospitalized": false, "incubation_hours": 26},
    {"id": 16, "age": 50, "sex": "M", "dining_datetime": "2023-06-22 7:30 PM", "onset_datetime": "2023-06-23 5:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 22},
    {"id": 17, "age": 22, "sex": "F", "dining_datetime": "2023-06-23 6:30 PM", "onset_datetime": "2023-06-24 4:30 PM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 22},
    {"id": 18, "age": 39, "sex": "M", "dining_datetime": "2023-06-23 8:00 PM", "onset_datetime": "2023-06-24 2:00 PM", "symptoms": ["diarrhea", "cramps", "fever"], "hospitalized": false, "incubation_hours": 18},
    {"id": 19, "age": 47, "sex": "F", "dining_datetime": "2023-06-23 7:00 PM", "onset_datetime": "2023-06-24 9:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 26},
    {"id": 20, "age": 35, "sex": "M", "dining_datetime": "2023-06-23 6:00 PM", "onset_datetime": "2023-06-24 6:00 AM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 12},
    {"id": 21, "age": 58, "sex": "F", "dining_datetime": "2023-06-24 7:30 PM", "onset_datetime": "2023-06-25 9:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever", "vomiting"], "hospitalized": true, "incubation_hours": 26},
    {"id": 22, "age": 27, "sex": "M", "dining_datetime": "2023-06-24 8:00 PM", "onset_datetime": "2023-06-25 4:00 PM", "symptoms": ["diarrhea", "cramps"], "hospitalized": false, "incubation_hours": 20},
    {"id": 23, "age": 43, "sex": "F", "dining_datetime": "2023-06-24 6:30 PM", "onset_datetime": "2023-06-25 6:30 PM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 24},
    {"id": 24, "age": 32, "sex": "M", "dining_datetime": "2023-06-25 6:00 PM", "onset_datetime": "2023-06-26 8:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 26},
    {"id": 25, "age": 48, "sex": "F", "dining_datetime": "2023-06-25 7:00 PM", "onset_datetime": "2023-06-26 1:00 PM", "symptoms": ["diarrhea", "cramps", "vomiting"], "hospitalized": false, "incubation_hours": 18},
    {"id": 26, "age": 24, "sex": "M", "dining_datetime": "2023-06-25 8:30 PM", "onset_datetime": "2023-06-27 2:30 AM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 30},
    {"id": 27, "age": 53, "sex": "F", "dining_datetime": "2023-06-26 6:00 PM", "onset_datetime": "2023-06-27 8:00 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever"], "hospitalized": false, "incubation_hours": 26},
    {"id": 28, "age": 37, "sex": "M", "dining_datetime": "2023-06-26 7:30 PM", "onset_datetime": "2023-06-27 3:30 PM", "symptoms": ["diarrhea", "cramps"], "hospitalized": false, "incubation_hours": 20},
    {"id": 29, "age": 42, "sex": "F", "dining_datetime": "2023-06-26 6:30 PM", "onset_datetime": "2023-06-28 6:30 PM", "symptoms": ["diarrhea", "cramps", "nausea", "fever", "vomiting"], "hospitalized": true, "incubation_hours": 48},
    {"id": 30, "age": 46, "sex": "M", "dining_datetime": "2023-06-26 8:00 PM", "onset_datetime": "2023-06-29 8:00 AM", "symptoms": ["diarrhea", "cramps", "nausea"], "hospitalized": false, "incubation_hours": 60}
  ],
  correctAnswers: {
    disease: "Salmonella Enteritidis",
    outbreakType: "Point source outbreak",
    medianIncubation: 24,
    overallAttackRate: 16.7,
    foodVector: "Caesar Salad"
  }
};

// Game state management
const gameState = {
  currentScreen: 0,
  screens: ['intro-screen', 'data-screen', 'curve-screen', 'disease-screen', 'attack-screen', 'report-screen'],
  scores: {
    incubation: 0,
    curve: 0,
    disease: 0,
    outbreak: 0,
    attack: 0,
    total: 0
  },
  userAnswers: {
    selectedDisease: null,
    outbreakType: null,
    overallAttackRate: null,
    caesarRate: null,
    chickenRate: null,
    tiramisuRate: null,
    foodVector: null
  },
  calculatedIncubations: {},
  curveComplete: false,
  allCalculationsComplete: false,
  
  nextScreen() {
    console.log('Next screen called, current screen:', this.currentScreen);
    
    // Special validation for data screen
    if (this.currentScreen === 1 && !this.allCalculationsComplete) {
      alert('Please complete all 30 incubation period calculations before proceeding to the epidemic curve.');
      return;
    }
    
    if (this.currentScreen < this.screens.length - 1) {
      this.hideScreen(this.screens[this.currentScreen]);
      this.currentScreen++;
      this.showScreen(this.screens[this.currentScreen]);
      this.initializeScreen(this.screens[this.currentScreen]);
    }
  },
  
  prevScreen() {
    console.log('Previous screen called, current screen:', this.currentScreen);
    if (this.currentScreen > 0) {
      this.hideScreen(this.screens[this.currentScreen]);
      this.currentScreen--;
      this.showScreen(this.screens[this.currentScreen]);
    }
  },
  
  showScreen(screenId) {
    console.log('Showing screen:', screenId);
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.add('active');
    } else {
      console.error('Screen not found:', screenId);
    }
  },
  
  hideScreen(screenId) {
    console.log('Hiding screen:', screenId);
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.remove('active');
    } else {
      console.error('Screen not found:', screenId);
    }
  },
  
  initializeScreen(screenId) {
    console.log('Initializing screen:', screenId);
    switch(screenId) {
      case 'data-screen':
        populateCaseTable();
        updateCalculationStatus();
        break;
      case 'curve-screen':
        initializeCurveBuilder();
        populateReferencePanel();
        break;
      case 'disease-screen':
        updateCalculatedMedianDisplay();
        break;
      case 'report-screen':
        calculateScores();
        generateReport();
        break;
    }
  }
};

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing game...');
  gameState.showScreen(gameState.screens[0]);
  
  // Add event listeners to ensure buttons work
  const beginButton = document.querySelector('#intro-screen .btn--primary');
  if (beginButton) {
    beginButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Begin Investigation button clicked');
      gameState.nextScreen();
    });
  }
});

// Incubation period calculation functions
function validateIncubation(caseId) {
  console.log('Validating incubation for case:', caseId);
  const input = document.getElementById(`incubation-input-${caseId}`);
  const statusIcon = document.getElementById(`status-icon-${caseId}`);
  
  if (!input || !statusIcon) {
    console.error('Input or status icon not found for case:', caseId);
    return;
  }
  
  const userValue = parseInt(input.value);
  const correctValue = gameData.cases.find(c => c.id === caseId).incubation_hours;
  
  if (userValue === correctValue) {
    statusIcon.className = 'incubation-status correct';
    statusIcon.textContent = '✓';
    gameState.calculatedIncubations[caseId] = userValue;
    input.classList.add('correct');
    input.classList.remove('incorrect');
  } else if (input.value) {
    statusIcon.className = 'incubation-status incorrect';
    statusIcon.textContent = '✗';
    delete gameState.calculatedIncubations[caseId];
    input.classList.add('incorrect');
    input.classList.remove('correct');
  } else {
    statusIcon.className = 'incubation-status pending';
    statusIcon.textContent = '?';
    delete gameState.calculatedIncubations[caseId];
    input.classList.remove('correct', 'incorrect');
  }
  
  updateCalculationStatus();
}

function updateCalculationStatus() {
  const calculatedCount = Object.keys(gameState.calculatedIncubations).length;
  const totalCases = gameData.cases.length;
  
  const calculatedCountElement = document.getElementById('calculated-count');
  const medianIncubationElement = document.getElementById('median-incubation');
  
  if (calculatedCountElement) {
    calculatedCountElement.textContent = calculatedCount;
  }
  
  // Calculate median incubation period from correct calculations
  if (calculatedCount > 0 && medianIncubationElement) {
    const incubationValues = Object.values(gameState.calculatedIncubations).sort((a, b) => a - b);
    const median = incubationValues.length % 2 === 0 
      ? (incubationValues[incubationValues.length / 2 - 1] + incubationValues[incubationValues.length / 2]) / 2
      : incubationValues[Math.floor(incubationValues.length / 2)];
    medianIncubationElement.textContent = median;
  } else if (medianIncubationElement) {
    medianIncubationElement.textContent = '--';
  }
  
  // Enable/disable button based on completion
  const proceedButton = document.getElementById('proceed-to-curve');
  
  if (proceedButton) {
    // Update game state and button based on completion
    gameState.allCalculationsComplete = (calculatedCount === totalCases);
    proceedButton.disabled = !gameState.allCalculationsComplete;
    
    if (gameState.allCalculationsComplete) {
      proceedButton.textContent = 'Proceed to Epi Curve';
      proceedButton.classList.remove('btn--secondary');
      proceedButton.classList.add('btn--primary');
    } else {
      proceedButton.textContent = `Calculations Needed: ${totalCases - calculatedCount} remaining`;
      proceedButton.classList.remove('btn--primary');
      proceedButton.classList.add('btn--secondary');
    }
  }
}

// Case data table functions
function populateCaseTable() {
  console.log('Populating case table...');
  const tbody = document.getElementById('case-table-body');
  if (!tbody) {
    console.error('Case table body not found');
    return;
  }
  
  tbody.innerHTML = '';
  
  gameData.cases.forEach(caseData => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${caseData.id}</td>
      <td>${caseData.age}</td>
      <td>${caseData.sex}</td>
      <td>${formatDateTime(caseData.dining_datetime)}</td>
      <td>${formatDateTime(caseData.onset_datetime)}</td>
      <td class="symptoms">${caseData.symptoms.join(', ')}</td>
      <td class="${caseData.hospitalized ? 'hospitalized-yes' : ''}">${caseData.hospitalized ? 'Yes' : 'No'}</td>
      <td class="incubation-input-cell">
        <div class="incubation-calculation">
          <input type="number" 
                 id="incubation-input-${caseData.id}" 
                 class="incubation-input" 
                 placeholder="Hours" 
                 min="1" 
                 max="168"
                 onchange="validateIncubation(${caseData.id})">
          <span class="incubation-status pending" id="status-icon-${caseData.id}">?</span>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function sortCases(sortBy) {
  console.log('Sorting cases by:', sortBy);
  const sortedCases = [...gameData.cases].sort((a, b) => {
    if (sortBy === 'age') {
      return a.age - b.age;
    } else if (sortBy === 'dining_date' || sortBy === 'onset_date') {
      return new Date(a[sortBy.replace('_date', '_datetime')]) - new Date(b[sortBy.replace('_date', '_datetime')]);
    } else {
      return a[sortBy] - b[sortBy];
    }
  });
  
  const tbody = document.getElementById('case-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  sortedCases.forEach(caseData => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${caseData.id}</td>
      <td>${caseData.age}</td>
      <td>${caseData.sex}</td>
      <td>${formatDateTime(caseData.dining_datetime)}</td>
      <td>${formatDateTime(caseData.onset_datetime)}</td>
      <td class="symptoms">${caseData.symptoms.join(', ')}</td>
      <td class="${caseData.hospitalized ? 'hospitalized-yes' : ''}">${caseData.hospitalized ? 'Yes' : 'No'}</td>
      <td class="incubation-input-cell">
        <div class="incubation-calculation">
          <input type="number" 
                 id="incubation-input-${caseData.id}" 
                 class="incubation-input" 
                 placeholder="Hours" 
                 min="1" 
                 max="168"
                 value="${gameState.calculatedIncubations[caseData.id] || ''}"
                 onchange="validateIncubation(${caseData.id})">
          <span class="incubation-status ${gameState.calculatedIncubations[caseData.id] ? 'correct' : 'pending'}" 
                id="status-icon-${caseData.id}">
            ${gameState.calculatedIncubations[caseData.id] ? '✓' : '?'}
          </span>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  // Re-apply validation styling
  Object.keys(gameState.calculatedIncubations).forEach(caseId => {
    const input = document.getElementById(`incubation-input-${caseId}`);
    if (input) {
      input.classList.add('correct');
    }
  });
}

function formatDateTime(dateTimeString) {
  return new Date(dateTimeString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Reference panel functions
function populateReferencePanel() {
  sortReferencePanel('id');
}

function sortReferencePanel(sortBy) {
  const referenceList = document.getElementById('reference-list');
  if (!referenceList) return;
  
  referenceList.innerHTML = '';
  
  let sortedCases = [...gameData.cases];
  
  switch(sortBy) {
    case 'onset_date':
      sortedCases.sort((a, b) => new Date(a.onset_datetime) - new Date(b.onset_datetime));
      break;
    case 'incubation':
      sortedCases.sort((a, b) => a.incubation_hours - b.incubation_hours);
      break;
    default:
      sortedCases.sort((a, b) => a.id - b.id);
  }
  
  sortedCases.forEach(caseData => {
    const incubationClass = caseData.incubation_hours < 24 ? 'incubation-short' :
                          caseData.incubation_hours <= 48 ? 'incubation-medium' : 'incubation-long';
    
    const referenceItem = document.createElement('div');
    referenceItem.className = `reference-item ${incubationClass}`;
    referenceItem.innerHTML = `
      <div><span class="case-id">Case #${caseData.id}</span>: <span class="onset-date">${formatDateTime(caseData.onset_datetime)}</span></div>
      <div>Incubation: <span class="incubation-period">${caseData.incubation_hours} hours</span></div>
    `;
    referenceList.appendChild(referenceItem);
  });
}

function updateCalculatedMedianDisplay() {
  const calculatedCount = Object.keys(gameState.calculatedIncubations).length;
  const displayElement = document.getElementById('calculated-median-display');
  if (!displayElement) return;
  
  if (calculatedCount > 0) {
    const incubationValues = Object.values(gameState.calculatedIncubations).sort((a, b) => a - b);
    const median = incubationValues.length % 2 === 0 
      ? (incubationValues[incubationValues.length / 2 - 1] + incubationValues[incubationValues.length / 2]) / 2
      : incubationValues[Math.floor(incubationValues.length / 2)];
    displayElement.textContent = median;
  } else {
    displayElement.textContent = '--';
  }
}

// Epi curve construction
let placedCases = {};
const datesToIndices = {
  '2023-06-19': 0, '2023-06-20': 1, '2023-06-21': 2, '2023-06-22': 3, '2023-06-23': 4,
  '2023-06-24': 5, '2023-06-25': 6, '2023-06-26': 7, '2023-06-27': 8, '2023-06-28': 9
};

function initializeCurveBuilder() {
  createCaseBlocks();
  createChartColumns();
  setupDragAndDrop();
}

function createCaseBlocks() {
  const caseBlocksContainer = document.getElementById('case-blocks');
  if (!caseBlocksContainer) return;
  
  caseBlocksContainer.innerHTML = '';
  
  gameData.cases.forEach(caseData => {
    const block = document.createElement('div');
    block.className = 'case-block';
    block.textContent = caseData.id;
    block.draggable = true;
    block.dataset.caseId = caseData.id;
    block.dataset.onsetDate = caseData.onset_datetime.split(' ')[0]; // Extract date part
    caseBlocksContainer.appendChild(block);
  });
}

function createChartColumns() {
  const chartColumnsContainer = document.getElementById('chart-columns');
  if (!chartColumnsContainer) return;
  
  chartColumnsContainer.innerHTML = '';
  
  for (let i = 0; i < 10; i++) {
    const column = document.createElement('div');
    column.className = 'chart-column';
    column.dataset.dateIndex = i;
    chartColumnsContainer.appendChild(column);
  }
}

function setupDragAndDrop() {
  const caseBlocks = document.querySelectorAll('.case-block');
  const chartColumns = document.querySelectorAll('.chart-column');
  
  caseBlocks.forEach(block => {
    block.addEventListener('dragstart', handleDragStart);
    block.addEventListener('dragend', handleDragEnd);
  });
  
  chartColumns.forEach(column => {
    column.addEventListener('dragover', handleDragOver);
    column.addEventListener('drop', handleDrop);
    column.addEventListener('dragenter', handleDragEnter);
    column.addEventListener('dragleave', handleDragLeave);
  });
}

function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.caseId);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.target.classList.add('drop-zone');
}

function handleDragLeave(e) {
  if (!e.target.contains(e.relatedTarget)) {
    e.target.classList.remove('drop-zone');
  }
}

function handleDrop(e) {
  e.preventDefault();
  const caseId = e.dataTransfer.getData('text/plain');
  const caseBlock = document.querySelector(`[data-case-id="${caseId}"]`);
  const column = e.target.closest('.chart-column');
  
  if (column && caseBlock) {
    column.appendChild(caseBlock);
    caseBlock.classList.add('placed');
    caseBlock.draggable = false;
    placedCases[caseId] = parseInt(column.dataset.dateIndex);
  }
  
  column.classList.remove('drop-zone');
}

function resetCurve() {
  const caseBlocksContainer = document.getElementById('case-blocks');
  const caseBlocks = document.querySelectorAll('.case-block');
  
  caseBlocks.forEach(block => {
    block.classList.remove('placed');
    block.draggable = true;
    if (caseBlocksContainer) {
      caseBlocksContainer.appendChild(block);
    }
  });
  
  placedCases = {};
  const feedbackElement = document.getElementById('curve-feedback');
  if (feedbackElement) {
    feedbackElement.classList.add('hidden');
  }
  const nextButton = document.getElementById('curve-next-btn');
  if (nextButton) {
    nextButton.disabled = true;
  }
}

function checkCurve() {
  let correct = 0;
  let total = gameData.cases.length;
  
  gameData.cases.forEach(caseData => {
    const correctIndex = datesToIndices[caseData.onset_datetime.split(' ')[0]];
    const placedIndex = placedCases[caseData.id.toString()];
    
    if (placedIndex === correctIndex) {
      correct++;
    }
  });
  
  const accuracy = (correct / total) * 100;
  const feedback = document.getElementById('curve-feedback');
  
  if (feedback) {
    if (accuracy >= 80) {
      feedback.className = 'feedback success';
      feedback.textContent = `Excellent! You placed ${correct} out of ${total} cases correctly (${accuracy.toFixed(1)}% accuracy).`;
      gameState.scores.curve = Math.round((accuracy / 100) * 30);
      gameState.curveComplete = true;
      const nextButton = document.getElementById('curve-next-btn');
      if (nextButton) nextButton.disabled = false;
    } else if (accuracy >= 60) {
      feedback.className = 'feedback warning';
      feedback.textContent = `Good effort! You placed ${correct} out of ${total} cases correctly (${accuracy.toFixed(1)}% accuracy). Try to improve your accuracy.`;
      gameState.scores.curve = Math.round((accuracy / 100) * 30);
      gameState.curveComplete = true;
      const nextButton = document.getElementById('curve-next-btn');
      if (nextButton) nextButton.disabled = false;
    } else {
      feedback.className = 'feedback error';
      feedback.textContent = `You placed ${correct} out of ${total} cases correctly (${accuracy.toFixed(1)}% accuracy). Please review the case data and try again.`;
      gameState.scores.curve = Math.round((accuracy / 100) * 30);
    }
    
    feedback.classList.remove('hidden');
  }
}

// Disease identification functions
function selectDisease(diseaseName) {
  document.querySelectorAll('.disease-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  event.target.closest('.disease-option').classList.add('selected');
  gameState.userAnswers.selectedDisease = diseaseName;
  
  const radioButton = event.target.closest('.disease-option').querySelector('input[type="radio"]');
  if (radioButton) radioButton.checked = true;
}

function selectOutbreakType(outbreakType) {
  document.querySelectorAll('.outbreak-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  event.target.closest('.outbreak-option').classList.add('selected');
  gameState.userAnswers.outbreakType = outbreakType;
  
  const radioButton = event.target.closest('.outbreak-option').querySelector('input[type="radio"]');
  if (radioButton) radioButton.checked = true;
}

// Score calculation functions
function calculateScores() {
  // Calculate incubation period score (20 points)
  const totalCorrectIncubations = Object.keys(gameState.calculatedIncubations).length;
  gameState.scores.incubation = Math.round((totalCorrectIncubations / 30) * 20);
  
  // Get user answers
  const overallRateInput = document.getElementById('overall-attack-rate');
  const caesarRateInput = document.getElementById('caesar-rate');
  const chickenRateInput = document.getElementById('chicken-rate');
  const tiramisuRateInput = document.getElementById('tiramisu-rate');
  const foodVehicleSelect = document.getElementById('food-vehicle');
  
  gameState.userAnswers.overallAttackRate = overallRateInput ? parseFloat(overallRateInput.value) || 0 : 0;
  gameState.userAnswers.caesarRate = caesarRateInput ? parseFloat(caesarRateInput.value) || 0 : 0;
  gameState.userAnswers.chickenRate = chickenRateInput ? parseFloat(chickenRateInput.value) || 0 : 0;
  gameState.userAnswers.tiramisuRate = tiramisuRateInput ? parseFloat(tiramisuRateInput.value) || 0 : 0;
  gameState.userAnswers.foodVector = foodVehicleSelect ? foodVehicleSelect.value : '';
  
  // Disease identification scoring (20 points total)
  let diseaseScore = 0;
  if (gameState.userAnswers.selectedDisease === gameData.correctAnswers.disease) {
    diseaseScore = 20;
  }
  gameState.scores.disease = diseaseScore;
  
  // Outbreak type scoring (15 points)
  gameState.scores.outbreak = gameState.userAnswers.outbreakType === gameData.correctAnswers.outbreakType ? 15 : 0;
  
  // Attack rate scoring (15 points total)
  let attackScore = 0;
  
  // Overall attack rate (3 points)
  if (Math.abs(gameState.userAnswers.overallAttackRate - gameData.correctAnswers.overallAttackRate) <= 1) {
    attackScore += 3;
  }
  
  // Food-specific rates (9 points total) - Updated with cross-tabulation data
  const correctCaesarRate = (25 / (25 + 80)) * 100; // 23.8%
  const correctChickenRate = (28 / (28 + 120)) * 100; // 18.9%
  const correctTiramisuRate = (20 / (20 + 100)) * 100; // 16.7%
  
  if (Math.abs(gameState.userAnswers.caesarRate - correctCaesarRate) <= 2) attackScore += 3;
  if (Math.abs(gameState.userAnswers.chickenRate - correctChickenRate) <= 2) attackScore += 3;
  if (Math.abs(gameState.userAnswers.tiramisuRate - correctTiramisuRate) <= 2) attackScore += 3;
  
  // Food vehicle identification (3 points)
  if (gameState.userAnswers.foodVector === gameData.correctAnswers.foodVector) {
    attackScore += 3;
  }
  
  gameState.scores.attack = attackScore;
  gameState.scores.total = gameState.scores.incubation + gameState.scores.curve + gameState.scores.disease + gameState.scores.outbreak + gameState.scores.attack;
}

function generateReport() {
  updateScoreDisplay();
  generateInvestigationReport();
  generateFeedback();
}

function updateScoreDisplay() {
  const elements = {
    totalScore: document.getElementById('total-score'),
    incubationScore: document.getElementById('incubation-score'),
    curveScore: document.getElementById('curve-score'),
    diseaseScore: document.getElementById('disease-score'),
    outbreakScore: document.getElementById('outbreak-score'),
    attackScore: document.getElementById('attack-score'),
    gradeElement: document.getElementById('score-grade')
  };
  
  if (elements.totalScore) elements.totalScore.textContent = gameState.scores.total;
  if (elements.incubationScore) elements.incubationScore.textContent = `${gameState.scores.incubation}/20`;
  if (elements.curveScore) elements.curveScore.textContent = `${gameState.scores.curve}/30`;
  if (elements.diseaseScore) elements.diseaseScore.textContent = `${gameState.scores.disease}/20`;
  if (elements.outbreakScore) elements.outbreakScore.textContent = `${gameState.scores.outbreak}/15`;
  if (elements.attackScore) elements.attackScore.textContent = `${gameState.scores.attack}/15`;
  
  if (elements.gradeElement) {
    if (gameState.scores.total >= 85) {
      elements.gradeElement.textContent = 'Excellent';
      elements.gradeElement.className = 'score-grade excellent';
    } else if (gameState.scores.total >= 70) {
      elements.gradeElement.textContent = 'Good';
      elements.gradeElement.className = 'score-grade good';
    } else {
      elements.gradeElement.textContent = 'Needs Improvement';
      elements.gradeElement.className = 'score-grade needs-improvement';
    }
  }
}

function generateInvestigationReport() {
  const calculatedMedian = Object.keys(gameState.calculatedIncubations).length > 0 
    ? Object.values(gameState.calculatedIncubations).sort((a, b) => a - b)[Math.floor(Object.values(gameState.calculatedIncubations).length / 2)]
    : 24;
    
  const reportContent = document.getElementById('report-content');
  if (!reportContent) return;
  
  reportContent.innerHTML = `
    <div class="report-section">
      <h4>Outbreak Description</h4>
      <p>On June 19, 2023, the health department received reports of gastrointestinal illness among patrons of Bella Vista Restaurant. A total of 30 confirmed and probable cases were identified among individuals who dined at the establishment between June 18-26, 2023.</p>
    </div>
    
    <div class="report-section">
      <h4>Epidemiological Findings</h4>
      <p><strong>Attack Rate:</strong> 30 ill among 180 total patrons (16.7% overall attack rate)</p>
      <p><strong>Epidemic Curve:</strong> The outbreak exhibited a classic point-source pattern with a rapid rise to peak incidence around June 21-22, followed by a gradual decline.</p>
      <p><strong>Incubation Period:</strong> Based on your calculations, the median incubation period was approximately ${calculatedMedian} hours, consistent with Salmonella enteritidis infection.</p>
      <p><strong>Symptoms:</strong> All cases reported diarrhea, with additional symptoms including abdominal cramps (90%), nausea (80%), fever (70%), and vomiting (60%). Four cases required hospitalization.</p>
    </div>
    
    <div class="report-section">
      <h4>Food-Specific Attack Rates</h4>
      <ul>
        <li><strong>Caesar Salad:</strong> 23.8% attack rate among those who consumed it</li>
        <li><strong>Chicken Parmesan:</strong> 18.9% attack rate among those who consumed it</li>
        <li><strong>Tiramisu:</strong> 16.7% attack rate among those who consumed it</li>
      </ul>
      <p>Statistical analysis identified Caesar salad as the most likely vehicle of infection based on the highest attack rate differential between exposed and unexposed individuals.</p>
    </div>
    
    <div class="report-section">
      <h4>Laboratory Results</h4>
      <p>Stool specimens from 15 cases were submitted for laboratory testing. Salmonella Enteritidis was confirmed in 12 specimens. Environmental samples from the restaurant kitchen identified the same organism in egg-containing ingredients used in Caesar salad dressing preparation.</p>
    </div>
    
    <div class="report-section">
      <h4>Environmental Health Investigation</h4>
      <p>Inspection revealed improper storage temperatures for eggs used in Caesar dressing preparation, along with inadequate hand hygiene practices among food handlers. The restaurant voluntarily ceased Caesar salad service and implemented corrective measures.</p>
    </div>
    
    <div class="report-section">
      <h4>Control Measures</h4>
      <ul>
        <li>Immediate cessation of Caesar salad service</li>
        <li>Comprehensive sanitization of food preparation areas</li>
        <li>Staff retraining on food safety protocols</li>
        <li>Implementation of proper egg storage and handling procedures</li>
        <li>Enhanced surveillance for additional cases</li>
      </ul>
    </div>
  `;
}

function generateFeedback() {
  const feedbackContent = document.getElementById('feedback-content');
  if (!feedbackContent) return;
  
  const feedbackItems = [];
  
  // Incubation calculation feedback
  const calculatedCount = Object.keys(gameState.calculatedIncubations).length;
  if (calculatedCount === 30) {
    feedbackItems.push({
      type: 'correct',
      title: 'Incubation Period Calculations',
      message: 'Perfect! You correctly calculated all 30 incubation periods. This is crucial for identifying the causative agent.'
    });
  } else {
    feedbackItems.push({
      type: 'incorrect',
      title: 'Incubation Period Calculations',
      message: `You correctly calculated ${calculatedCount} out of 30 incubation periods. Remember: incubation period = time from exposure (dining) to illness onset.`
    });
  }
  
  // Curve construction feedback
  if (gameState.scores.curve >= 24) {
    feedbackItems.push({
      type: 'correct',
      title: 'Epi Curve Construction',
      message: 'Excellent work constructing the epidemic curve! You correctly identified the point-source pattern typical of foodborne outbreaks.'
    });
  } else {
    feedbackItems.push({
      type: 'incorrect',
      title: 'Epi Curve Construction',
      message: 'Review the relationship between exposure date and illness onset. In foodborne outbreaks, cases cluster around the same incubation period after exposure.'
    });
  }
  
  // Disease identification feedback
  if (gameState.userAnswers.selectedDisease === gameData.correctAnswers.disease) {
    feedbackItems.push({
      type: 'correct',
      title: 'Disease Identification',
      message: 'Correct! Salmonella Enteritidis was the causative agent. Your calculated median incubation period was a key clue.'
    });
  } else {
    feedbackItems.push({
      type: 'incorrect',
      title: 'Disease Identification',
      message: `You selected ${gameState.userAnswers.selectedDisease}. The correct answer was Salmonella Enteritidis, which has a typical incubation period of 12-72 hours (median 24 hours).`
    });
  }
  
  // Outbreak type feedback
  if (gameState.userAnswers.outbreakType === gameData.correctAnswers.outbreakType) {
    feedbackItems.push({
      type: 'correct',
      title: 'Outbreak Classification',
      message: 'Correct! This was a point source outbreak, characterized by rapid rise to peak and gradual decline over time.'
    });
  } else {
    feedbackItems.push({
      type: 'incorrect',
      title: 'Outbreak Classification',
      message: 'This was a point source outbreak. The epidemic curve shows rapid rise to peak incidence followed by gradual decline, typical when people are exposed to the same source over a brief period.'
    });
  }
  
  // Attack rate feedback
  if (gameState.scores.attack >= 12) {
    feedbackItems.push({
      type: 'correct',
      title: 'Attack Rate Analysis',
      message: 'Great job with the attack rate calculations! You correctly identified Caesar salad as the most likely vehicle based on the attack rate analysis.'
    });
  } else {
    feedbackItems.push({
      type: 'incorrect',
      title: 'Attack Rate Analysis',
      message: 'Remember: Attack rate = (number of cases exposed / total number exposed) × 100. Compare rates between those who ate specific foods versus those who did not.'
    });
  }
  
  feedbackContent.innerHTML = feedbackItems.map(item => `
    <div class="feedback-item ${item.type}">
      <h4>${item.title}</h4>
      <p>${item.message}</p>
    </div>
  `).join('');
}

function restartGame() {
  // Reset game state
  gameState.currentScreen = 0;
  gameState.scores = { incubation: 0, curve: 0, disease: 0, outbreak: 0, attack: 0, total: 0 };
  gameState.userAnswers = {
    selectedDisease: null,
    outbreakType: null,
    overallAttackRate: null,
    caesarRate: null,
    chickenRate: null,
    tiramisuRate: null,
    foodVector: null
  };
  gameState.calculatedIncubations = {};
  gameState.curveComplete = false;
  gameState.allCalculationsComplete = false;
  placedCases = {};
  
  // Hide all screens and show intro
  gameState.screens.forEach(screenId => {
    document.getElementById(screenId).classList.remove('active');
  });
  gameState.showScreen(gameState.screens[0]);
  
  // Reset forms
  document.querySelectorAll('input, select').forEach(input => {
    input.value = '';
    if (input.type === 'radio') {
      input.checked = false;
    }
    input.classList.remove('correct', 'incorrect');
  });
  
  // Reset selections
  document.querySelectorAll('.selected').forEach(element => {
    element.classList.remove('selected');
  });
  
  // Reset buttons
  const curveNextBtn = document.getElementById('curve-next-btn');
  if (curveNextBtn) curveNextBtn.disabled = true;
  
  const curveFeedback = document.getElementById('curve-feedback');
  if (curveFeedback) curveFeedback.classList.add('hidden');
}