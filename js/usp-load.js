  
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

  uspList.map( usp => {
    document.getElementById("usp-wrapper").innerHTML += `
      <div class="card text-center usp-box reveal__from-bottom mx-auto">
        <div class="card-body">
          <div class="my-auto">
            <div class="mx-auto icon-filler">
              <!--icon-->
              ${usp.icon}
            </div><br>
            <small class="txt-primary usp-tag">${usp.tag}</small>
          </div>
        </div>
      </div>
    `
  });


