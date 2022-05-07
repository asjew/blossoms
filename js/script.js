// import * as d3 from "https://cdn.skypack.dev/d3@7.1.1";

// -------------------------------
// ------------ DATA ------------
// -------------------------------
var dataMar = [
  {
    "Year": 1953,
    "Month": "March",
    "Proportion": 0.2987
  },
  {
    "Year": 1954,
    "Month": "March",
    "Proportion": 0.5
  },
  {
    "Year": 1955,
    "Month": "March",
    "Proportion": 0.557
  },
  {
    "Year": 1956,
    "Month": "March",
    "Proportion": 0.3171
  },
  {
    "Year": 1957,
    "Month": "March",
    "Proportion": 0.05
  },
  {
    "Year": 1958,
    "Month": "March",
    "Proportion": 0.2927
  },
  {
    "Year": 1959,
    "Month": "March",
    "Proportion": 0.6071
  },
  {
    "Year": 1960,
    "Month": "March",
    "Proportion": 0.5542
  },
  {
    "Year": 1961,
    "Month": "March",
    "Proportion": 0.25
  },
  {
    "Year": 1962,
    "Month": "March",
    "Proportion": 0.1412
  },
  {
    "Year": 1963,
    "Month": "March",
    "Proportion": 0.0814
  },
  {
    "Year": 1964,
    "Month": "March",
    "Proportion": 0.0941
  },
  {
    "Year": 1965,
    "Month": "March",
    "Proportion": 0.125
  },
  {
    "Year": 1966,
    "Month": "March",
    "Proportion": 0.5287
  },
  {
    "Year": 1967,
    "Month": "March",
    "Proportion": 0.4318
  },
  {
    "Year": 1968,
    "Month": "March",
    "Proportion": 0.2727
  },
  {
    "Year": 1969,
    "Month": "March",
    "Proportion": 0.0909
  },
  {
    "Year": 1970,
    "Month": "March",
    "Proportion": 0.0575
  },
  {
    "Year": 1971,
    "Month": "March",
    "Proportion": 0.3483
  },
  {
    "Year": 1972,
    "Month": "March",
    "Proportion": 0.4667
  },
  {
    "Year": 1973,
    "Month": "March",
    "Proportion": 0.3804
  },
  {
    "Year": 1974,
    "Month": "March",
    "Proportion": 0.2391
  },
  {
    "Year": 1975,
    "Month": "March",
    "Proportion": 0.2935
  },
  {
    "Year": 1976,
    "Month": "March",
    "Proportion": 0.5
  },
  {
    "Year": 1977,
    "Month": "March",
    "Proportion": 0.4783
  },
  {
    "Year": 1978,
    "Month": "March",
    "Proportion": 0.1087
  },
  {
    "Year": 1979,
    "Month": "March",
    "Proportion": 0.5652
  },
  {
    "Year": 1980,
    "Month": "March",
    "Proportion": 0.2174
  },
  {
    "Year": 1981,
    "Month": "March",
    "Proportion": 0.4565
  },
  {
    "Year": 1982,
    "Month": "March",
    "Proportion": 0.5435
  },
  {
    "Year": 1983,
    "Month": "March",
    "Proportion": 0.1739
  },
  {
    "Year": 1984,
    "Month": "March",
    "Proportion": 0.0978
  },
  {
    "Year": 1985,
    "Month": "March",
    "Proportion": 0.3043
  },
  {
    "Year": 1986,
    "Month": "March",
    "Proportion": 0.2174
  },
  {
    "Year": 1987,
    "Month": "March",
    "Proportion": 0.5326
  },
  {
    "Year": 1988,
    "Month": "March",
    "Proportion": 0.0326
  },
  {
    "Year": 1989,
    "Month": "March",
    "Proportion": 0.6413
  },
  {
    "Year": 1990,
    "Month": "March",
    "Proportion": 0.6196
  },
  {
    "Year": 1991,
    "Month": "March",
    "Proportion": 0.3871
  },
  {
    "Year": 1992,
    "Month": "March",
    "Proportion": 0.5761
  },
  {
    "Year": 1993,
    "Month": "March",
    "Proportion": 0.3626
  },
  {
    "Year": 1994,
    "Month": "March",
    "Proportion": 0.1868
  },
  {
    "Year": 1995,
    "Month": "March",
    "Proportion": 0.3152
  },
  {
    "Year": 1996,
    "Month": "March",
    "Proportion": 0.3736
  },
  {
    "Year": 1997,
    "Month": "March",
    "Proportion": 0.5761
  },
  {
    "Year": 1998,
    "Month": "March",
    "Proportion": 0.6
  },
  {
    "Year": 1999,
    "Month": "March",
    "Proportion": 0.5955
  },
  {
    "Year": 2000,
    "Month": "March",
    "Proportion": 0.2955
  },
  {
    "Year": 2001,
    "Month": "March",
    "Proportion": 0.5517
  },
  {
    "Year": 2002,
    "Month": "March",
    "Proportion": 0.7126
  },
  {
    "Year": 2003,
    "Month": "March",
    "Proportion": 0.5349
  },
  {
    "Year": 2004,
    "Month": "March",
    "Proportion": 0.6279
  },
  {
    "Year": 2005,
    "Month": "March",
    "Proportion": 0.186
  },
  {
    "Year": 2006,
    "Month": "March",
    "Proportion": 0.5
  },
  {
    "Year": 2007,
    "Month": "March",
    "Proportion": 0.6154
  },
  {
    "Year": 2008,
    "Month": "March",
    "Proportion": 0.597
  },
  {
    "Year": 2009,
    "Month": "March",
    "Proportion": 0.6349
  },
  {
    "Year": 2010,
    "Month": "March",
    "Proportion": 0.5357
  },
  {
    "Year": 2011,
    "Month": "March",
    "Proportion": 0.4444
  },
  {
    "Year": 2012,
    "Month": "March",
    "Proportion": 0.2778
  },
  {
    "Year": 2013,
    "Month": "March",
    "Proportion": 0.7037
  },
  {
    "Year": 2014,
    "Month": "March",
    "Proportion": 0.6415
  },
  {
    "Year": 2015,
    "Month": "March",
    "Proportion": 0.6792
  },
  {
    "Year": 2016,
    "Month": "March",
    "Proportion": 0.6981
  },
  {
    "Year": 2017,
    "Month": "March",
    "Proportion": 0.3019
  },
  {
    "Year": 2018,
    "Month": "March",
    "Proportion": 0.7358
  },
  {
    "Year": 2019,
    "Month": "March",
    "Proportion": 0.6604
  },
  {
    "Year": 2020,
    "Month": "March",
    "Proportion": 0.717
  },
  {
    "Year": 2021,
    "Month": "March",
    "Proportion": 0.7736
  }
 ];
 
