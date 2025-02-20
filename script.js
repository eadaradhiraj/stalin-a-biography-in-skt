function highlight(className) {
    // Remove highlights from all sentences
    const allSentences = document.querySelectorAll('span');
    allSentences.forEach(s => s.classList.remove('highlight'));

    // Highlight the corresponding sentences by class name
    const matchingSentences = document.querySelectorAll(`.${className}`);
    matchingSentences.forEach(s => s.classList.add('highlight'));
  }