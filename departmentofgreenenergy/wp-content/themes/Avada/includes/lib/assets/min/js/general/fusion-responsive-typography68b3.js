var fusionCalculateResponsiveTypeValues=function(e,t,i,s){var n,r,a=e||1,o=t||1.5,y=parseInt(jQuery("body").css("font-size"),10)*o,h=i||0===i?i:800,u="string"==typeof s&&-1!==s.indexOf("fusion-slider"),p=function(){var e;e=jQuery(window).width()>=h?fusionTypographyVars.site_width.indexOf("px")?parseInt(fusionTypographyVars.site_width,10):1100:h,n=jQuery(window).width()/e,r=1-(1-n)*a,jQuery(window).width()<=e?jQuery(s).each(function(){jQuery(this).closest(".rev_slider").length||jQuery(this).closest("#layerslider-container").length||jQuery(this).closest(".fusion-slider-container").length&&!u||(jQuery(this).attr("data-fontsize")*r>y?jQuery(this).css({"font-size":Math.round(jQuery(this).attr("data-fontsize")*r*1e3)/1e3,"line-height":Math.round(jQuery(this).attr("data-lineheight")*r*1e3)/1e3+"px"}):jQuery(this).attr("data-fontsize")>y&&jQuery(this).css({"font-size":y,"line-height":Math.round(jQuery(this).data("lineheight")*y/jQuery(this).attr("data-fontsize")*1e3)/1e3+"px"}))}):jQuery(s).each(function(){jQuery(this).parents(".rev_slider").length||jQuery(this).parents("#layerslider-container").length||jQuery(this).closest(".fusion-slider-container").length&&!u||(void 0!==jQuery(this).attr("data-inline-fontsize")&&jQuery(this).attr("data-inline-fontsize")?jQuery(this).css("font-size",jQuery(this).attr("data-inline-fontsize")):jQuery(this).css("font-size",""),void 0!==jQuery(this).attr("data-inline-lineheight")&&jQuery(this).attr("data-inline-lineheight")?jQuery(this).css("line-height",jQuery(this).attr("data-inline-lineheight")):jQuery(this).css("line-height",""))})};p(),jQuery(window).on("fusion-resize-horizontal orientationchange fusion-force-typography-update",p)};function fusionSetOriginalTypographyData(e){var t="string"==typeof e&&-1!==e.indexOf("fusion-slider");jQuery(e).each(function(){var e,i;jQuery(this).closest(".rev_slider").length||jQuery(this).closest("#layerslider-container").length||jQuery(this).closest(".fusion-slider-container").length&&!t||(jQuery(this).prop("style")["font-size"]&&jQuery(this).attr("data-inline-fontsize",jQuery(this).prop("style")["font-size"]),jQuery(this).prop("style")["line-height"]&&jQuery(this).attr("data-inline-lineheight",jQuery(this).prop("style")["line-height"]),e=parseInt(jQuery(this).css("font-size"),10),jQuery(this).attr("data-fontsize",e),i="normal"===(i=jQuery(this).css("line-height"))?1.2*e:i,jQuery(this).attr("data-lineheight",parseInt(i,10)))})}function fusionInitTypography(){window.responsiveTypeElements=fusionTypographyVars.elements,fusionTypographyVars.typography_responsive&&(fusionSetOriginalTypographyData(window.responsiveTypeElements),fusionCalculateResponsiveTypeValues(fusionTypographyVars.typography_sensitivity,fusionTypographyVars.typography_factor,800,window.responsiveTypeElements))}jQuery("body").hasClass("fusion-builder-live")?jQuery(window).on("load",function(){fusionInitTypography()}):jQuery(document).ready(function(){fusionInitTypography()}),jQuery(document).on("fusion-typography",function(e,t,i){var s=!1;jQuery(t).each(function(){var e;e=(s=jQuery(this)).parent(),jQuery.removeData(s),e.prop("style")["font-size"]&&e.hasClass("fusion-title")?s.css("font-size","1em"):void 0!==s.attr("data-inline-fontsize")&&s.attr("data-inline-fontsize")?s.css("font-size",s.attr("data-inline-fontsize")):s.css("font-size",i["font-size"]),void 0!==s.attr("data-inline-lineheight")&&s.attr("data-inline-lineheight")?s.css("line-height",s.attr("data-inline-lineheight")):s.css("line-height",i["line-height"]),s.attr("data-fontsize",parseInt(s.css("font-size"),10)),s.attr("data-lineheight",parseInt(s.css("line-height"),10))}),fusionCalculateResponsiveTypeValues(fusionTypographyVars.typography_sensitivity,fusionTypographyVars.typography_factor,800,t)}),jQuery(document).ajaxComplete(function(){fusionTypographyVars.typography_responsive&&fusionSetOriginalTypographyData(window.responsiveTypeElements)}),jQuery(window).on("fusion-typography-reset",function(e,t){var i;"undefined"!=typeof fusionTypographyVars&&fusionTypographyVars.typography_responsive&&(fusionSetOriginalTypographyData(i=jQuery('div[data-cid="'+t+'"]').find(window.responsiveTypeElements)),fusionCalculateResponsiveTypeValues(fusionTypographyVars.typography_sensitivity,fusionTypographyVars.typography_factor,800,i))});