const setupImageModal = (trigger, dialog, closeButton) => {
    let closeFallback;

    const finishClose = () => {
        window.clearTimeout(closeFallback);
        if (dialog.open) {
            dialog.close();
        }
        dialog.classList.remove("is-closing");
    };

    const close = () => {
        if (!dialog.open || dialog.classList.contains("is-closing")) {
            return;
        }
        dialog.classList.remove("is-open");
        dialog.classList.add("is-closing");
        closeFallback = window.setTimeout(finishClose, 250);
    };

    trigger.addEventListener("click", () => {
        dialog.showModal();
        window.requestAnimationFrame(() => dialog.classList.add("is-open"));
        closeButton.focus();
    });

    closeButton.addEventListener("click", close);
    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            close();
        }
    });
    dialog.addEventListener("cancel", event => {
        event.preventDefault();
        close();
    });
    dialog.addEventListener("transitionend", event => {
        if (event.target === dialog && event.propertyName === "opacity"
            && dialog.classList.contains("is-closing")) {
            finishClose();
        }
    });
};

const certificateDialog = document.getElementById("certificate-dialog");
setupImageModal(
    document.getElementById("open-certificate"),
    certificateDialog,
    certificateDialog.querySelector(".image-modal-close")
);

const researchPosterDialog = document.getElementById("research-poster-dialog");
setupImageModal(
    document.getElementById("open-research-poster"),
    researchPosterDialog,
    researchPosterDialog.querySelector(".image-modal-close")
);

const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
    const accessibleTitle = heroTitle.textContent.replace(/\s+/g, " ").trim();
    const textNodes = [];
    const titleLetters = [];
    const textWalker = document.createTreeWalker(heroTitle, NodeFilter.SHOW_TEXT);
    while (textWalker.nextNode()) {
        textNodes.push(textWalker.currentNode);
    }

    let letterIndex = 0;
    for (const textNode of textNodes) {
        const text = textNode.textContent.trim();
        if (!text) {
            textNode.remove();
            continue;
        }

        const fragment = document.createDocumentFragment();
        for (const character of text) {
            if (character === " ") {
                fragment.append(document.createTextNode(character));
                continue;
            }

            const letter = document.createElement("span");
            letter.className = "hero-title-letter";
            letter.textContent = character;
            letter.style.setProperty("--letter-index", letterIndex++);
            titleLetters.push(letter);
            fragment.append(letter);
        }
        textNode.replaceWith(fragment);
    }

    heroTitle.setAttribute("aria-label", accessibleTitle);
    heroTitle.classList.add("is-animating");

    const revealStats = () => {
        const statItems = document.querySelectorAll(".hero-stats .stat-item");
        const statDividers = document.querySelectorAll(".hero-stats .stat-divider");

        statItems.forEach((item, index) => {
            item.style.setProperty("--stat-delay", `${100 + index * 120}ms`);
            item.classList.add("is-intro-animating");
        });
        statDividers.forEach((divider, index) => {
            divider.style.setProperty("--stat-delay", `${(index + 1) * 200}ms`);
            divider.classList.add("is-intro-animating");
        });
    };

    const revealSupportingContent = () => {
        const supportingContent = document.querySelectorAll(".hero-subtitle, .hero-bio");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            supportingContent.forEach(element => element.classList.add("is-intro-animating"));
            revealStats();
            return;
        }

        let completedAnimations = 0;
        supportingContent.forEach(element => {
            element.addEventListener("animationend", event => {
                if (event.animationName !== "hero-content-fade-in") {
                    return;
                }

                completedAnimations += 1;
                if (completedAnimations === supportingContent.length) {
                    revealStats();
                }
            }, { once: true });
            element.classList.add("is-intro-animating");
        });

        if (supportingContent.length === 0) {
            revealStats();
        }
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lastTitleLetter = titleLetters[titleLetters.length - 1];
    if (reducedMotion || !lastTitleLetter) {
        revealSupportingContent();
    } else {
        const toMilliseconds = value => {
            const duration = Number.parseFloat(value);
            return value.endsWith("ms") ? duration : duration * 900;
        };
        const titleTiming = window.getComputedStyle(lastTitleLetter);
        const totalRevealDuration = toMilliseconds(titleTiming.animationDelay)
            + toMilliseconds(titleTiming.animationDuration);
        window.setTimeout(revealSupportingContent, totalRevealDuration / 2);
    }
}

const siteHeader = document.querySelector(".site-header");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenisInstance = null;
if (!prefersReducedMotion) {
    if (typeof window.Lenis !== "function") {
        console.error("Lenis failed to load; smooth scrolling was not initialized.");
    } else {
        lenisInstance = new window.Lenis({
            autoRaf: true,
            lerp: 0.08,
            smoothWheel: true,
            syncTouch: false
        });

        const scrollToAnchor = target => {
            if (target.id === "profile") {
                lenisInstance.scrollTo(0);
                return;
            }

            const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
            const headerOffset = siteHeader.getBoundingClientRect().height + 16;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY
                - Math.max(scrollMarginTop, headerOffset);
            lenisInstance.scrollTo(Math.max(0, targetPosition));
        };

        document.addEventListener("click", event => {
            const link = event.target instanceof Element
                ? event.target.closest('a[href^="#"]')
                : null;
            if (!link || event.defaultPrevented || event.button !== 0
                || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
                || (link.target && link.target !== "_self")) {
                return;
            }

            const href = link.getAttribute("href");
            if (!href || href === "#") {
                return;
            }

            const target = document.getElementById(href.slice(1));
            if (!target) {
                return;
            }

            event.preventDefault();
            if (window.location.hash !== href) {
                window.history.pushState(null, "", href);
            }
            scrollToAnchor(target);
        });

        window.addEventListener("popstate", () => {
            const hash = window.location.hash.slice(1);
            if (!hash) {
                lenisInstance.scrollTo(0);
                return;
            }

            const target = document.getElementById(hash);
            if (target) {
                scrollToAnchor(target);
            }
        });
    }
}

