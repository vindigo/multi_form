/*
  config =  {
    formName: '',
    submitBtnName: ""
  }
*/
var config = {
  formName:"SignupForm",
  submitBtnName: "SaveAccount",
  cancelAction: "",
  submitAction: ""
}

var multiForm = (function(config){

  var formName = config.formName,
    container = document.querySelector(".container"),
    steps = document.querySelectorAll("fieldset"),
    count = steps.length,
    submitBtnName = config.submitBtnName,
    submitBtnEl = document.querySelector("#" + submitBtnName),
    cancelBtnEl = document.querySelector("#Cancel"),
    toolbarEl = document.querySelector("#toolbar"),
    wrapper, commands, legend, legendText,stepsUL;

    formNameEl = document.querySelector("#" + formName)

    // insert 'steps' ul at top of container
    container.insertAdjacentHTML('afterbegin', "<ul id='steps'></ul>");

    Array.prototype.forEach.call(steps, function(el, i){

      // wrap each fieldset with 'steps' div
      wrapper = document.createElement('div');
      wrapper.id = "step" + i;
      wrap(el, wrapper);

      // append 'commands' paragraph to the bottom of each fieldset
      commands = document.createElement("p");
      commands.id = "step" + i + "commands";
      el.append(commands);

      // get legend label
      legend = el.querySelector("legend");
      legendText = legend.innerHTML;

      // get 'steps' ul element
      stepsUL = document.querySelector("#steps");

      // insert 'stepDesc' li into 'steps' ul element
      stepsUL.insertAdjacentHTML("beforeend", "<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + legendText + "</span></li>");

      // routine for creating prev/next buttons
      if (i == 0) {
        createNextButton(i);
        selectStep(i);
      } else if (i == count - 1) {
        var stepEl = document.querySelector("#step" + i);
        hide(stepEl);
        createPrevButton(i);
        // console.log("lastStep " + lastStep);
        // container.insertAdjacentHTML('afterbegin', "<ul id='steps'></ul>");

      } else {
        var stepEl = document.querySelector("#step" + i);
        hide(stepEl);
        createPrevButton(i);
        createNextButton(i);
      }
    });

    // inset toolbar at end of form
    formNameEl.append(toolbarEl);


    // functions ==============================
    function createNextButton(i) {
      var stepName = "step" + i;
      var stepNameNext = "step" + (i + 1);

      document.querySelector("#" + stepName + "commands").insertAdjacentHTML("beforeend","<a href='#' id='" + stepName + "Next' class='btn btn-primary next'>Next ></a>");

      document.querySelector("#" + stepName + "Next").addEventListener("click", function(e){
        var stepNameEl = document.querySelector("#" + stepName),
            stepNameNextEl = document.querySelector("#" + stepNameNext);

        hide( stepNameEl );
        show( stepNameNextEl );

        if (i + 2 == count){
          show(cancelBtnEl);
          show(submitBtnEl);
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

      stepNameCommandsEl.insertAdjacentHTML("beforeend", "<a href='#' id='" + stepName + "Prev' class='btn btn-primary prev'>< Back</a>");

      var stepNamePrevEl = document.querySelector("#" + stepName + "Prev");

      stepNamePrevEl.addEventListener("click", function(){
          var stepNameEl = document.querySelector("#" + stepName),
              stepNamePrevEl = document.querySelector("#step" + (i - 1));

          hide(stepNameEl);
          show(stepNamePrevEl);
          if (submitBtnEl){ hide(submitBtnEl); }
          if (cancelBtnEl){ hide(cancelBtnEl); }

          selectStep(i - 1);
      })
    }

    // helpers ==============================
    function addClass(el, className){
      if (el.classList){
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    }

    function removeClass(el, className) {
      if (el.classList){
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }

    function hide(el){
      el.classList.add("d-none");
      // el.style.display = "none";
    }

    function show(el){
      // el.style.display = "block";
      el.classList.remove("d-none");
    }

    function wrap(toWrap, wrapper) {
      wrapper = wrapper || document.createElement('div');
      toWrap.parentNode.append(wrapper);
      return wrapper.append(toWrap);
    }

})(config);
