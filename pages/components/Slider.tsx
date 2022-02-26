export class Slider {
    wrapper: HTMLElement | null;
    prev: HTMLElement | null;
    next: HTMLElement | null;
    bulletBox: HTMLElement | null;
    limit: number;
    current: number;
    bullets: HTMLElement[];
    speed: number;
    transitioning: boolean;
    swiping: boolean;
    tracking: boolean;
    start: number;
    end: number;
    change: number;

    constructor(wrapper: string, prev: string, next: string, bulletBox: string, transitionSpeed: number) {
        this.wrapper = document.querySelector(wrapper);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.bulletBox = document.querySelector(bulletBox);
        this.limit = this.wrapper ? this.wrapper.children.length : 0;
        this.current = 0;
        this.bullets = [];
        this.speed = transitionSpeed;
        this.transitioning = false;
        this.swiping = true;
        this.tracking = false;
        this.start = 0;
        this.end = 0;
        this.change = 0;
    }
    init() {
        if (this.wrapper) {
            const cloneFirst = this.wrapper.children[0].cloneNode(true);
            const cloneLast = this.wrapper.children[this.limit - 1].cloneNode(true);
            this.wrapper.insertBefore(cloneLast, this.wrapper.children[0]);
            this.wrapper.appendChild(cloneFirst);
            this.wrapper.style.position = "relative";
            this.wrapper.style.display = "flex";
            this.wrapper.style.justifyContent = "flex-start";
            this.wrapper.style.left = "-100%";

            this.wrapper.addEventListener("transitionend", () => {
                this.transitioning = false;
            })

            this.wrapper.addEventListener("touchstart", (e) => {
                if (this.swiping && !this.transitioning) {
          			this.wrapper!.style.transition = "none";
          			this.start = e.touches[0].clientX;
                }
            });
            this.wrapper.addEventListener("touchmove", (e) => {
                if (this.swiping && !this.transitioning) {
                    this.end = e.touches[0].clientX;
                    this.change = (((this.end - this.start) / window.screen.width) * 100) - this.current * 100;
                    if (this.change > 5 || this.change < -5) {
                        this.tracking = true;
                    }
                    if (this.tracking) {
                        this.wrapper!.style.transform = `translateX(${this.change}%)`;
                    }
                }
            });
            this.wrapper.addEventListener("touchend", (e) => {
                if (this.swiping && !this.transitioning) {
                    this.tracking = false;
                    if (this.end == null) this.end = this.start;
                    this.wrapper!.style.transition = "all 0.3s";
                    if (this.start - this.end > 0 && this.start - this.end > 75) {
                        this.nextSlide();
                    } else if (this.start - this.end < 0 && this.start - this.end < -75) {
                        this.prevSlide();
                    } else if (this.current === 0) {
                        this.wrapper!.style.transform = `translateX(0%)`;
                    } else {
                        this.wrapper!.style.transform = `translateX(${-1 * this.current}00%)`;
                    }
                    this.start = 0;
                    this.end = 0;
                }
                this.swiping = true;
            });
        }
        if (this.prev) {
            this.prev.addEventListener("click", () => {
                this.prevSlide()
            })
        }
        if (this.next) {
            this.next.addEventListener("click", () => {
                this.nextSlide()
            })
        }
        if (this.bulletBox) {
            for (let i: number = 0; i < this.limit; i++) {
                const bullet = document.createElement("div");
                bullet.innerText = ` `;
                bullet.classList.add("nav-bullet");
                if (i == 0) bullet.classList.add("active-bullet");
                this.bullets.push(bullet)
                this.bulletBox.appendChild(bullet);
                bullet.addEventListener("click", () => {
                    this.goTo(i);
                })
            }
        }
        return this;
    }
    prevSlide() {
        if (this.wrapper && !this.transitioning) {
            this.current--;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            if (this.current < 0) {
                this.wrapper.addEventListener("transitionend", () => {
                    this.wrapper!.style.transition = "unset";
                    this.current = this.limit - 1;
                    this.wrapper!.style.transform = `translateX(${-100 * this.current}%)`;
                }, {once:true})
            }
            this.setBullet();
        }
    }
    nextSlide() {
        if (this.wrapper && !this.transitioning) {
            this.current++;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            if (this.current > this.limit - 1) {
                this.wrapper.addEventListener("transitionend", () => {
                    this.wrapper!.style.transition = "unset";
                    this.current = 0;
                    this.wrapper!.style.transform = `translateX(${-100 * this.current}%)`;
                }, {once:true})
            }
            this.setBullet();
        }
    }
    goTo(index: number) {
        if (this.wrapper) {
            this.current = index;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            this.setBullet();
        }
    }
    setBullet() {
        if (this.bulletBox) {
            this.bullets.forEach(b => b.classList.remove("active-bullet"))
            if (this.current > this.limit - 1) {
                this.bullets[0].classList.add("active-bullet")
            } else if (this.current < 0) {
                this.bullets[this.limit - 1].classList.add("active-bullet")
            } else {
                this.bullets[this.current].classList.add("active-bullet")
            }
        }
    }
}