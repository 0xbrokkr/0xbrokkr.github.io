$(document).ready(function() {
  modal();
  tocbotinit();
});
function modal() {
  var modal = document.getElementById("myModal");
  var i;

  var img = document.getElementsByClassName("writeup-img");
  var modalImg = document.getElementById("img01");

  for(i=0;i< img.length;i++) {
    img[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function tocbotinit() {
  tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.page-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h3, .heading-text',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
  // Remove the ugly numbers
  orderedList: false,
  // Fix offset
  includeHtml: true
  });
}