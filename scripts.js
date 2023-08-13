document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const imageInput = document.querySelector('#image');
    const imagePreview = document.querySelector('#image-preview');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#content').value.trim();
        const video = document.querySelector('#video').value.trim();

        if (!title || !content) {
            alert('Title and content cannot be empty.');
            return;
        }

        if (video && !isValidVideoUrl(video)) {
            alert('Invalid video URL format.');
            return;
        }

        if (imageInput.files.length > 0) {
            const imageFile = imageInput.files[0];
            const imageUrl = URL.createObjectURL(imageFile);
            imagePreview.innerHTML = `<img src="${imageUrl}" alt="Image Preview" />`;
        }

        // Ask for user confirmation before submitting the form
        if (confirm('Are you sure you want to submit the post?')) {
            // Simulate submitting to the server
            console.log('Form submitted:', { title, content, video });
            // You can use AJAX or other methods to actually submit the form to the server
            form.reset();
            imagePreview.innerHTML = '';
        }
    });

    function isValidVideoUrl(url) {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}$/;
        return youtubeRegex.test(url);
    }

    // Clear image preview when input changes
    imageInput.addEventListener('change', function () {
        imagePreview.innerHTML = '';
    });
});
