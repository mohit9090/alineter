  
  const uspContainer = document.getElementById("usp-wrapper")
 
  //jsonUSP is derived from js/usp-data.js
  const usp_icons = JSON.parse(jsonUSP)


  const [run_man, truck, cotton_fabric, india, personalised] = usp_icons;

  const uspList = [
    {
      icon:run_man,
      tag:'All Moment Ready',
      textColor:'text-blue'
    },
    {
      icon:truck,
      tag:'Free shipping of all products',
      textColor:''
    },
    {
      icon:cotton_fabric,
      tag:'Moisturised cotton fabric',
      textColor:''
    },
    {
      icon:india,
      tag:'Made in India',
      textColor:''
    },
    {
      icon:personalised,
      tag:'Personalised modern designs',
      textColor:''
    }
  ]



function mapUSP(uspList) {
  let usp_div = "";

  uspList.map( (usp) => {
    usp_div += `<div class="card text-center usp-box reveal__from-bottom mx-auto" onclick="animateIcon(this)">
      <div class="card-body">
        <div class="my-auto">
          <div class="mx-auto icon-filler">
            <!--icon-->
            ${usp.icon}
          </div><br>
          <small class="txt-primary usp-tag">${usp.tag}</small>
        </div>
      </div>
    </div>`;
  });

  return usp_div;
};

function classContains(elem, className) {
  return elem.classList.contains(className);
}

function removeClass(elem, __classList) {
  /*
    Remove classes from desired Element(elem)
    __classList is passed as an ARRAY
  */
  elem.classList.remove(__classList);
}

function addClass(elem, __classList) {
  /*
    Add classes from desired Element(elem)
    __classList is passed as an ARRAY
  */
  elem.classList.add(__classList);
}

function addMobile__Class(elemList) {
  /*
    Add mobile-device class to Specified Elements List
  */
  elemList.map( elem => {
    addClass(elem, ["mobile-device"]);
  });
};

function removeMobile__Class(elemList) {
  /*
    Remove mobile-device class to Specified Elements List
    if it contains mobile-device class
  */
  elemList.map( elem => {
    if(classContains(elem, "mobile-device")) {
      removeClass(elem, ["mobile-device"]);
    }
  })
};

function getUSP_DIV() {
  let uspIconsElem = document.querySelectorAll(".usp-box");
  
  /* 
    Opening Object into Array List using Spread Operator and returning it
  */
  return [...uspIconsElem];
}

function animateIcon(icon) {
  /*
    Animate Icons on clicking them and remove animation after some specific interval
  */
  let uspIcons = getUSP_DIV();
  
  uspIcons.map(u_icon => {
    if(classContains(u_icon, "clicked")) {
      removeClass(u_icon, ["clicked"]);
    }
  });

  addClass(icon, ["clicked"])
  setTimeout(function() {
    removeClass(icon, ["clicked"]);
  }, 700);
};  


function onSuccessAddClass() {
  /* 
    Add class mobile-device to usp-icons if the device is mobile
    This func will encounter both on load and on resize
  */
  let uspIcons = getUSP_DIV();

  let isMobile = detectMob();
  isMobile ? addMobile__Class(uspIcons) : removeMobile__Class(uspIcons);
};

function constructUSP() {
  let usp_html = "";

  usp_html = mapUSP(uspList);
  uspContainer.innerHTML = usp_html;

  const events = ["load", "resize"];
  events.map(event => {
    window.addEventListener(event, onSuccessAddClass)
  });
};
constructUSP();