var dataApr = [
  {
    "Year": 1953,
    "Month": "April",
    "Proportion": 0.5455
  },
  {
    "Year": 1954,
    "Month": "April",
    "Proportion": 0.35
  },
  {
    "Year": 1955,
    "Month": "April",
    "Proportion": 0.2911
  },
  {
    "Year": 1956,
    "Month": "April",
    "Proportion": 0.5244
  },
  {
    "Year": 1957,
    "Month": "April",
    "Proportion": 0.7875
  },
  {
    "Year": 1958,
    "Month": "April",
    "Proportion": 0.561
  },
  {
    "Year": 1959,
    "Month": "April",
    "Proportion": 0.2976
  },
  {
    "Year": 1960,
    "Month": "April",
    "Proportion": 0.2892
  },
  {
    "Year": 1961,
    "Month": "April",
    "Proportion": 0.5952
  },
  {
    "Year": 1962,
    "Month": "April",
    "Proportion": 0.7176
  },
  {
    "Year": 1963,
    "Month": "April",
    "Proportion": 0.7558
  },
  {
    "Year": 1964,
    "Month": "April",
    "Proportion": 0.7412
  },
  {
    "Year": 1965,
    "Month": "April",
    "Proportion": 0.6591
  },
  {
    "Year": 1966,
    "Month": "April",
    "Proportion": 0.3103
  },
  {
    "Year": 1967,
    "Month": "April",
    "Proportion": 0.4091
  },
  {
    "Year": 1968,
    "Month": "April",
    "Proportion": 0.5909
  },
  {
    "Year": 1969,
    "Month": "April",
    "Proportion": 0.75
  },
  {
    "Year": 1970,
    "Month": "April",
    "Proportion": 0.7701
  },
  {
    "Year": 1971,
    "Month": "April",
    "Proportion": 0.5056
  },
  {
    "Year": 1972,
    "Month": "April",
    "Proportion": 0.4222
  },
  {
    "Year": 1973,
    "Month": "April",
    "Proportion": 0.4457
  },
  {
    "Year": 1974,
    "Month": "April",
    "Proportion": 0.5761
  },
  {
    "Year": 1975,
    "Month": "April",
    "Proportion": 0.5435
  },
  {
    "Year": 1976,
    "Month": "April",
    "Proportion": 0.3261
  },
  {
    "Year": 1977,
    "Month": "April",
    "Proportion": 0.337
  },
  {
    "Year": 1978,
    "Month": "April",
    "Proportion": 0.7065
  },
  {
    "Year": 1979,
    "Month": "April",
    "Proportion": 0.25
  },
  {
    "Year": 1980,
    "Month": "April",
    "Proportion": 0.5978
  },
  {
    "Year": 1981,
    "Month": "April",
    "Proportion": 0.3696
  },
  {
    "Year": 1982,
    "Month": "April",
    "Proportion": 0.2826
  },
  {
    "Year": 1983,
    "Month": "April",
    "Proportion": 0.7283
  },
  {
    "Year": 1984,
    "Month": "April",
    "Proportion": 0.6739
  },
  {
    "Year": 1985,
    "Month": "April",
    "Proportion": 0.5217
  },
  {
    "Year": 1986,
    "Month": "April",
    "Proportion": 0.5978
  },
  {
    "Year": 1987,
    "Month": "April",
    "Proportion": 0.2935
  },
  {
    "Year": 1988,
    "Month": "April",
    "Proportion": 0.7935
  },
  {
    "Year": 1989,
    "Month": "April",
    "Proportion": 0.2391
  },
  {
    "Year": 1990,
    "Month": "April",
    "Proportion": 0.2826
  },
  {
    "Year": 1991,
    "Month": "April",
    "Proportion": 0.4624
  },
  {
    "Year": 1992,
    "Month": "April",
    "Proportion": 0.2717
  },
  {
    "Year": 1993,
    "Month": "April",
    "Proportion": 0.4835
  },
  {
    "Year": 1994,
    "Month": "April",
    "Proportion": 0.6593
  },
  {
    "Year": 1995,
    "Month": "April",
    "Proportion": 0.5326
  },
  {
    "Year": 1996,
    "Month": "April",
    "Proportion": 0.4505
  },
  {
    "Year": 1997,
    "Month": "April",
    "Proportion": 0.2826
  },
  {
    "Year": 1998,
    "Month": "April",
    "Proportion": 0.3556
  },
  {
    "Year": 1999,
    "Month": "April",
    "Proportion": 0.2584
  },
  {
    "Year": 2000,
    "Month": "April",
    "Proportion": 0.5341
  },
  {
    "Year": 2001,
    "Month": "April",
    "Proportion": 0.3218
  },
  {
    "Year": 2002,
    "Month": "April",
    "Proportion": 0.2644
  },
  {
    "Year": 2003,
    "Month": "April",
    "Proportion": 0.314
  },
  {
    "Year": 2004,
    "Month": "April",
    "Proportion": 0.2209
  },
  {
    "Year": 2005,
    "Month": "April",
    "Proportion": 0.6395
  },
  {
    "Year": 2006,
    "Month": "April",
    "Proportion": 0.3049
  },
  {
    "Year": 2007,
    "Month": "April",
    "Proportion": 0.2308
  },
  {
    "Year": 2008,
    "Month": "April",
    "Proportion": 0.3284
  },
  {
    "Year": 2009,
    "Month": "April",
    "Proportion": 0.2222
  },
  {
    "Year": 2010,
    "Month": "April",
    "Proportion": 0.3036
  },
  {
    "Year": 2011,
    "Month": "April",
    "Proportion": 0.4074
  },
  {
    "Year": 2012,
    "Month": "April",
    "Proportion": 0.5741
  },
  {
    "Year": 2013,
    "Month": "April",
    "Proportion": 0.1481
  },
  {
    "Year": 2014,
    "Month": "April",
    "Proportion": 0.283
  },
  {
    "Year": 2015,
    "Month": "April",
    "Proportion": 0.283
  },
  {
    "Year": 2016,
    "Month": "April",
    "Proportion": 0.2264
  },
  {
    "Year": 2017,
    "Month": "April",
    "Proportion": 0.5849
  },
  {
    "Year": 2018,
    "Month": "April",
    "Proportion": 0.2075
  },
  {
    "Year": 2019,
    "Month": "April",
    "Proportion": 0.2642
  },
  {
    "Year": 2020,
    "Month": "April",
    "Proportion": 0.1698
  },
  {
    "Year": 2021,
    "Month": "April",
    "Proportion": 0.1698
  }
];

