const data = [
	{
		title: 'Mac',
		img: 'mac.png'
	},
	{
		title: 'iPhone',
		img: 'iphone.png'
	},
	{
		title: 'iPad',
		img: 'ipad.png'
	},
	{
		title: 'Apple Watch',
		img: 'apple watches.png'
	},
	{
		title: 'AirPods',
		img: 'airpods.png'
	},
	{
		title: 'AirTag',
		img: 'airtag.png'
	},
	{
		title: 'Apple TV',
		img: 'apple tv.png'
	},
	{
		title: 'HomePod mini',
		img: 'homepod mini.png'
	},
	{
		title: 'Accessories',
		img: 'accessories.png'
	},
]

const arr = [
	{
		preTitle: 'GET READY',
		title: 'Save time at iPhone pre-order',
		description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
		img: '1',
	},
	{
		preTitle: 'PRE-ORDER 9.17',
		title: 'iPhone 13 Pro. Oh. So. Pro.',
		description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
		img: '2',
	},
	{
		preTitle: 'IPAD MINI',
		title: 'Mega power. Mini sized. ',
		description: 'From $499 or $41.58/mo. for 12 mo.',
		img: '3',
	}
]

const products = [
	{
		title: 'MacBook Air 13”',
		imgs: {
			C7C8CA: "./img/macbook-air-silver.jpg",
			E3CCB4: "./img/macbook-air-gold.jpg",
			B1B2B7: "./img/macbook-air-space-gray.jpg",
		},
		price: 999,
		url: 'https://www.apple.com/shop/buy-mac/macbook-air',
		colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
		specs: {
			display: {
				title: 'Retina display',
				size: 13.3
			},
			chip: {
				title: 'Apple M1 chip',
				description: ''
			},
			ram: {
				title: 'Up to 16GB unified memory',
				description: 'For increased performance and power efficiency'
			},
			memory: {
				size: 2,
				type: 'tb'
			},
			battery: 18,
			camera: {
				title: '720p FaceTime HD camera',
				description: 'With the image signal processor of M1 for drastically improved performance'
			},
			weight: 2.8,
			other: [
				'Touch ID'
			]
		}
	},
	{
		title: 'MacBook Pro 13”',
		imgs: {
			C7C8CA: "./img/mbp14-silver.jpg",
			B1B2B7: "./img/mbp14-spacegray.jpg",
		},
		price: 1299,
		url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
		colors: ['#C7C8CA', '#B1B2B7'],
		specs: {
			display: {
				title: 'Retina display',
				size: 13.3
			},
			chip: {
				title: 'Apple M1 chip',
				description: 'Also available with Intel Core i5 or i7 processor'
			},
			ram: {
				title: 'Up to 16GB unified memory',
				description: 'For increased performance and power efficiency'
			},
			memory: {
				size: 2,
				type: 'tb'
			},
			battery: 20,
			camera: {
				title: '720p FaceTime HD camera',
				description: 'With the image signal processor of M1 for drastically improved performance'
			},
			weight: 3.0,
			other: [
				'Touch Bar',
				'Sound',
				'Touch ID'
			]
		}
	},
	{
		title: 'MacBook Air 16”',
		imgs: {
			B1B2B7: "./img/mba15-midnight.jpg",
			C7C8CA: "./img/mba15-spacegray.jpg",
			F0E5D3: "./img/mba15-starlight.jpg",
		},
		price: 999,
		url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
		colors: ['#B1B2B7', '#C7C8CA', '#F0E5D3'],
		specs: {
			display: {
				title: 'Retina display',
				size: 16
			},
			chip: {
				title: 'Up to Intel Core i9 processor',
				description: ''
			},
			ram: {
				title: 'Up to 64GB memory',
				description: ''
			},
			memory: {
				size: 8,
				type: 'tb'
			},
			battery: 11,
			camera: {
				title: '720p FaceTime HD camera',
				description: ''
			},
			weight: 4.3,
			other: [
				'Touch Bar',
				'Sound',
				'Touch ID'
			]
		}
	},
]