const heroSection = document.querySelector(".hero-section");
let heroParallaxFrame = null;
const updateHeroParallax = () => {
    if (!heroSection || prefersReducedMotion) {
        return;
    }

    if (heroParallaxFrame !== null) {
        return;
    }

    heroParallaxFrame = window.requestAnimationFrame(() => {
        heroSection.style.setProperty("--hero-parallax-scroll", `${window.scrollY}px`);
        heroParallaxFrame = null;
    });
};

if (!prefersReducedMotion) {
    window.addEventListener("scroll", updateHeroParallax, { passive: true });
    updateHeroParallax();
}

const navSectionLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'))
    .map(link => ({
        link,
        section: document.getElementById(link.getAttribute("href").slice(1))
    }))
    .filter(item => item.section);

if (navSectionLinks.length > 0) {
    let pendingNavSection = null;

    const setCurrentNavSection = activeSection => {
        navSectionLinks.forEach(({ link, section }) => {
            if (section === activeSection) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const updateCurrentNavLink = () => {
        siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
        const activationPoint = siteHeader.getBoundingClientRect().bottom + 64;
        if (pendingNavSection) {
            setCurrentNavSection(pendingNavSection.section);
            if (pendingNavSection.section.getBoundingClientRect().top > activationPoint) {
                return;
            }
            pendingNavSection = null;
        }

        let currentSectionLink = navSectionLinks[0];

        for (const item of navSectionLinks) {
            if (item.section.getBoundingClientRect().top > activationPoint) {
                break;
            }
            currentSectionLink = item;
        }

        setCurrentNavSection(currentSectionLink.section);
    };

    const cancelPendingNavSection = () => {
        if (!pendingNavSection) {
            return;
        }
        pendingNavSection = null;
        updateCurrentNavLink();
    };

    document.addEventListener("click", event => {
        const link = event.target instanceof Element
            ? event.target.closest('.nav-links a[href^="#"]')
            : null;
        if (!link || event.button !== 0
            || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
            || (link.target && link.target !== "_self")) {
            return;
        }

        const selectedSection = navSectionLinks.find(item => item.link === link);
        if (selectedSection) {
            pendingNavSection = selectedSection;
            setCurrentNavSection(selectedSection.section);
        }
    });

    window.addEventListener("scroll", updateCurrentNavLink, { passive: true });
    window.addEventListener("resize", updateCurrentNavLink);
    window.addEventListener("pageshow", updateCurrentNavLink);
    window.addEventListener("wheel", cancelPendingNavSection, { passive: true });
    window.addEventListener("touchstart", cancelPendingNavSection, { passive: true });
    window.addEventListener("keydown", event => {
        if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
            cancelPendingNavSection();
        }
    });
    if (lenisInstance) {
        lenisInstance.on("scroll", updateCurrentNavLink);
    }
    updateCurrentNavLink();
}

const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
document.querySelectorAll(".project-pixel-grid").forEach(grid => {
    for (let index = 0; index < 40; index += 1) {
        const pixel = document.createElement("span");
        const row = Math.floor(index / 8);
        const column = index % 8;
        pixel.style.setProperty("--pixel-delay", `${(column * 28) + (row * 20)}ms`);
        grid.append(pixel);
    }
});

const revealProjectCard = element => {
    if (element.classList.contains("project-card")) {
        element.classList.add("is-pixel-revealed");
    }
};

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    scrollRevealElements.forEach(element => {
        element.classList.add("is-visible");
        revealProjectCard(element);
    });
} else {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            revealProjectCard(entry.target);
            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    scrollRevealElements.forEach(element => revealObserver.observe(element));
}

const uiClickSound = new Audio("assets/sounds/minecraft-ui-click.mp3");
uiClickSound.preload = "auto";
uiClickSound.volume = 0.6;

document.addEventListener("click", event => {
    const interactiveElement = event.target instanceof Element
        ? event.target.closest(
            'a[href], button, input:not([type="hidden"]), select, textarea, summary, label, ' +
            'dialog[open], ' +
            '[role="button"], [role="link"], [role="checkbox"], [role="switch"], ' +
            '[role="radio"], [role="tab"], [role^="menuitem"], ' +
            '[tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
        )
        : null;

    if (!interactiveElement || interactiveElement.matches(":disabled")
        || interactiveElement.getAttribute("aria-disabled") === "true"
        || (interactiveElement.matches("dialog[open]") && event.target !== interactiveElement)) {
        return;
    }

    uiClickSound.currentTime = 0;
    const playback = uiClickSound.play();
    if (playback && typeof playback.catch === "function") {
        playback.catch(error => console.error("Unable to play the UI click sound.", error));
    }
});