

const registrationForm = document.getElementById("user-registration-form");
const afterRegistration = document.getElementById("after-registration");

//currentTab is Global Variable
var currentTab = 0; //default tab

showTab(currentTab);

// Show/Hide an element
function toggleVisibility(show_element, hide_element) {
  show_element.style.display = "block";
  hide_element.style.display = "none";
}

//reset the tab to 0th position
function reset() {
  currentTab = 0;
  showTab(currentTab);
}


function showTab(tabNum) {

  // Display the tab
  let tab = document.getElementsByClassName("tab"); 
  tab[tabNum].style.display = "block";
  //add the class of visited to it
  tab[tabNum].classList.add("visited");
  // hide/show the previous button
  if(tabNum == 0) {
    document.getElementById("prevBtn").style.display = "none";
  }
  else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  // update the next button
  if(tabNum == tab.length-1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  }
  else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // Indicate which tab is activate now
  tabIndicator(tabNum);

}


function nextPrev(jump) {

  let tab = document.getElementsByClassName("tab");

  //Slide window to registrationForm on clicking nextPrev button 
  document.getElementsByClassName('normal-wrapper')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  // if(jump == 1 && !checkPageFulfillment(currentTab) ) {
  //   return false;
  // }

  if(jump == 1 && !verifyTabCompleteness(currentTab)) {
    // if current tab is not fulfilled then don't go to the next tab 
    return false;
  }
  // Current Tab is fulfilled so go to next tab 
  // Hide the current tab
  tab[currentTab].style.display = "none";

  //Evaluate Tab indicator to be fulfilled or not
  verifyTabIndicator(currentTab);

  // increment/decrement the currentTab by 1
  currentTab = currentTab + jump;

  // if currentTab is more than number of tabs then submit the form 
  if(currentTab >= tab.length) {
    slideUp(-$(window).height());

    // Display afterRegistration page on successfull completion of form filling
    if(visitedAllTab(tab) == 3) {
    	toggleVisibility(afterRegistration, registrationForm);
	    setTimeout(function() {
	        // Submit the form after 1 second
	        registrationForm.submit();
	    }, 1000);    
	} else {
		//All rabs are not visited so reset it
		reset();
	    return false;
  	}
  }

  // display the new currentTab
  showTab(currentTab);

}





function tabIndicator(tabNum) {
  /*
    Indicates which tab is active
  */
  let step = document.getElementsByClassName("step");

  // remove active class from all tab indicator
  for(var i=0; i<step.length; i++) {
    step[i].className = step[i].className.replace(" active","");
  }

  // add active class to current tab indicator
  step[tabNum].className += " active";
}


function verifyTabIndicator(curr_tab) {
  /*
    If the current tab is completely filled then mark the tab indicator as green otherwise red
  */
  let tab_fulfilled = verifyTabCompleteness(curr_tab);
  switchClass(tab_fulfilled, document.getElementsByClassName("step")[curr_tab], "fulfilled--bg", "not-fulfilled--bg");
}


function visitedAllTab(tab) {
  /*
	Verifies if all tabs are visited or not
  */
  return document.querySelectorAll(".tab.visited").length;
}


function verifyTabCompleteness(curr_tab) {
  /*
	Verifies if the particular tab is completely filled correctly or not
  */
  let all_tab = document.getElementsByClassName("tab");
  let this_tab = all_tab[curr_tab];

  // Num of fields in respective tab
  let num_of_fields = this_tab.querySelectorAll(".auth-input").length;
  // Fulfilled fields in this tab
  let fulfilled_field = this_tab.querySelectorAll(`.auth-input[data-fulfill="true"]`).length;
  
  return (num_of_fields == fulfilled_field);
};






function sortStates() {
  /*
  	Sort States Field
  */
  var states = $("#states-content");
  states.html(states.find(".state").sort(function(x, y) {
    return $(x).text() > $(y).text() ? 1 : -1;
  }));
}
sortStates();

function setState(state) {
  /*
	On selection of a state the set the button display value as selected stated and change the SELECT TAG value to the selected state
  */
  let get_state = state.getAttribute("value");
  document.getElementById("user-state").setAttribute("value", get_state);
  document.getElementsByClassName("state-display-value")[0].innerHTML = get_state;
  
  hideStates();
}

function hideStates() {
  /*
	Hide the states dropdown menu
  */
  let states_content = document.getElementsByClassName("states-content")[0];
  replaceClass(states_content, "show", "hide");
}
function showStates() {
  /*
	Show the states dropdown menu
  */
  var states_content = document.getElementsByClassName("states-content")[0];
  //toggling show/hide the states dropdown content
  switchClass(classContains(states_content, "hide"), states_content, "show", "hide");
}





function togglePwdVisibility(toggleBtn, togglePwdId) {
  /*
    Toggle Password Visibility
    i.e. Show/Hide the Password content
  */
  let pwd = document.getElementById(togglePwdId);
  if(pwd.value.length) {
    // length > 0
    $(toggleBtn).children("i").toggleClass("fa-eye fa-eye-slash");
    pwd.type = (pwd.type === "password") ? "text" : "password";
  }
}