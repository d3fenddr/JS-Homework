document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const children = item.querySelector('ul');
      if (children) {
        children.hidden = !children.hidden;
      }
    });
  });