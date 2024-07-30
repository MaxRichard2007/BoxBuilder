let bodySection;

const initializebodySection = () => {
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

const createBox = () => {
  const jobsListWrapper = initializebodySection();

  // ایجاد عناصر جدید
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

  const jobInfoBlock = document.createElement("div");
  jobInfoBlock.classList.add("job-info-block");

  const jobDate = document.createElement("div");
  jobDate.classList.add("job-date");

  const userEmail = document.createElement("div");
  userEmail.classList.add("user-email");

  const jobsListFooter = document.createElement("div");
  jobsListFooter.classList.add("job-list-footer");

  const createElement = document.createElement("button");
  createElement.classList.add("createElement");

  const removeElement = document.createElement("button");
  removeElement.classList.add("removeElement");

  // اضافه کردن عناصر به jobsListWrapper
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
  jobsListFooter.appendChild(createElement);
  jobsListFooter.appendChild(removeElement);
};
