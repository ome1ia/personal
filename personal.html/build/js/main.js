function dropdownlist__expand(){$(".dropdown-expand").on("click",function(){var t=$(this).data("target");$(this).toggleClass("icon-plus").parents(".dropdown-title").toggleClass("dropdown-title--expanded"),$("#"+t).toggleClass("hidden")})}function show_modal(){$(".modal-link").on("click",function(){var t=$(this).data("target");return $(".modal__fon").css("visibility","visible").addClass("animated"),$("#"+t).css("visibility","visible").addClass("animated"),!1})}function close_modal(){$(".modal__message__close, .modal__fon").on("click",function(){$(".modal__fon").css("visibility","hidden").removeClass("animated"),$(".modal__message").each(function(){$(this).removeClass("animated").css("visibility","hidden")})})}$(document).ready(function(){dropdownlist__expand()}),$(document).ready(function(){show_modal(),close_modal()}),$(document).ready(function(){function t(t){var a=$('.tab__title[href="'+t+'"]'),i=a.siblings(".tab__title"),n=$(t),s=n.siblings(".tabs__content");a.hasClass("tab__title-active")||a.addClass("tab__title-active"),i.each(function(){$(this).removeClass("tab__title-active")}),n.hasClass("tabs__content-active")||n.addClass("tabs__content-active"),s.each(function(){$(this).removeClass("tabs__content-active")})}window.location.hash&&$(window.location.hash+".tabs__content").length&&t(window.location.hash),$(".tab__title").on("click",function(){return t($(this).attr("href")),!1})});