var dataMay = [
  {
    "Year": 1953,
    "Month": "May",
    "Proportion": 0.1558
  },
  {
    "Year": 1954,
    "Month": "May",
    "Proportion": 0.15
  },
  {
    "Year": 1955,
    "Month": "May",
    "Proportion": 0.1519
  },
  {
    "Year": 1956,
    "Month": "May",
    "Proportion": 0.1585
  },
  {
    "Year": 1957,
    "Month": "May",
    "Proportion": 0.1625
  },
  {
    "Year": 1958,
    "Month": "May",
    "Proportion": 0.1463
  },
  {
    "Year": 1959,
    "Month": "May",
    "Proportion": 0.0952
  },
  {
    "Year": 1960,
    "Month": "May",
    "Proportion": 0.1566
  },
  {
    "Year": 1961,
    "Month": "May",
    "Proportion": 0.1548
  },
  {
    "Year": 1962,
    "Month": "May",
    "Proportion": 0.1412
  },
  {
    "Year": 1963,
    "Month": "May",
    "Proportion": 0.1628
  },
  {
    "Year": 1964,
    "Month": "May",
    "Proportion": 0.1647
  },
  {
    "Year": 1965,
    "Month": "May",
    "Proportion": 0.2159
  },
  {
    "Year": 1966,
    "Month": "May",
    "Proportion": 0.1609
  },
  {
    "Year": 1967,
    "Month": "May",
    "Proportion": 0.1591
  },
  {
    "Year": 1968,
    "Month": "May",
    "Proportion": 0.1364
  },
  {
    "Year": 1969,
    "Month": "May",
    "Proportion": 0.1591
  },
  {
    "Year": 1970,
    "Month": "May",
    "Proportion": 0.1724
  },
  {
    "Year": 1971,
    "Month": "May",
    "Proportion": 0.1461
  },
  {
    "Year": 1972,
    "Month": "May",
    "Proportion": 0.1111
  },
  {
    "Year": 1973,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1974,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1975,
    "Month": "May",
    "Proportion": 0.163
  },
  {
    "Year": 1976,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1977,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1978,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1979,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1980,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1981,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1982,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1983,
    "Month": "May",
    "Proportion": 0.0978
  },
  {
    "Year": 1984,
    "Month": "May",
    "Proportion": 0.2283
  },
  {
    "Year": 1985,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1986,
    "Month": "May",
    "Proportion": 0.1848
  },
  {
    "Year": 1987,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1988,
    "Month": "May",
    "Proportion": 0.1739
  },
  {
    "Year": 1989,
    "Month": "May",
    "Proportion": 0.1196
  },
  {
    "Year": 1990,
    "Month": "May",
    "Proportion": 0.0978
  },
  {
    "Year": 1991,
    "Month": "May",
    "Proportion": 0.1505
  },
  {
    "Year": 1992,
    "Month": "May",
    "Proportion": 0.1522
  },
  {
    "Year": 1993,
    "Month": "May",
    "Proportion": 0.1538
  },
  {
    "Year": 1994,
    "Month": "May",
    "Proportion": 0.1538
  },
  {
    "Year": 1995,
    "Month": "May",
    "Proportion": 0.1522
  },
  {
    "Year": 1996,
    "Month": "May",
    "Proportion": 0.1758
  },
  {
    "Year": 1997,
    "Month": "May",
    "Proportion": 0.1413
  },
  {
    "Year": 1998,
    "Month": "May",
    "Proportion": 0.0444
  },
  {
    "Year": 1999,
    "Month": "May",
    "Proportion": 0.1461
  },
  {
    "Year": 2000,
    "Month": "May",
    "Proportion": 0.1705
  },
  {
    "Year": 2001,
    "Month": "May",
    "Proportion": 0.1264
  },
  {
    "Year": 2002,
    "Month": "May",
    "Proportion": 0.023
  },
  {
    "Year": 2003,
    "Month": "May",
    "Proportion": 0.1512
  },
  {
    "Year": 2004,
    "Month": "May",
    "Proportion": 0.1512
  },
  {
    "Year": 2005,
    "Month": "May",
    "Proportion": 0.1744
  },
  {
    "Year": 2006,
    "Month": "May",
    "Proportion": 0.1951
  },
  {
    "Year": 2007,
    "Month": "May",
    "Proportion": 0.1538
  },
  {
    "Year": 2008,
    "Month": "May",
    "Proportion": 0.0746
  },
  {
    "Year": 2009,
    "Month": "May",
    "Proportion": 0.1429
  },
  {
    "Year": 2010,
    "Month": "May",
    "Proportion": 0.1607
  },
  {
    "Year": 2011,
    "Month": "May",
    "Proportion": 0.1481
  },
  {
    "Year": 2012,
    "Month": "May",
    "Proportion": 0.1481
  },
  {
    "Year": 2013,
    "Month": "May",
    "Proportion": 0.1481
  },
  {
    "Year": 2014,
    "Month": "May",
    "Proportion": 0.0755
  },
  {
    "Year": 2015,
    "Month": "May",
    "Proportion": 0.0377
  },
  {
    "Year": 2016,
    "Month": "May",
    "Proportion": 0.0755
  },
  {
    "Year": 2017,
    "Month": "May",
    "Proportion": 0.1132
  },
  {
    "Year": 2018,
    "Month": "May",
    "Proportion": 0.0566
  },
  {
    "Year": 2019,
    "Month": "May",
    "Proportion": 0.0755
  },
  {
    "Year": 2020,
    "Month": "May",
    "Proportion": 0.1132
  },
  {
    "Year": 2021,
    "Month": "May",
    "Proportion": 0.0566
  }
];

