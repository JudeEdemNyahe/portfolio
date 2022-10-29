const setupTabs = () => {
    document.querySelectorAll(".side-nav__item").forEach((button) => {
        button.addEventListener("click", () => {
            const sidebar = button.parentElement; //side-nav
            const tabsContainer = sidebar.parentElement.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(
                `.experience__description--content[data-tab="${tabNumber}"]`
            );

            sidebar.querySelectorAll(".side-nav__item").forEach((button) => {
                button.classList.remove("side-nav__item--active");
            });

            tabsContainer
                .querySelectorAll(".experience__description--content")
                .forEach((tab) => {
                    tab.classList.remove("tabs__content-active");
                });
            button.classList.add("side-nav__item--active");
            tabToActivate.classList.add("tabs__content-active");
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    document.querySelectorAll(".side-nav").forEach((tabsContainer) => {
        tabsContainer.querySelector(".side-nav .side-nav__item").click();
    });
});