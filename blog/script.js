document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");
    const postForm = document.getElementById("new-post-form");

    // Fetch existing posts from posts.json and display them
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                displayPost(post);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));

    // Handle the form submission
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new post object
        const newPost = {
            title,
            content,
            date: new Date().toLocaleDateString()
        };

        // Save the new post in the posts.json (simulated for this static file)
        fetch("posts.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(post => {
            // Display the new post
            displayPost(post);

            // Reset form inputs
            postForm.reset();
        })
        .catch(error => console.error("Error adding post:", error));
    });

    // Function to display a post on the page
    function displayPost(post) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        const postDate = document.createElement("p");
        postDate.textContent = `Published on: ${post.date}`;

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postDate);
        postDiv.appendChild(postContent);

        postsContainer.appendChild(postDiv);
    }
});