// March Trend line
// Proportion = 0.00539295*Year + -10.2975
var trendMar = [
  {
    "Year": 1953,
    "Month": "March",
    "Proportion": 0.23493135
  },
  {
    "Year": 2021,
    "Month": "March",
    "Proportion": 0.60165195
  }
];

// April Trend line
// Proportion = -0.00445381*Year + 9.28738
var trendApr = [
  {
    "Year": 1953,
    "Month": "April",
    "Proportion": 0.58908907
  },
  {
    "Year": 2021,
    "Month": "April",
    "Proportion": 0.28622999
  }
];

// May Trend line
// % of Total Count of Site Name = -0.00093914*Year of Year + 2.01007
var trendMay = [
  {
    "Year": 1953,
    "Month": "April",
    "Proportion": 0.17592958
  },
  {
    "Year": 2021,
    "Month": "May",
    "Proportion": 0.11206806
  }
];

// -------------------------------
// ------------ CHART SVG --------
// -------------------------------

// This code is from Louise Moxy
// Create SVG and padding for the chart
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("height", 450)
  .attr("width", 600);
// * I changed the margins below *
const margin = { top: 20, bottom: 50, left: 50, right: 10};
const chart = svg.append("g").attr("transform", `translate(${margin.left},0)`);
const width = +svg.attr("width") - margin.left - margin.right;
const height = +svg.attr("height") - margin.top - margin.bottom;
const grp = chart
  .append("g")
  .attr("transform", `translate(-${margin.left},-${margin.top})`);

