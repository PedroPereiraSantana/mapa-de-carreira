document.getElementById('curriculo').onclick = function(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = '../assets/curriculo-me.pdf'; 
  link.download = 'Curriculo-Pedro-Santana.pdf'; 
  link.click();
};