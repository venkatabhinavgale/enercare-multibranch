window.addEventListener('load', function(){
  let tcToggle = document.querySelectorAll('.block-faqs--faq-container');
  tcToggle.forEach(function(tc) {
    tc.addEventListener("click", function() {
      let faqContent = tc.querySelector('.block-faqs--faq-answer-container');
      if (faqContent.getAttribute("aria-expanded") == "true") {
        faqContent.setAttribute("aria-expanded", "false");
        faqContent.setAttribute("data-state", "closed");
      } else {
        faqContent.setAttribute("aria-expanded", "true");
        faqContent.setAttribute("data-state", "open");
      }
    });
  });
  
});