// -------------------------------
// ------------ MARCH ------------
// -------------------------------

// This code is from Louise Moxy
// Create scales for
const yScaleMar = d3
  .scaleLinear()
  .range([height, 0])
  // * I changed the code below so that the y-axis goes from 0% to 100% as opposed to the maximum of the data *
  .domain([0, 1]);
const xScaleMar = d3
  .scaleLinear()
  .range([0, width])
  .domain(d3.extent(dataMar, dataPoint => dataPoint.Year));

// This code is from Louise Moxy
const lineMar = d3
  .line()
  .x(dataPoint => xScaleMar(dataPoint.Year))
  .y(dataPoint => yScaleMar(dataPoint.Proportion));

// This code is from Louise Moxy
// Add path
const pathMar = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(dataMar)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#bce679")
  .attr("opacity", 0.4)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 1)
  .attr("d", lineMar)

// This code is from Louise Moxy
const pathLengthMar = pathMar.node().getTotalLength();
const transitionPathMar = d3
  .transition()
  .ease(d3.easeSin)
  .duration(5000);

// This code is from Louise Moxy
pathMar
  .attr("stroke-dashoffset", pathLengthMar)
  .attr("stroke-dasharray", pathLengthMar)
  .transition(transitionPathMar)
  .attr("stroke-dashoffset", 0);

// ----------- MARCH TREND LINE-------------

