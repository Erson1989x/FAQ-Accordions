const accordionHeaders = document.querySelectorAll('.header');

accordionHeaders.forEach(header => {
    const content = header.nextElementSibling;
    const plusIcon = header.querySelector('.plus');
    const minusIcon = header.querySelector('.minus');
    const hColor = header.querySelector('h2');
    // Initialize max-height to 0
    content.style.maxHeight = '0';




    // Show only the plus icon by default
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';

    header.addEventListener('click', () => {


        // Toggle the active class on the header
        header.classList.toggle('active');
        hColor.classList.toggle('header-active');

    // Toggle the max-height on the content
      if (content.style.maxHeight === '0px') {
          content.style.maxHeight = content.scrollHeight + 'px';
          plusIcon.style.display = 'none';
          minusIcon.style.display = 'block';
    } else {
          content.style.maxHeight = '0';
          plusIcon.style.display = 'block';
          minusIcon.style.display = 'none';
        }
    });

});
