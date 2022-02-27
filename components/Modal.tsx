export class Modal {
  content: string;
  mount: HTMLElement | null;
  body: HTMLElement | null;
  contentContainer: HTMLElement;

  constructor(container: string, content?: string) {
    this.content = content
      ? content
      : `
        <div class="contact-form">
            <h2>HAVE A QUESTION?</h2>
            <p style="font-size:20px;line-height:1;margin:12px auto">We have answers.</p>
            <form name="modal-form" method="POST" data-netlify="true">
              <input type="hidden" name="modal-form" value="contact">
              <label for="email">Email Address</label>
              <input name="email" type="email" />
              <label for="name">Name</label>
              <input name="name" type="text" />
              <label for="message">Message</label>
              <textarea name="message" value="message"></textarea>
              <button type="submit">SUBMIT</button>
            </form>
            <a class="skip-to-contact" href="/contact">VIEW CONTACT PAGE</p>
        </div>
      `;
    this.mount = document.querySelector(container);
    this.contentContainer = document.createElement("div");
    this.contentContainer.classList.add("content-container");
    this.body = document.querySelector("body");
    this.mount?.appendChild(this.contentContainer);
    this.mount?.addEventListener("click", (e) => {
      if (!this.contentContainer.contains(e.target as Node)) {
        this.closeModal();
      }
    });
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
    return this;
  }
  openModal() {
    if (this.mount) {
      this.contentContainer.innerHTML = this.content;

      const closeBtn = document.createElement("div");
      closeBtn.innerHTML = `&#10005;`;
      closeBtn.classList.add("close-btn");
      this.contentContainer?.appendChild(closeBtn);
      closeBtn.addEventListener("click", () => {
        this.closeModal();
      });
      this.mount.classList.add("modal-open");
      this.body!.style.overflow = "hidden";
      this.addSubmitHandler()
    }
  }
  closeModal() {
    if (this.mount) {
      this.mount.classList.remove("modal-open");
      this.body!.style.overflow = "unset";
    }
  }
  addSubmitHandler() {
    const form = this.contentContainer.querySelector("form");
    const formData = form ? new FormData(form) : null;
    const handleSubmit = (e: any) => {
      e.preventDefault();
      if (formData) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
      };
    }
   form?.addEventListener("submit", handleSubmit);
  }
}