// This code is from Louise Moxy
// Add path
const pathMarTrend = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(trendMar)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#bce679")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 2)
  .attr("d", lineMar);

// This code is from Louise Moxy
const transitionPathMarTrend = d3
// * I made the duration longer so that it follows the fluctuating pattern*
  .transition()
  .ease(d3.easeSin)
  .duration(5500);

pathMarTrend
  // This code is from Ruben Helsloot here: https://stackoverflow.com/questions/64601357/d3-animating-multiple-lines-the-line-cant-be-completed
  .attr("stroke-dashoffset", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength();
    return `${pathLength}`
  })
  .attr("stroke-dasharray", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength() + 10;
  
    // This part is from visualcinnamon: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
    var dashing = "5, 5"
    var dashLength =
        dashing
            .split(/[\s,]/)
            .map(function (a) { return parseFloat(a) || 0 })
            .reduce(function (a, b) { return a + b });
    var dashCount = Math.ceil( pathLength / dashLength );
    var newDashes = new Array(dashCount).join( dashing + " " );
    var dashArray = newDashes + " 0, " + pathLength;
    return dashArray
    })
  .transition(transitionPathMarTrend)
  .attr("stroke-dashoffset", 0);

// -------------------------------
// ------------ APRIL ------------
// -------------------------------

// This code is from Louise Moxy
// Create scales
const yScaleApr = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(dataApr, dataPoint => dataPoint.Proportion)]);
const xScaleApr = d3
  .scaleLinear()
  .range([0, width])
  .domain(d3.extent(dataApr, dataPoint => dataPoint.Year));

const lineApr = d3
  .line()
  .x(dataPoint => xScaleMar(dataPoint.Year))
  .y(dataPoint => yScaleMar(dataPoint.Proportion));

// This code is from Louise Moxy
// Add path
const pathApr = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(dataApr)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#ffa6b4")
  .attr("opacity", 0.35)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 1)
  .attr("d", lineApr);

// This code is from Louise Moxy
const pathLengthApr = pathApr.node().getTotalLength();
const transitionPathApr = d3
  .transition()
  .ease(d3.easeSin)
// * I added a delay to the line so that it appears after March's lines*
  .delay(7500)
  .duration(5000);

// This code is from Louise Moxy
pathApr
  .attr("stroke-dashoffset", pathLengthApr)
  .attr("stroke-dasharray", pathLengthApr)
  .transition(transitionPathApr)
  .attr("stroke-dashoffset", 0);

// ----------- APRIL TREND LINE-------------

// This code is from Louise Moxy
// Add path
const pathAprTrend = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(trendApr)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#ffa6b4")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 2)
  .attr("d", lineApr);

// This code is from Louise Moxy
const transitionPathAprTrend = d3
  .transition()
  .ease(d3.easeSin)
  .delay(7550)
  .duration(5700);

pathAprTrend
   // This code is from Ruben Helsloot here: https://stackoverflow.com/questions/64601357/d3-animating-multiple-lines-the-line-cant-be-completed
  .attr("stroke-dashoffset", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength() + 3;
    return `${pathLength}`
  })
  .attr("stroke-dasharray", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength() + 3;
    // This part is from visualcinnamon: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
    var dashing = "5, 5"
    var dashLength =
        dashing
            .split(/[\s,]/)
            .map(function (a) { return parseFloat(a) || 0 })
            .reduce(function (a, b) { return a + b });
    var dashCount = Math.ceil( pathLength / dashLength );
    var newDashes = new Array(dashCount).join( dashing + " " );
    var dashArray = newDashes + " 0, " + pathLength;
    return dashArray
    })
  .transition(transitionPathAprTrend)
  .attr("stroke-dashoffset", 0);

// -----------------------------
// ------------ MAY ------------
// -----------------------------

// This code is from Louise Moxy
// Create scales
const yScaleMay = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(dataMay, dataPoint => dataPoint.Proportion)]);
const xScaleMay = d3
  .scaleLinear()
  .range([0, width])
  .domain(d3.extent(dataMay, dataPoint => dataPoint.Year));

// This code is from Louise Moxy
const lineMay = d3
  .line()
  .x(dataPoint => xScaleMar(dataPoint.Year))
  .y(dataPoint => yScaleMar(dataPoint.Proportion));

// This code is from Louise Moxy
// Add path
const pathMay = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(dataMay)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#97cfd0")
  .attr("opacity", 0.45)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 1)
  .attr("d", lineMay);

