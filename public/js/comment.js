// handles the comment form submission
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector('#comment-text').value.trim();
    const blogId = document.querySelector('#blog-id').value.trim();
  
    if (commentText && blogId) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ text: commentText, blog_id: blogId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);
  
  