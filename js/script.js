const imgs_box = document.querySelector('.imgs-box')

for (const item of data) {
	const img_item = document.createElement("div")
	const span = document.createElement("span")
	const img = document.createElement("img")
	const img_block = document.createElement("div")

	img_block.classList.add("img-block")
	img_item.classList.add("img-item")
	span.classList.add("title")

	span.textContent = item.title
	img.src = `./img/${item.img}`
	img_block.append(img)
	imgs_box.append(img_item)
	img_item.append(img_block, span)
}

//!------------------------------------------------------

const box = document.querySelector('.box')

for (const item of arr) {
	const box_item = document.createElement("div")
	const item_suptitle = document.createElement("span")
	const item_title = document.createElement("h3")
	const description = document.createElement("p")

	box_item.classList.add("box-item")

	item_suptitle.textContent = item.preTitle
	item_title.textContent = item.title
	description.textContent = item.description
	box_item.style.backgroundImage = `url(./img/${item.img}.jpg)`

	box.append(box_item)
	box_item.append(item_suptitle, item_title, description)

}

//!------------------------------------------------------

const about = document.querySelector(".about");

for (const item of products) {
	const about_item = document.createElement("div")
	const img = document.createElement("img")
	const img_title = document.createElement("h3")
	const img_subtitle = document.createElement("p")
	const colors_box = document.createElement("div")
	for (const el of item.colors) {
		const color = document.createElement("div")
		color.setAttribute("data-color", [el])
		color.classList.add("color")
		color.style.background = el
		colors_box.append(color)

		color.onclick = () => {
			let key = color.getAttribute("data-color");
			key = key.slice(1)
			img.src = item.imgs[key];
		}
	}

	const button = document.createElement("button")
	const divider = document.createElement("div")
	const divider_two = document.createElement("div")

	const display = document.createElement("h3")
	const about_display = document.createElement("p")
	const chip = document.createElement("img")
	const about_chip = document.createElement("p")
	const about_chip_description = document.createElement("p")
	const memory = document.createElement("h3")
	const about_memory = document.createElement("p")
	const ram_img = document.createElement("img")
	const ram = document.createElement("p")
	const ram_desc = document.createElement("p")
	const battery = document.createElement("img")
	const about_battery = document.createElement("p")
	const camera = document.createElement("img")
	const about_camera = document.createElement("p")
	const camera_desc = document.createElement("p")
	const weight = document.createElement("h3")
	const about_weight = document.createElement("p")
	const touch = document.createElement("img")
	const abotu_touch = document.createElement("p")
	const learn_more = document.createElement("a")

	about_item.classList.add("about-item")
	img.classList.add("product-img")
	divider.classList.add("divider")
	divider_two.classList.add("divider-two")
	touch.classList.add("touch")
	colors_box.classList.add("colors-box")

	learn_more.href = item.url
	img.src = item.imgs.C7C8CA
	img_title.textContent = item.title
	img_subtitle.textContent = `From $${item.price}`
	button.textContent = "Buy"
	display.textContent = item.specs.display.size + '”'
	about_display.textContent = item.specs.display.title
	memory.classList.add("memory")

	if (item.specs.chip.title.includes("M1")) {
		chip.src = "./img/m1.png"
	} else {
		chip.src = "./img/intel.png"
	}
	about_chip.textContent = item.specs.chip.title
	about_chip_description.textContent = item.specs.chip.description
	if (item.specs.ram.title.includes("unified")) {
		ram_img.src = "./img/memory.png"
	} else {
		ram_img.src = "./img/memory2.png"
	}
	ram.textContent = item.specs.ram.title
	ram_desc.textContent = item.specs.ram.description
	memory.textContent = item.specs.memory.size + item.specs.memory.type
	about_memory.textContent = "Maximum configurable storage'"
	battery.src = "./img/battery.png"
	about_battery.textContent = ` Up to ${item.specs.battery} hours battery life`
	camera.src = "./img/video.png"
	about_camera.textContent = item.specs.camera.title
	camera_desc.textContent = item.specs.camera.description
	weight.textContent = `${item.specs.weight} lb.`
	about_weight.textContent = "Weight"
	touch.src = "./img/touch-id.png"
	abotu_touch.textContent = item.specs.other.join(", ")
	learn_more.textContent = "Learn more >"

	about.append(about_item);
	about_item.append(img, img_title, img_subtitle, colors_box, button, divider, display, about_display, chip, about_chip, about_chip_description, ram_img, ram, ram_desc, memory, about_memory, battery, about_battery, camera, about_camera, camera_desc, weight, about_weight, touch, abotu_touch, divider_two, learn_more)
}