// This code is from Louise Moxy
const pathLengthMay = pathMay.node().getTotalLength();
const transitionPathMay = d3
// *I added a longer delay and transition so that it appears after March and April's lines*
  .transition()
  .ease(d3.easeSin)
  .delay(7500)
  .duration(5000);

// This code is from Louise Moxy
pathMay
  .attr("stroke-dashoffset", pathLengthMay)
  .attr("stroke-dasharray", pathLengthMay)
  .transition(transitionPathMay)
  .attr("stroke-dashoffset", 0);

// ----------- MAY TREND LINE-------------

// This code is from Louise Moxy
// Add path
const pathMayTrend = grp
  .append("path")
  .attr("transform", `translate(${margin.left},0)`)
  .datum(trendMay)
  .attr("fill", "none")
  // * Here I changed the colors of the line, added an opacity element, and changed the stroke-width*
  .attr("stroke", "#97cfd0")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 2)
  .attr("d", lineMay);

// This code is from Louise Moxy
const transitionPathMayTrend = d3
  .transition()
  .ease(d3.easeSin)
  .delay(7550)
  .duration(5700);

pathMayTrend
  // This code is from Ruben Helsloot here: https://stackoverflow.com/questions/64601357/d3-animating-multiple-lines-the-line-cant-be-completed
  .attr("stroke-dashoffset", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength();
    return `${pathLength}`
  })
  .attr("stroke-dasharray", function(d) {
    // Get the path length of the current element
    const pathLength = this.getTotalLength() + 10;
    // This part is from visualcinnamon: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
    var dashing = "6, 6"
    var dashLength =
        dashing
            .split(/[\s,]/)
            .map(function (a) { return parseFloat(a) || 0 })
            .reduce(function (a, b) { return a + b });
    var dashCount = Math.ceil( pathLength / dashLength );
    var newDashes = new Array(dashCount).join( dashing + " " );
    var dashArray = newDashes + " 0, " + pathLength;
    return dashArray
    })
  .transition(transitionPathMayTrend)
  .attr("stroke-dashoffset", 0);


// -------------------------------
// ------------ AXES -------------
// -------------------------------

// Part of this code is from Louise Moxy
// Add the X Axis
var heightmargin = height + margin.top
chart
  .append("g")
  .attr("transform", "translate(0," + heightmargin + ")")
  .call(d3.axisBottom(xScaleMay)
        .ticks(dataMay.length)
        // The code below is a modificaiton of this answer by hafiz ali: https://stackoverflow.com/questions/38921226/show-every-other-tick-label-on-d3-time-axis
        // Ticks are dates -- Year
        .tickFormat(d3.format("d"))
        // Only use ticks for odd years
        .tickFormat((interval,i) => {
                  return i%2 !== 0 ? " ": interval;
                 }))
  // The code below was a modication of this answer by VividD: https://stackoverflow.com/questions/20947488/d3-grouped-bar-chart-how-to-rotate-the-text-of-x-axis-ticks
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dy", "-.3em")
  .attr("dx", "-.8em")
  .attr("transform", "rotate(-65)");

// The code below is a modification of this answer by Gerardo Furtado: https://stackoverflow.com/questions/38921226/show-every-other-tick-label-on-d3-time-axis
// Remove the ticks for the even years
var ticks = d3.selectAll(".tick");
ticks.each(function(_,i){
    if(i%2 !== 0) d3.select(this).remove();
});

// The code below is fro Louise Moxy
// Add the Y Axis
chart
  .append("g")
  .attr("transform", "translate(" + 0 + "," + margin.top + ")")
  .call(d3.axisLeft(yScaleMar).ticks(10).tickFormat(d3.format(".00%")));

// The code below is a modificiation of mbostock's answer: https://stackoverflow.com/questions/11189284/d3-axis-labeling
// Add x-axis label
chart
  .append("text")
  .attr("text-anchor", "end")
  .attr("x", (width / 2))
  .attr("y", height + 65)
  .attr("font-family", "sans-serif")
  .attr("font-size", 14)
  .text("Year");

// Add y-axis label
chart
  .append("text")
  .attr("text-anchor", "end")
  .attr("x", -50)
  .attr("y", -50)
  .attr("dy", "1em")
  .attr("transform", "rotate(-90)")
  .attr("font-family", "sans-serif")
  .attr("font-size", 14)
  .text("Percentage of First Blooms Occuring in Spring Month");

