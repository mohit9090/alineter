
function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
};


// add/remove (mobile-device) CLASS from elements
function addMobile__Class(elemList) {
  /*
    Add mobile-device class to Specified Elements List
  */
  elemList.forEach( elem => {
    addClass(elem, ["mobile-device"]);
  });
};

function removeMobile__Class(elemList) {
  /*
    Remove mobile-device class to Specified Elements List
    if it contains mobile-device class
  */
  elemList.forEach( elem => {
    if(classContains(elem, "mobile-device")) {
      removeClass(elem, ["mobile-device"]);
    }
  })
};