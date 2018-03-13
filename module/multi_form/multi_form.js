/*
  config =  {
    formName: '',
    submitBtnName: ""
  }
*/
var config = {
  formName:"",
  submitBtnName: "SaveAccount"
}
var multiForm = (function(config){


  var element = this,
    container = document.querySelector(".container"),
    steps = document.querySelectorAll("fieldset"),
    count = steps.length,
    submitBtnID = "#" + config.submitBtnName,
    submitBtnEl = document.querySelector(submitBtnID),
    wrapper, commands, legend, legendText;

    hide(submitBtnEl);

    container.insertAdjacentHTML('beforebegin', "<ul id='steps'></ul>");


    Array.prototype.forEach.call(steps, function(el, i){

      wrapper = document.createElement('div');
      wrapper.id = "step" + i;
      wrap(el, wrapper);

      commands = document.createElement("p");
      commands.id = "step" + i + "commands";
      el.appendChild(commands);

      legend = el.querySelector("legend");
      legendText = legend.innerHTML;
      // legend.appendChild("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");
console.log(el);
// $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");




    });

    // functions
    function hide(el){
      el.setAttribute("hidden", true);
    }

    function wrap(toWrap, wrapper) {
      wrapper = wrapper || document.createElement('div');
      toWrap.parentNode.appendChild(wrapper);
      return wrapper.appendChild(toWrap);
    }



})(config);


// $(document).ready(function() {
//   $("#SignupForm").formToWizard({
//     submitButton: 'SaveAccount'
//   })
// });
//
//
// (function($) {
//   $.fn.formToWizard = function(options) {
//     options = $.extend({
//       submitButton: ""
//     }, options);
//
//     var element = this;
//
//     var steps = $(element).find("fieldset");
//     var count = steps.length;
//
//     var submmitButtonName = "#" + options.submitButton;
//     $(submmitButtonName).hide();
//
//     $(element).before("<ul id='steps'></ul>");
//
//     steps.each(function(i) {
//       $(this).wrap("<div id='step" + i + "'></div>");
//       $(this).append("<p id='step" + i + "commands'></p>");
//
//       var name = $(this).find("legend").html();
//       $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");
//
//       if (i == 0) {
//         createNextButton(i);
//         selectStep(i);
//       } else if (i == count - 1) {
//         $("#step" + i).hide();
//         createPrevButton(i);
//       } else {
//         $("#step" + i).hide();
//         createPrevButton(i);
//         createNextButton(i);
//       }
//     });
//
//     function createPrevButton(i) {
//       var stepName = "step" + i;
//       $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev'>< Back</a>");
//
//       $("#" + stepName + "Prev").bind("click", function(e) {
//         $("#" + stepName).hide();
//         $("#step" + (i - 1)).show();
//         $(submmitButtonName).hide();
//         selectStep(i - 1);
//       });
//     }
//
//     function createNextButton(i) {
//       var stepName = "step" + i;
//       $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next'>Next ></a>");
//
//       $("#" + stepName + "Next").bind("click", function(e) {
//         $("#" + stepName).hide();
//         $("#step" + (i + 1)).show();
//         if (i + 2 == count)
//           $(submmitButtonName).show();
//         selectStep(i + 1);
//       });
//     }
//
//     function selectStep(i) {
//       $("#steps li").removeClass("current");
//       $("#stepDesc" + i).addClass("current");
//     }
//
//   }
// })(jQuery);
