document.querySelectorAll('a').forEach(link => {
    if (link.href.startsWith('http://')) {
      link.style.textDecoration = 'underline';
      link.style.textDecorationStyle = 'dotted';
    }
  });