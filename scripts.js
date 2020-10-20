/* Add your JavaScript to this file */
window.addEventListener("DOMContentLoaded", (e) => {
	var heroimg = document.getElementsByClassName("overview-hero-image").item(0).children[0];
    heroimg.setAttribute("src", "./images/undraw_Meditation_o89g.svg");
    delete heroimg;
    
    var cardimg1 = document.getElementsByClassName("card").item(0).children[0];
    cardimg1.setAttribute("src", "./images/undraw_Artificial_intelligence_re_enpp.svg");
    delete cardimg1;

    var cardimg2 = document.getElementsByClassName("card").item(1).children[0];
    cardimg2.setAttribute("src", "./images/undraw_fitness_tracker_3033.svg");
    delete cardimg2;
    
    var cardimg3 = document.getElementsByClassName("card").item(2).children[0];
    cardimg3.setAttribute("src", "./images/undraw_healthy_lifestyle_6tyl.svg");
    delete cardimg3;

    var articleimg1 = document.getElementsByTagName("article").item(0).children[0];
    articleimg1.setAttribute("src", "./images/haydn-golden-wcvuv00UDd4-unsplash.jpg");
    delete articleimg1;

    var articleimg2 = document.getElementsByTagName("article").item(1).children[0];
    articleimg2.setAttribute("src", "./images/cdc-wDxFn_dBEC0-unsplash.jpg");
    delete articleimg2;
});
