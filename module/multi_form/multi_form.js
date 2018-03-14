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
    wrapper, commands, legend, legendText,stepsUL;


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

      stepsUL = document.querySelector("#steps");
      stepsUL.insertAdjacentHTML("beforeend", "<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + legendText + "</span></li>");

      if (i == 0) {
        createNextButton(i);
        selectStep(i);
      } else if (i == count - 1) {
        var stepEl = document.querySelector("#step" + i);
        hide(stepEl);

        // $("#step" + i).hide();
        // createPrevButton(i);
      } else {
        var stepEl = document.querySelector("#step" + i);
        hide(stepEl);

        createPrevButton(i);
        createNextButton(i);
      }




    });

    // functions


    function createNextButton(i) {
      var stepName = "step" + i;
      var stepNameNext = "step" + (i + 1);
      document.querySelector("#" + stepName + "commands").insertAdjacentHTML("beforeend","<a href='#' id='" + stepName + "Next' class='next'>Next ></a>");

      document.querySelector("#" + stepName + "Next").addEventListener("click", function(e){
        var stepNameEl = document.querySelector("#" + stepName),
            stepNameNextEl = document.querySelector("#" + stepNameNext);

        hide( stepNameEl );
        show( stepNameNextEl );

        if (i + 2 == count){
          console.log("add submit button")
        // $(submmitButtonName).show();
        }

        selectStep(i + 1);
      })
    }

    function selectStep(i) {
      var stepsEl = document.querySelector("#steps li"),
          stepDescEl = document.querySelector("#stepDesc" + i),
          stepDescPrevEl = document.querySelector("#stepDesc" + (i - 1)),
          stepDescNextEl = document.querySelector("#stepDesc" + (i + 1));

      if (stepDescPrevEl){ removeClass(stepDescPrevEl, "current") }
      if (stepDescNextEl){ removeClass(stepDescNextEl, "current") }

      addClass(stepDescEl, "current");

    }

    function createPrevButton(i) {
      var stepName = "step" + i;
      var stepNameCommandsEl = document.querySelector("#" + stepName + "commands");

      stepNameCommandsEl.insertAdjacentHTML("beforeend", "<a href='#' id='" + stepName + "Prev' class='prev'>< Back</a>");

      var stepNamePrevEl = document.querySelector("#" + stepName + "Prev");

      stepNamePrevEl.addEventListener("click", function(){
          var stepNameEl = document.querySelector("#" + stepName),
              stepNamePrevEl = document.querySelector("#step" + (i - 1));

          hide(stepNameEl);
          show(stepNamePrevEl);
         selectStep(i - 1);
      })

      // $("#" + stepName + "Prev").bind("click", function(e) {
      //   $("#" + stepName).hide();
      //   $("#step" + (i - 1)).show();
      //   $(submmitButtonName).hide();
      //   selectStep(i - 1);
      // });
    }


    function addClass(el, className){
      if (el.classList){
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    }

    function removeClass(el, className) {
console.log("classList: " + el.classList);
      if (el.classList){
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }

    }

    function hide(el){
      el.style.display = "none";
    }

    function show(el){
      el.style.display = "block";
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
