const contentDiv = document.getElementById('content');
    let isEditing = false;

    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        if (!isEditing) {
          const textarea = document.createElement('textarea');
          textarea.value = contentDiv.textContent || '';
          contentDiv.replaceWith(textarea);
          textarea.focus();
          isEditing = true;
          textarea.id = 'content';
        }
      }

      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        if (isEditing) {
          const newContent = document.createElement('div');
          newContent.textContent = contentDiv.value;
          newContent.id = 'content';
          contentDiv.replaceWith(newContent);
          isEditing = false;
        }
      }
    });