function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
});

/****************************************************************
****************************** About Tabs ***********************
*****************************************************************/

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})

/****************************************************************
****************************** Portfolio Popup ******************
*****************************************************************/

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
})


function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/****************************************************************
****************************** Portfolio Details ****************
*****************************************************************/

const portfolioData = [
    {
        imageLink: './src/img/portfolio/1.png',
        title: 'Perssonal Portfolio v1',
        description: 'Yeah, I got personal portfolio website as a project, just to showcase my work. It is built with react web framework designed by Facebook. While working on this project I learned how to deploy production build of react app over hosting platform. This project even helps me showcase my school information as well as how you can get in touch with me',
        dateCreated: 'October, 2022',
        technologies: 'React',
        role: 'Designer/Developer',
        viewLink: 'https://chaitanyap.netlify.app'
    },
];

// Function to generate the HTML for a Bootstrap card
function generateCardHTML(imageLink, title, description, dateCreated, technologies, role, viewLink) {
    return `
    <div class="col-md-4 mb-4">
        <div class="portfolio-item">
            <div class="portfolio-item-thumbnail">
                <img src="${imageLink}" alt="${title}">
            </div>
            <h3 class="portfolio-item-title">${title}</h3>
            <button type="button" class="btn view-project-btn">View Project</button>
            <div class="portfolio-item-details">
                <div class="description">
                    <p>${description}</p>
                </div>
                <div class="general-info">
                    <ul>
                        <li>Date Created - <span>${dateCreated}</span></li>
                        <li>Technologies used - <span>${technologies}</span></li>
                        <li>Role - <span>${role}</span></li>
                        <li>View Online - <span><a href="${viewLink}" target="_blank">${viewLink}</a></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Map the data array and generate HTML for each card
const cardHTML = portfolioData.map((item) => generateCardHTML(item.imageLink, item.title, item.description, item.dateCreated, item.technologies, item.role, item.viewLink));

// Append the card HTML to the card container
$('#card-container').append(cardHTML);

/****************************************************************
****************************** Rotating Text ********************
*****************************************************************/

var list = document.getElementsByClassName("text__alternate");
var featuredText = document.querySelector(".text__featured");
var delayCount = (list.length * 2.5);

// delay each alternate word 2.5s
for (var i = 0; i < list.length; i++) {
    list[i].style.animationDelay = (i * 2.5) + "s";
}

// delay final word and underline
featuredText.style.animationDelay = (delayCount + 1.5) + "s";
document.styleSheets[0].addRule('span.text__featured::after', 'animation-delay:' + (delayCount + 2) + 's;');

/****************************************************************
****************************** Hide Scroller ********************
*****************************************************************/

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scroll-down-box').css({
            'visibility': 'hidden'
        });
    } else {
        $('.scroll-down-box').css({
            'visibility': 'visible'
        });
    }
});


/****************************************************************
****************************** Smooth Scroll ********************
*****************************************************************/

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex', '-1');
                $target.focus();
            };
        });
    });
});