// Add title
chart
  .append("text")
  .attr("x", (width / 2))             
  .attr("y", 15)
  .attr("text-anchor", "middle")  
  .attr("font-family", "sans-serif")
  .attr("font-size", 16) 
  .text("Cherry Blossom Blooming Patterns");
  
// Add legend
// For March
chart 
  .append('rect')
  .attr('x', 50)
  .attr('y', 25)

  .attr('width', 10)
  .attr('height', 10)
  .attr('stroke', 'black')
  .attr('fill', '#bce679');

chart
  .append('text')
  .attr('x', 70)
  .attr('y', 34)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("March");

// For April
chart 
  .append('rect')
  .attr('x', 50)
  .attr('y', 38)
  .style("opacity", 0)
  .transition()
  .delay(7500)
  .style("opacity", 1)
  .attr('width', 10)
  .attr('height', 10)
  .attr('stroke', 'black')
  .attr('fill', '#ffa6b4');

chart
  .append('text')
  .attr('x', 70)
  .attr('y', 48)
  .style("opacity", 0)
  .transition()
  .delay(7500)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("April");

// For May
chart 
  .append('rect')
  .attr('x', 50)
  .attr('y', 51)
  .style("opacity", 0)
  .transition()
  .delay(7500)
  .style("opacity", 1)
  .attr('width', 10)
  .attr('height', 10)
  .attr('stroke', 'black')
  .attr('fill', '#97cfd0');

chart
  .append('text')
  .attr('x', 70)
  .attr('y', 61)
  .style("opacity", 0)
  .transition()
  .delay(7500)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("May");


// Add annotation to the chart
chart
    .append('line')
    .style("opacity", 0)
    .transition()
    .delay(5120)
    .style("opacity", 1)
    .style("stroke", "lightgray")
    .style("stroke-width", 1)
    .attr("x1", 430)
    .attr("y1", 85)
    .attr("x2",480)
    .attr("y2", 148);

chart
  .append('rect')
  .attr('x', 350)
  .attr('y', 45)
  .style("opacity", 0)
  .transition()
  .delay(5120)
  .style("opacity", 1)
  .attr('width', 150)
  .attr('height', 40)
  .attr('stroke', 'lightgray')
  .attr('fill', 'white');

chart
  .append('text')
  .attr('x', 355)
  .attr('y', 57)
  .style("opacity", 0)
  .transition()
  .delay(5120)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("Despite yearly fluctuations,")

chart
  .append('text')
  .attr('x', 355)
  .attr('y', 69)
  .style("opacity", 0)
  .transition()
  .delay(5120)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("more flowers are now")

chart
  .append('text')
  .attr('x', 355)
  .attr('y', 81)
  .style("opacity", 0)
  .transition()
  .delay(5120)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("blooming early - in March")

// "Hence, less flowers are blooming in April and May"

// Add annotation to the chart
chart
    .append('line')
    .style("opacity", 0)
    .transition()
    .delay(13000)
    .style("opacity", 1)
    .style("stroke", "lightgray")
    .style("stroke-width", 1)
    .attr("x1", 450)
    .attr("y1", 231)
    .attr("x2",453)
    .attr("y2", 355);

chart
    .append('line')
    .style("opacity", 0)
    .transition()
    .delay(13000)
    .style("opacity", 1)
    .style("stroke", "lightgray")
    .style("stroke-width", 1)
    .attr("x1", 480)
    .attr("y1", 315)
    .attr("x2",450)
    .attr("y2", 355);

chart
  .append('rect')
  .attr('x', 400)
  .attr('y', 350)
  .style("opacity", 0)
  .transition()
  .delay(13000)
  .style("opacity", 1)
  .attr('width', 115)
  .attr('height', 40)
  .attr('stroke', 'lightgray')
  .attr('fill', 'white');

chart
  .append('text')
  .attr('x', 405)
  .attr('y', 362)
  .style("opacity", 0)
  .transition()
  .delay(13000)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("Hence, less flowers")

chart
  .append('text')
  .attr('x', 405)
  .attr('y', 374)
  .style("opacity", 0)
  .transition()
  .delay(13000)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("are blooming in")

chart
  .append('text')
  .attr('x', 405)
  .attr('y', 386)
  .style("opacity", 0)
  .transition()
  .delay(13000)
  .style("opacity", 1)
  .attr("text-anchor", "bottom")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12) 
  .text("April and May")
