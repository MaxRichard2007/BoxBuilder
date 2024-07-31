document.addEventListener("DOMContentLoaded", () => {
  let bodySection;
  let headerSection;

  const initializeBodySection = () => {
    if (!bodySection) {
      bodySection = document.createElement("div");
      bodySection.classList.add("bodySection");

      const jobsListWrapper = document.createElement("div");
      jobsListWrapper.classList.add("jobs-list-wrapper");
      bodySection.appendChild(jobsListWrapper);

      document.body.appendChild(bodySection);
    }
    return bodySection.querySelector(".jobs-list-wrapper");
  };

  const initializeHeader = () => {
    if (!headerSection) {
      headerSection = document.createElement("div");
      headerSection.classList.add("header-section");

      const headerTopBar = document.createElement("div");
      headerTopBar.classList.add("header-top-bar");

      const topBarBlockLeft = document.createElement("div");
      topBarBlockLeft.classList.add("top-bar-block", "left");

      const topBarBlock = document.createElement("div");
      topBarBlock.classList.add("top-bar-block", "center");

      const topBarBlockRight = document.createElement("div");
      topBarBlockRight.classList.add("top-bar-block", "right");

      const img = document.createElement("img");
      img.classList.add("top-bar-logo");
      img.src =
        "https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg";

      headerTopBar.appendChild(topBarBlockLeft);
      headerTopBar.appendChild(topBarBlock);
      topBarBlock.appendChild(img);
      headerTopBar.appendChild(topBarBlockRight);
      headerSection.appendChild(headerTopBar);

      bodySection.prepend(headerSection);
    }
  };

  const createBox = () => {
    const jobsListWrapper = initializeBodySection();
    initializeHeader();

    const jobsList = document.createElement("div");
    jobsList.classList.add("jobs-list");

    const jobsListHeading = document.createElement("div");
    jobsListHeading.classList.add("jobs-list-heading");

    const jobsListBody = document.createElement("div");
    jobsListBody.classList.add("jobs-list-body");
    jobsListBody.id = "new-jobs";

    const li = document.createElement("li");

    const jobBlock = document.createElement("div");
    jobBlock.classList.add("job-block");
    jobBlock.id = "new-jobs-test";

    const jobNameBlock = document.createElement("div");
    jobNameBlock.classList.add("job-name-block");

    const jobName = document.createElement("div");
    jobName.classList.add("job-name");
    jobName.textContent = "Job name";

    const jobInfoBlock = document.createElement("div");
    jobInfoBlock.classList.add("job-info-block");

    const jobDate = document.createElement("div");
    jobDate.classList.add("job-date");
    jobDate.textContent = "14 Feb";

    const userEmail = document.createElement("div");
    userEmail.classList.add("user-email");
    userEmail.textContent = "max536854@gmail.com";

    const jobsListFooter = document.createElement("div");
    jobsListFooter.classList.add("job-list-footer");

    const createElementButton = document.createElement("button");
    createElementButton.classList.add("createElement");
    createElementButton.textContent = "Create Element";
    createElementButton.addEventListener("click", createElement);

    const removeElement = document.createElement("button");
    removeElement.classList.add("removeElement");
    removeElement.textContent = "Remove Element";

    jobsListWrapper.appendChild(jobsList);
    jobsList.appendChild(jobsListHeading);
    jobsList.appendChild(jobsListBody);
    jobsListBody.appendChild(li);
    li.appendChild(jobBlock);
    jobBlock.appendChild(jobNameBlock);
    jobNameBlock.appendChild(jobName);
    jobBlock.appendChild(jobInfoBlock);
    jobInfoBlock.appendChild(jobDate);
    jobInfoBlock.appendChild(userEmail);
    jobsList.appendChild(jobsListFooter);
    jobsListFooter.appendChild(createElementButton);
    jobsListFooter.appendChild(removeElement);
  };

  const createElement = () => {
    const jobsListBody = document.querySelector(".jobs-list-body");

    const li = document.createElement("li");

    const jobBlock = document.createElement("div");
    jobBlock.classList.add("job-block");

    const jobNameBlock = document.createElement("div");
    jobNameBlock.classList.add("job-name-block");

    const jobName = document.createElement("div");
    jobName.classList.add("job-name");
    jobName.textContent = "New Job";

    const jobInfoBlock = document.createElement("div");
    jobInfoBlock.classList.add("job-info-block");

    const jobDate = document.createElement("div");
    jobDate.classList.add("job-date");
    jobDate.textContent = "14 Feb";

    const userEmail = document.createElement("div");
    userEmail.classList.add("user-email");
    userEmail.textContent = "newuser@example.com";

    jobsListBody.appendChild(li);
    li.appendChild(jobBlock);
    jobBlock.appendChild(jobNameBlock);
    jobNameBlock.appendChild(jobName);
    jobBlock.appendChild(jobInfoBlock);
    jobInfoBlock.appendChild(jobDate);
    jobInfoBlock.appendChild(userEmail);
  };

  const createBoxButton = document.createElement("button");
  createBoxButton.classList.add("createBox");
  createBoxButton.textContent = "Create Box";
  createBoxButton.addEventListener("click", createBox);
  document.body.appendChild(createBoxButton);
});
