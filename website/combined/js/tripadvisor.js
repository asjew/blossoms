async function selectChanged(){
  const context = document.getElementById("japan-container").getContext("2d");   
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawChart_tripadvisor();
}

async function drawChart_tripadvisor(){
   //fetch and store the data 
   var response = await fetch('https://raw.githubusercontent.com/johannesyu/hanami-trip-advisor/main/data/japan-topojson.json')
	var country = await response.json()

   response = await fetch('https://raw.githubusercontent.com/johannesyu/hanami-trip-advisor/main/data/overview.csv')
	var csvString = await response.text()       

   //parse csv
   const parser = d3.dsvFormat(',')
   
   var hanamiSpots = parser.parse(csvString, d => ({
      id: d.location_id,
      name: d.name,
      review_count: d.review_count,
      rate: d.rate,
      city: d.city,
      region_jp: d.region_jp,
      region_en: d.region_en,
      address: d.address,
      lat: +d.latitude,
      long: +d.longitude,
      href: d.href,
      setting: d.surrounding,
      attr: d.attraction,
      }))
      
   // console.log(hanamiSpots)

   var hanamiRegion = Array.from(d3.rollup(hanamiSpots, v => v.length, d => d.region_en).entries())
  .sort((a, b) => b[1] - a[1])
  .map(d => d[0])
  .slice(0, 10)

  var hanamiSetting = Array.from(d3.rollup(hanamiSpots, v => v.length, d => d.setting).entries())
  .sort((a, b) => b[1] - a[1])
  .map(d => d[0])
  .slice(0, 10)

  var hanamiRate = Array.from(d3.rollup(hanamiSpots, v => v.length, d => d.rate).entries())
  .sort((a, b) => b[1] - a[1])
  .map(d => d[0])
  .slice(0, 10)

  var hanamiAttr = Array.from(d3.rollup(hanamiSpots, v => v.length, d => d.attr).entries())
  .sort((a, b) => b[1] - a[1])
  .map(d => d[0])
  .slice(0, 10)

  const canvas = document.getElementById("japan-container")
  const context = canvas.getContext("2d");   

  var height = canvas.height * 1.15
  var width = canvas.width * 1.15

  
  var subRegions = topojson.feature(country, country.objects.japan)

  var subRegionsDict = await subRegions.features.reduce((acc, cur) => ({...acc, [cur.properties.DEN_PROV]: cur}), {})

  var borders = topojson.merge(country, country.objects.japan.geometries)

  var subRegionBorders = topojson.mesh(country, country.objects.japan, (a,b) => a !== b  && a.properties.COD_REG == b.properties.COD_REG)

  projection = d3.geoMercator()
  .fitSize([width, height], subRegions)

  var projectedHanamiSpots = hanamiSpots.map(d => ({ 
   point: projection([d.long, d.lat]),
   ...d
   }))
   .filter(d => !isNaN(d.point[0]))

   var hanamiAttr_selected = document.getElementById("attr").value;
   // var hanamiRegion_selected = document.getElementById("region").value;
   var hanamiSetting_selected = document.getElementById("setting").value;

   var selectedHanamiSpots = projectedHanamiSpots
   .filter(d => (hanamiAttr_selected === "" || d.attr === hanamiAttr_selected) && 
      //  (hanamiRegion_selected === "" || d.region_en === hanamiRegion_selected) &&
       (hanamiSetting_selected === "" || d.setting === hanamiSetting_selected))


   document.getElementById("selected-number").textContent = "Selected hanami locations: " + selectedHanamiSpots.length

   const path = d3.geoPath(null, context).projection(projection);

   context.width = width;
   context.height = height;
   context.canvas.style.maxWidth = "135%";
   context.lineJoin = "round";
   context.lineCap = "round";


   context.beginPath();
   path(subRegionBorders);
   context.lineWidth = 1;
   context.strokeStyle = "#ddd";
   context.stroke();

   // context.beginPath();
   // path(regionBorders);
   // context.lineWidth = 1;
   // context.strokeStyle = "#aaa";
   // context.stroke();

   context.beginPath();
   path(borders);
   context.lineWidth = 1;
   context.strokeStyle = "#aaa";
   context.stroke();

   context.save();

   

   // const color = '#f9ccdf'
   const petal_size = 1.2
   for (const spot of selectedHanamiSpots) {

   
   const point = spot.point
   const x = point[0]
   const y = point[1]


   var color = context.createLinearGradient(x,y, x+12*petal_size,y);
   color.addColorStop(0, '#f9ccdf');    color.addColorStop(1, '#ffffff');
   
   context.beginPath();
   context.arc(x+4.639*petal_size, y-10.007*petal_size, 11*petal_size, Math.PI / 180 * 35, Math.PI / 180 * 115 );
   context.arc(x+10.986*petal_size, y+0.986*petal_size, 11*petal_size, Math.PI / 180 * 185, Math.PI / 180 * 265 );
   context.lineTo(x+6.73*petal_size, y-3.886*petal_size)
   
   context.closePath();
   context.fillStyle = color;
   context.strokeStyle = '#f9ccdf';
   context.fill();
   context.stroke();

   }

   context.restore()

}



