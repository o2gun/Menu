const menu = [
    {
        id: 1,
        title: "Black Desert Online",
        category: "Korea",
        price: 10.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/BDO-Korean-MMO-960x540.jpg.webp",
        desc: `Developer: Pearl Abyss</br>
        Released: 2016 </br>
        Platform: PC, Playstation, Xbox</br>
        For fans of Sandbox MMOs</br>`,
    },
    {
        id: 2,
        title: "Lost Ark",
        category: "Japan",
        price: 7.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Lost-Ark-Korean-MMO-960x540.jpg.webp",
        desc: `Developer: Smilegate and Amazon Games</br>
        Released: 2022</br>
        Platform: PC</br>
        For fans of Isometric MMOs</br>`,
    },
    {
        id: 3,
        title: "Blade & Soul",
        category: "Korea",
        price: 8.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Blade-Soul-Korean-MMO-960x504.jpg.webp",
        desc: `Developer: Pearl Abyss</br>
        Released: 2012</br>
        Platform: PC</br>
        For fans of Martial Arts MMOs, Free-to-play MMOs</br>`,
    },
    {
        id: 4,
        title: "Bless Unleashed",
        category: "China",
        price: 5.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Bless-Unleashed-Korean-MMO-960x505.jpg.webp",
        desc: `Developer: Valofe</br>
        Released: 2021</br>
        Platform: PC, Playstation, Xbox</br>
        For fans of MMOs with good graphics</br>`,
    },
    {
        id: 5,
        title: "ArcheAge",
        category: "China",
        price: 12.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/ArcheAge-Korean-MMO-960x540.jpg.webp",
        desc: `Developer: XLGames</br>
        Released: 2013</br>
        Platform: PC</br>
        For fans of Sandbox MMOs</br>`,
    },
    {
        id: 6,
        title: "Elyon",
        category: "Japan",
        price: 9.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Elyon-Korean-MMO-960x519.jpg.webp",
        desc: `Developer: Krafton</br>
        Released: 2021</br>
        Platform: PC</br>
        For fans of Tera</br>`,
    },
    {
        id: 7,
        title: "Vindictus",
        category: "Korea",
        price: 15.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Vindicus-Korean-MMO-960x576.jpg.webp",
        desc: `Developer: Nexon</br>
        Released: 2010</br>
        Platform: PC</br>
        For fans of Action Combat MMOs</br>`,
    },
    {
        id: 8,
        title: "Aion",
        category: "China",
        price: 12.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2022/08/Aion-Korean-MMO-960x504.jpg.webp",
        desc: `Developer: NCSoft</br>
        Released: 2008</br>
        Platform: PC</br>
        For fans of Old-school MMOs</br>`,
    },
    {
        id: 9,
        title: "Lineage II",
        category: "Japan",
        price: 3.99 + "$",
        img:
            "https://mmorpg.gg/wp-content/uploads/2021/11/Lineage-II-Korean-MMO-960x504.jpg.webp",
        desc: `Developer: NCSoft</br>
        Released: 2003</br>
        Platform: PC</br>
        For fans of Old-school MMOs</br>`,
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Long version map and new set---
// const mapped = menu.map((item) => item.category);
// const uniqueCategory = [...new Set(mapped)];
// But we can write this as a one line---
const uniqueCategory = [...new Set(menu.map(item => item.category))];
uniqueCategory.unshift("All");

const categoryList = () => {
    const categoryBtns = uniqueCategory.map(category =>
        `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`
    ).join("");

    btnContainer.innerHTML = categoryBtns;
    $(".btn-item").click(function (e) {
        $(this).toggleClass("btn-dark").toggleClass("btn-outline-dark")
            .siblings().removeClass("btn-dark").addClass("btn-outline-dark");

        const category = e.target.textContent.trim();
        const menuCategory = category === "All" ? menu : menu.filter(item => item.category === category);
        menuList(menuCategory);
    });
};

// // Let's print everything to the front side
const menuList = menuItem => {
    section.innerHTML = menuItem.map(item =>
        `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.title} class="photo" />
                <div class="menu-info">
                    <div>
                        <h4 class="menu-title">${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </div>
                <div class="menu-text">${item.desc}</div>
            </div>
        </div>`
    ).join("");
};

menuList(menu);
categoryList();