export class Modal {
  content: Element | string;
  mount: HTMLElement | null;
  body: HTMLElement | null;
  contentContainer: HTMLElement;
  closeEl: HTMLElement | null; 

  constructor(container: string, content?: Element, closeEl?: string) {
    // document.querySelector(".contact-modal")?.remove();
    // const newContainer = document.createElement("div");
    // newContainer.classList.add("contact-modal");
    // document.body.appendChild(newContainer);
    this.closeEl = closeEl ? document.querySelector(closeEl) : null;
    this.content = content || `<p>No modal found</p>`;
    this.mount = document.querySelector(container);
    if (this.mount) this.mount.innerHTML = "";
    this.contentContainer = document.createElement("div");
    this.contentContainer.classList.add("content-container");
    this.body = document.querySelector("body");
    this.mount?.appendChild(this.contentContainer);
    this.mount?.addEventListener("click", (e) => {
      if (!this.contentContainer.contains(e.target as Node)) {
        this.closeModal();
      }
    });
    if (this.mount) {
      if (typeof this.content != 'string') {
        this.contentContainer.appendChild(this.content);  
      } else {
        this.contentContainer.innerHTML = this.content;  
      }
    }
  }
  init() {
    const contact = document.querySelector(".contactFlag");
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 120) {
        contact?.classList.add("fixed-contact");
        contact?.classList.remove("goingDown");
      } else {
        contact?.classList.remove("fixed-contact");
        contact?.classList.add("goingDown");
      }
    })
    contact?.addEventListener("click", () => {
      if (window.scrollY > 120) {
        this.openModal();
      }
    })
    if (this.closeEl) {
      this.closeEl.addEventListener("click", () => this.closeModal())
    }
    return this;
  }
  openModal() {
    if (this.mount) {
      if (typeof this.content != 'string') {
        this.contentContainer.innerHTML = "";
        this.contentContainer.appendChild(this.content);  
      } else {
        this.contentContainer.innerHTML = this.content;  
      }
      const closeBtn = document.createElement("div");
      closeBtn.innerHTML = `&#10005;`;
      closeBtn.classList.add("close-btn");
      this.contentContainer?.appendChild(closeBtn);
      closeBtn.addEventListener("click", () => {
        this.closeModal();
      });
      this.mount.classList.add("modal-open");
      this.body!.style.overflow = "hidden";
    }
  }
  closeModal() {
    if (this.mount) {
      this.mount.classList.remove("modal-open");
      this.body!.style.overflow = "unset";
    }
  }
}
