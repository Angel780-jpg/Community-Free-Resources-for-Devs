document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll("#tags button");
  const resources = document.querySelectorAll(".resource");

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTag = button.getAttribute("data-tag");

      resources.forEach((resource) => {
        if (selectedTag === "all") {
          resource.classList.remove("hidden");
        } else {
          const tags = resource
            .getAttribute("data-tags")
            .split(",")
            .map((tag) => tag.trim());
          if (tags.includes(selectedTag)) {
            resource.classList.remove("hidden");
          } else {
            resource.classList.add("hidden");
          }
        }
      });
    });
  });
  document.querySelector('[data-tag="all"]').click();
});
