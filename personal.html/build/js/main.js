function dropdownlist__expand(){$(".dropdown-expand").on("click",function(){var t=$(this).data("target");$(this).toggleClass("icon-plus"),$("#"+t).toggleClass("hidden")})}$(document).ready(function(){dropdownlist__expand()}),$(document).ready(function(){function t(t){var a=$('.tab__title[href="'+t+'"]'),n=a.siblings(".tab__title"),i=$(t),e=i.siblings(".tabs__content");a.hasClass("tab__title-active")||a.addClass("tab__title-active"),n.each(function(){$(this).removeClass("tab__title-active")}),i.hasClass("tabs__content-active")||i.addClass("tabs__content-active"),e.each(function(){$(this).removeClass("tabs__content-active")})}window.location.hash&&$(window.location.hash+".tabs__content").length&&t(window.location.hash),$(".tab__title").on("click",function(){return t($(this).attr("href")),!1})});