export function slideToggleJs(maxHeight, duration) {
	let sectionSlide = Array.prototype.slice.call(document.querySelectorAll(".js-section-slide"));
	if (sectionSlide.length > 0) {
		sectionSlide.forEach((element) => {
			let slideWrap = element.querySelector(".js-wrap-slide");
			let slideList = element.querySelector(".js-list-slide");
			let buttonAll = element.querySelector(".js-button-slide-all");

			if (slideWrap != null && slideList != null && buttonAll != null) {
				slideWrap.style.overflow = "hidden";
				slideWrap.style.maxHeight = maxHeight + "px";
				slideWrap.style.transition = `all ${duration / 1000}s ease`;

				buttonAll.addEventListener("click", function (e) {
					e.preventDefault();

					if (slideWrap.classList.contains("--show")) {
						slideWrap.style.maxHeight = slideList.clientHeight + "px";

						setTimeout(() => {
							slideWrap.style.maxHeight = maxHeight + "px";
						}, 0);

						slideWrap.classList.remove("--show");
					} else {
						slideWrap.classList.add("--show");
						slideWrap.style.maxHeight = slideList.clientHeight + "px";

						setTimeout(() => {
							slideWrap.style.removeProperty("max-height");
						}, duration + 10);
					}
				});
			}
		});
	}
}