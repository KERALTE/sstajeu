document.addEventListener('keydown', function(event) {
    switch(event.key) {
      case 'ArrowRight':
        navigateNext();
        break;
      case 'ArrowLeft':
        navigatePrevious();
        break;
    }
  });
  
  function navigateNext() {
    var currentPage = window.location.href;
    var nextPage = '';
  
    if (currentPage.endsWith('A0.html')) {
      nextPage = 'A1.html';
    } else if (currentPage.endsWith('A1.html')) {
      nextPage = 'A2.html';
    } else if (currentPage.endsWith('A2.html')) {
      nextPage = 'A3.html';
    } else if (currentPage.endsWith('A3.html')) {
      nextPage = 'A4.html';
    } else if (currentPage.endsWith('A4.html')) {
      nextPage = 'A5.html';
    } else if (currentPage.endsWith('A5.html')) {
      nextPage = 'A6.html';
    } else if (currentPage.endsWith('A6.html')) {
      nextPage = 'A0.html';
    }
  
    if (nextPage !== '') {
      window.location.href = nextPage;
    }
  }
  
  function navigatePrevious() {
    var currentPage = window.location.href;
    var previousPage = '';
  
    if (currentPage.endsWith('A0.html')) {
      previousPage = 'A6.html';
    } else if (currentPage.endsWith('A1.html')) {
      previousPage = 'A0.html';
    } else if (currentPage.endsWith('A2.html')) {
      previousPage = 'A1.html';
    } else if (currentPage.endsWith('A3.html')) {
      previousPage = 'A2.html';
    } else if (currentPage.endsWith('A4.html')) {
      previousPage = 'A3.html';
    } else if (currentPage.endsWith('A5.html')) {
      previousPage = 'A4.html';
    } else if (currentPage.endsWith('A6.html')) {
      previousPage = 'A5.html';
    }
  
    if (previousPage !== '') {
      window.location.href = previousPage;
    }
  }