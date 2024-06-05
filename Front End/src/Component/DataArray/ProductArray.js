const products = [
    {
        pro_id: 1,
        pro_category: "Electronics",
        pro_name: "Smartphone",
        pro_price: 599.99,
        pro_desc: "A powerful smartphone with a large display, fast processor, and advanced camera features.",
        pro_rating: 4,
        pro_image: 'https://imgs.search.brave.com/7MFRkg9_5h1oES4VXXxaxJs845Y3GcgBpdMcsSvLYHc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxWW9mdUhCTVpM/LmpwZw',
        key_features: ["Large Display", "Fast Processor", "Advanced Camera"]
    },       
    {
        pro_id: 2,
        pro_category: "Clothing",
        pro_name: "T-Shirt",
        pro_price: 19.99,
        pro_desc: "Comfortable cotton t-shirt available in various colors and sizes and Soft cotton tee in multiple hues.",
        pro_rating: 3,
        pro_image: "https://imgs.search.brave.com/zhvOk_9bc8lA1V1AcMRx_NLSEbHvVu4GrMwmvc3hm50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF0OFdoZHlTUUwu/anBn",
        key_features: ["Comfortable Cotton", "Various Colors", "Multiple Sizes"]
    },
    {
        pro_id: 3,
        pro_category: "Home & Kitchen",
        pro_name: "Coffee Maker",
        pro_price: 89.99,
        pro_desc: "A programmable coffee maker with a built-in grinder and adjustable brew strength.",
        pro_rating: 5,
        pro_image: "https://imgs.search.brave.com/7Jggv9pZywj-5PqLHcH4xDCrU6lpQvd6Ojmyj6Mr0xw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFQZmVzckRYdkwu/anBn",
        key_features: ["Programmable", "Built-in Grinder", "Adjustable Brew Strength"]
    },
    {
        pro_id: 4,
        pro_category: "Books",
        pro_name: "The Great Gatsby",
        pro_price: 12.50,
        pro_desc: "A classic novel by F. Scott Fitzgerald depicting the Jazz Age in America.",
        pro_rating: 2,
        pro_image: "https://imgs.search.brave.com/9dHlmGL24s2wrS9C90Zn0uze885crbAsa-WOT6oMiTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGVl/OWYxMjMtZDg3Ny00/ZGU1LTk4ZDgtMjI1/MDgwMjUzZjNkLjM3/NjFiN2JiMmI1YjQx/OGVhMGYwZjRjNzFh/M2MxZTVhLmpwZWc_/b2RuSGVpZ2h0PTYx/MiZvZG5XaWR0aD02/MTImb2RuQmc9RkZG/RkZG",
        key_features: ["Classic Novel", "Jazz Age Depiction"]
    },
    {
        pro_id: 5,
        pro_category: "Electronics",
        pro_name: "Laptop",
        pro_price: 899.99,
        pro_desc: "A high-performance laptop with a sleek design, long battery life, and powerful processor.",
        pro_rating: 4,
        pro_image: "https://m.media-amazon.com/images/I/71evs2WKJjS._AC_UF1000,1000_QL80_.jpg",
        key_features: ["Sleek Design", "Long Battery Life", "Powerful Processor"]
    },
    {
        pro_id: 6,
        pro_category: "Beauty",
        pro_name: "Moisturizing Cream",
        pro_price: 29.99,
        pro_desc: "Hydpro_rating moisturizing cream enriched with vitamins and natural extracts.",
        pro_rating: 3,
        pro_image: "https://imgs.search.brave.com/kk7Nm2jDGKzfJMq5A1UZbmZMCZj1s7Ql3iP_4n0NPbA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFpNXZKRytsbUwu/anBn",
        key_features: ["Hydpro_rating", "Enriched with Vitamins", "Natural Extracts"]
    },
    {
        pro_id: 7,
        pro_category: "Sports",
        pro_name: "Running Shoes",
        pro_price: 79.99,
        pro_desc: "Lightweight and breathable running shoes designed for optimal performance and comfort.",
        pro_rating: 5,
        pro_image: "https://imgs.search.brave.com/yCfOomWE8iSI2wuoEP0MtPikPJwZNAk7iBU9AeUKAoA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hhcGUuY29tL3Ro/bWIvWnN4R0NjYmVD/cXJpTzFvZlRjUFdL/YjhRbmZZPS8xNTAw/eDAvZmlsdGVyczpu/b191cHNjYWxlKCk6/bWF4X2J5dGVzKDE1/MDAwMCk6c3RyaXBf/aWNjKCkvd2hpdGUt/c25lYWtlcnMtcHVt/YS02MjQ1NmU0ZDY1/OTc0MDc5YWFhZmI4/YmI5MTU1ZjM5ZC5q/cGc",
        key_features: ["Lightweight", "Breathable", "Optimal Performance"]
    },
    {
        pro_id: 8,
        pro_category: "Toys & Games",
        pro_name: "Board Game",
        pro_price: 29.99,
        pro_desc: "A fun and strategic board game for the whole family and friends to enjoy.",
        pro_rating: 4,
        pro_image: "https://imgs.search.brave.com/KYXoKT5e2ckfOxEUynJFUV5sqcBoKyXuv9KSTaAfxVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE4eTY1OW4zNUwu/anBn",
        key_features: ["Fun", "Strategic", "Family & Friends"]
    },
    {
        pro_id: 9,
        pro_category: "Health & Fitness",
        pro_name: "Yoga Mat",
        pro_price: 24.99,
        pro_desc: "Durable and non-slip yoga mat for practicing yoga and other exercises.",
        pro_rating: 2,
        pro_image: "https://imgs.search.brave.com/fp3keED16uXJtQpLRSdWYH7gwG_4NGHahD-ul3D_4AA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxbk5JZHI4ZElM/LmpwZw",
        key_features: ["Durable", "Non-slip", "Multi-purpose"]
    },
    {
        pro_id: 10,
        pro_category: "Electronics",
        pro_name: "Wireless Headphones",
        pro_price: 129.99,
        pro_desc: "Bluetooth wireless headphones with noise-cancellation technology for immersive audio experience.",
        pro_rating: 5,
        pro_image: "https://imgs.search.brave.com/6TGXgdUI4vfmIltxNa5fyaHFIoWy_mSLWwUQxkLVZoE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE2bVo2YmtUeUwu/anBn",
        key_features: ["Bluetooth", "Noise-cancellation", "Immersive Audio"]
    },
    {
        pro_id: 11,
        pro_category: "Home & Kitchen",
        pro_name: "Blender",
        pro_price: 49.99,
        pro_desc: "High-speed blender for making smoothies, shakes, and purees.",
        pro_rating: 3,
        pro_image: "https://imgs.search.brave.com/9YLWVb2p5m0rLvyXS0qL0xQ8ygWvLEX5uqrvjKvXby4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZHdpbmUu/Y29tL3RobWIvSXdZ/TVA3TWJCQWxyalI0/dlFRODlSa0o0VURv/PS9maXQtaW4vMTUw/MHgxMDAwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL2Jl/YXV0aWZ1bC1ieS1k/cmV3LWJhcnJ5bW9y/ZS10by1nby1ibGVu/ZGVyLTItMC0yZDg3/NzkzMTVmNGQ0MTIz/OGVkNGYwM2RjZGQx/ZTA4MS5qcGVn",
        key_features: ["High-speed", "Smoothies", "Shakes & Purees"]
    },
    {
        pro_id: 12,
        pro_category: "Clothing",
        pro_name: "Jeans",
        pro_price: 39.99,
        pro_desc: "Classic denim jeans with a comfortable fit and stylish design.",
        pro_rating: 4,
        pro_image: "https://imgs.search.brave.com/WhONUg8ie8nSrutWu8pOO5jhsT18zL9aVnM2fI2nIcE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG5h/Lmx5c3RpdC5jb20v/NDAwLzUwMC90ci9w/aG90b3MvaXRhbGlz/dC9jZjVkZDZmNi9v/ZmYtd2hpdGUtY28t/dmlyZ2lsLWFibG9o/LWJsdWUtNS1wb2Nr/ZXQtU2xpbS1GaXQt/SmVhbnMuanBlZw",
        key_features: ["Classic Denim", "Comfortable Fit", "Stylish Design"]
    },
    {
        pro_id: 13,
        pro_category: "Books",
        pro_name: "Harry Potter and the Philosopher's Stone",
        pro_price: 15.99,
        pro_desc: "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
        pro_rating: 5,
        pro_image: "https://m.media-amazon.com/images/I/510CXXt9CqL.jpg",
        key_features: ["First Book", "Magical World", "Hogwarts"]
    },
    {
        pro_id: 14,
        pro_category: "Electronics",
        pro_name: "Smartwatch",
        pro_price: 199.99,
        pro_desc: "A feature-rich smartwatch with health tracking, notifications, and customizable watch faces.",
        pro_rating: 4,
        pro_image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
        key_features: ["Health Tracking", "Notifications", "Customizable Watch Faces"]
    },
    {
        pro_id: 15,
        pro_category: "Home & Kitchen",
        pro_name: "Air Fryer",
        pro_price: 79.99,
        pro_desc: "An efficient air fryer for cooking crispy and healthy meals with less oil.",
        pro_rating: 5,
        pro_image: "https://m.media-amazon.com/images/I/71cn-i+GCZL.jpg",
        key_features: ["Efficient", "Crispy Cooking", "Healthy Meals"]
    },
    {
        pro_id: 16,
        pro_category: "Beauty",
        pro_name: "Face Mask",
        pro_price: 9.99,
        pro_desc: "Moisturizing face mask for deep hydration and revitalization of the skin.",
        pro_rating: 4,
        pro_image: "https://m.media-amazon.com/images/I/71X7M0wP+HL._AC_UF1000,1000_QL80_.jpg",
        key_features: ["Moisturizing", "Deep Hydration", "Revitalization"]
    },
    {
        pro_id: 17,
        pro_category: "Sports",
        pro_name: "Yoga Pants",
        pro_price: 34.99,
        pro_desc: "Flexible and breathable yoga pants for comfortable and unrestricted movement.",
        pro_rating: 3,
        pro_image: "https://m.media-amazon.com/images/I/61uOq5AWCqL._AC_UY1100_.jpg",
        key_features: ["Flexible", "Breathable", "Unrestricted Movement"]
    },
    {
        pro_id: 18,
        pro_category: "Toys & Games",
        pro_name: "Puzzle",
        pro_price: 14.99,
        pro_desc: "A challenging puzzle game to stimulate the mind and improve problem-solving skills.",
        pro_rating: 4,
        pro_image: "https://m.media-amazon.com/images/I/81e8nYJBiZL._AC_UF1000,1000_QL80_.jpg",
        key_features: ["Challenging", "Stimulate Mind", "Problem-solving"]
    },
    {
        pro_id: 19,
        pro_category: "Health & Fitness",
        pro_name: "Protein Powder",
        pro_price: 29.99,
        pro_desc: "High-quality protein powder for muscle recovery and growth after workouts.",
        pro_rating: 5,
        pro_image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_JTzrC8IavZY7npO-fuJfUNumcRTMlHE_fF1GGMuys04NULKzMsVZcAMtvBCxJGc8AJytb0ETmKjUhKI50T0U-EoZX02h9awyTirSvYToE2GM5_fYhmUBCA&usqp=CAE",
        key_features: ["High-quality", "Muscle Recovery", "Muscle Growth"]
    },
    {
        pro_id: 20,
        pro_category: "Electronics",
        pro_name: "Wireless Charger",
        pro_price: 39.99,
        pro_desc: "Convenient wireless charger compatible with various smartphones and devices.",
        pro_rating: 4,
        pro_image: "https://m.media-amazon.com/images/I/61+CVXTrs9L._AC_UF1000,1000_QL80_.jpg",
        key_features: ["Convenient", "Compatible", "Various Devices"]
    }
];


export default products;