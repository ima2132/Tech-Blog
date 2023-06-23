// handles the new post form submission
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

// handles the delete button click for posts
const delButtonHandler = async (event) => {
  if (event.target.classList.contains('delete-post')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    }
  }
};

// event listener for new post form submission
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

// event listener for delete button click
document.querySelector('.post-list').addEventListener('click', delButtonHandler);

