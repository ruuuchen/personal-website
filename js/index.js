// skrollr初始值
$(document).ready(function(){
  if ($(window).width() > 1000) {
      var s = skrollr.init();
  }
});

var workdatas=[
	{id:"w1" ,name: "Weather Widget", description: "使用 CSS 與 SVG 製作，並增添互動與滑鼠效果。", img: "img/work01.jpg", github: "https://github.com/ruuuchen/weather-widget.git", website: "https://ruuuchen.github.io/weather-widget/"},
	{id:"w2" ,name: "When It Comes to Blue", description: "使用 Bootstrap 的網格系統，客製化開發響應式網頁。", img: "img/work02.jpg", github: "https://github.com/ruuuchen/when-it-comes-to-blue-website.git", website: "https://ruuuchen.github.io/when-it-comes-to-blue-website/"},
	{id:"w3" ,name: "Emergency Information in Kaohsiung", description: "Google Maps API 實作，並以 AJAX 與 Javascript 框架 Vue.js，串接顯示 Open Data。", img: "img/work03.jpg", github: "https://github.com/ruuuchen/kaohsiung-emergency-info.git", website: "https://ruuuchen.github.io/kaohsiung-emergency-info/"},
	{id:"w4" ,name: "To Do List", description: "使用 JS 框架 Vue.js，並學習變數以及邏輯運算的概念，處理動畫與資料性的網站。", img: "img/work04.jpg", github: "https://github.com/ruuuchen/to-do-list.git", website: "https://ruuuchen.github.io/to-do-list/"},
	{id:"w5" ,name: "Beloved Library in Taipei", description: "製作 RWD 頁面。", img: "img/work05.jpg", github: "https://github.com/ruuuchen/taipei-beloved-library.git", website: "https://ruuuchen.github.io/taipei-beloved-library/"},
	{id:"w6" ,name: "The Style Guideline Redesign of Subway", description: "使用 Sass 與 Pug 作為前處理語言，透過實作套色學習使用模組開發。", img: "img/work06.jpg", github: "https://github.com/ruuuchen/style-guideline-redesign-subway.git", website: "https://ruuuchen.github.io/style-guideline-redesign-subway/"}
];

var skilldatas={
	html_css :["Pug","SASS","Flex","SVG","Bootstrap 4","Responsive Web Design"],
	javascript: ["jQuery","Vue.js","Ajax"],
	api: ["Google Map API","Other Open Data APIs"],
	version_control: ["Sublime text","Terminal ( Mac OS )","Git","Github","SourceTree"],
	software: ["Photoshop","Illustrator"]
};

var vm01=new Vue({
  el: "#works",
  data: {
    works: workdatas
  }
});

var vm02=new Vue({
	el: "#about",
	data: skilldatas
});

// 導覽列滑鼠事件
$(".nav-item").click(function(){
	$("#navbarToggleExternalContent").removeClass("show");
});