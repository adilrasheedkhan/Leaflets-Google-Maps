function GenerateMAp()       
{    
    //console.log("In map fun:");
    var img = [];
    
    var data = 'data:image/jpeg;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsSAAALEgHS3X78AAAB'+
    'G0lEQVR4nLWVzbWDIBCFvwJsIFBFauFYyDsn2VuBregyG22NbC46MUhIni5Y8PddZmAuxBgpNcAD'+
    'AbgDHXBT333cW4C2wATEQpuBUA0HHDBsIA+g18l79e38CPgiHLhuNv0BzU5kjebt+msWrtzak14+'+
    '5dREaiNxOfiYwDXQjEgSGF7guv035S/hF8NoLXxOOf4FbATSHUzq44xi9vK+gDeG5W1Kfsp1IfcB'+
    'VVwE+oPgvXh3VBgR6A6CLzykcMbJb6fn3Fbmka/FpcHkfke98znGtYhao1jlKRmwrZewwDWZbPa/'+
    '3jIuYzvKj1qPkadYV/RvcC08x8/NJs9qv7U/0ZCLtBRuYHXLvTYhe80yKl9BUMV1quhA5s/cticy'+
    'V2JaFfW5bwAAAABJRU5ErkJggg==';
    
    img.push(data);
    
    data = 'data:image/jpeg;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsSAAALEgHS3X78AAAB'+
    'dElEQVR4nL2WO47CQAyGvxNAmdSUUY4BB6DNRWiTlBFXIRIcgn5req4xW2ArxgnksZktRpEm9nwa'+
    'P+Y3IQSmLCAHCuAEVPItgGzqGSEExiCJHP4Awpf1AGogXQyUG/iDL8AZKIEGaIGnsznNAgIb4OYg'+
    'h5FI7MVOfa7AdhQIbIG7cTzOyg8cje8d2IwBr2L8A+zmwMwZO/EPwO0j0OVsEcxBB3OqBunSME4M'+
    'b+KBtRbIGjAD1UKqPFD7bL8y8KB9avbIZPO5JswANKy5AgvZaCMBNayFArU6m0jAs61WeL2VASgj'+
    'AUtbOPaG50jAxt9Qc7hqSxhg63OYayVFAqqaZCH0+/CrKiyA7Xt9KD+qGGE1LVF7YBL5LU3fgGLw'+
    'f2phDFXp19LDa++/M96wruL3xowhpy2d8utM81VFeKmCnWluDIwXg8APOQ3ST628HKW8kRdnM39q'+
    'c9CUlzhPmUsrjLIvAjp4Rjd5l3STdz4rz38p/yXrFyUFFaVTQF9MAAAAAElFTkSuQmCC';
    
    img.push(data);
    
    data = 'data:image/jpeg;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAB'+
    'mklEQVR4nMWXzZGCQBBG300TMQSKg1Ue5WgKhOEJ9QhhKGUWpmEgJDB7sHu37QVxlJ/DlOUw3d+j'+
    '+Rh6CCEQM4AEyIE9cJTfHEhjc4UQeFd0C1yA0DMaoAayQQCADXBzInfgCpRSgUr+3926G7D5GAA4'+
    'uYQFsOoBXgEHF3eKBpAyaoIKWET6ZClxmuP8NgBwNoG7T4xlcu1MrroXwJV9/Y24ybl+9Ti84Qa5'+
    '855KbLoA1O3VkOImv3ri9g8AyAzhciSAhdHYegB1/WEMcQNRiM7FAzRy4eV7PgDASqtg5kh1hxtT'+
    '3AjqjpkoQC4T14kArqKXK8B+TPe3AJSit1eAo0wcJwJ40rMVKCcCqHwFZvdAMtNbkIbwtw/oDjXV'+
    'PtD8zskFbbeKkQG0Wak9wNZUIar5iBBfGo3sCUAWzPc1lAXz9gOycL6OyATUQ1XC3XlrY9oVaBvT'+
    'isgmhUfzYbvi1oa0E6DlcQR5hd45FxQuLv5c4IzZdTKqeHxYSsY4GTmQTLzROJG2ccH0fIMAOJiU'+
    '9tNx8pFRv3H5EOMHvaic4IfOXL8AAAAASUVORK5CYII=';
    
    img.push(data);
    
    var all_dist = {dists:[], min1:999999999, max1:0, min2:999999999, max2:0};

    /*  SIMPLE STACK CONTAINS HISTORY OF MAP LEVELS */
    //var user_history = [];

    var info_text = [];
    Set_info_text_Default(pLocation);

    /*  NO OF PARTS OF LEGEND, THIS WILL USE IN GETTING COLOR, RANGE, RADIUS OF CIRCLE  */
    var parts1 = 10; //color
    var parts2 = 10; //size

    var default_radius = 10;
    var radius_increment = 3;

    var ids = ['dist','ctsc','schl'];

    /*  COLORS FOR LEGENDS IT MUST BE EQUAL TO THE VALUE OF PARTS   */
   // var color = ["#DF0101","#FFA500","#FFFF00","#008000","#008000","#DF0100","#FFA54","#FFFF04","#008044","#0404B0","#DF0104","#FFA504","#FFFF44","#008444","#040444"];
    
    
    /*red colors with shades*/
    //var color=["#ffcccc","#ffb3b3","#ff9999","#ff8080","#ff6666","#ff4d4d","#ff3333","#ff1a1a","#ff0000","#e60000"];
    var color= ["#800000","#DC143C","#FF3030","#FF7256","#FF8C00","#ECFB03","#CAFF70","#9ACD32","#228B22","#053906"];
   
   
    /*
    
    /*
     map     :   MAIN MAP OBJECT
     popup   :   MAIN POPUP OBJECT, USED WHEN MOUSE WILL BE ON THE CIRCLE
     layer   :   MAIN MAP CIRCLE LAYER, USER TO DRAW CIRCLES
     legend  :   MAIN OBJECT FOR LEGEND
     button  :   OBJECT FOR BACK OF THE THE MAP
    */

    var map = null;
    var popup = null;
    var layer = null;
    var legend1 = null;
    var legend2 = null;
    var button = null;
    var info = null;
	var maxLevel=2;
    db_dist.forEach(function(e)		//db_dist is database object that comes from Query Component In Pentaho cde
    {
        var nam = e[0];
        var lat = e[1];
        var lng = e[2];
        var c_val = parseFloat(e[3]);
        var s_val = parseFloat(e[4]);
		var grd= e[5];
        var area=e[6];
		var sess=e[7];
		
		if(area == pLocation && grd == pGrade && sess==pSession)	//plocation,pGrade,pSession are parametrs that comes from Pentaho Cde .You can use your own
		{
			if (all_dist.max1 < c_val)
				all_dist.max1 = c_val;
			if (all_dist.min1 > c_val)
				all_dist.min1 = c_val;

			if (all_dist.max2 < s_val)
				all_dist.max2 = s_val;
			if (all_dist.min2 > s_val)
				all_dist.min2 = s_val;

			var dist =
			{
				name: nam,
				lat: lat,
				lng: lng,
				c_value: c_val,
				s_value: s_val,
				grade:grd,
				session:sess,
				ctscs: {
					ctsc:[],
					min1:999999999,
					max1:0,
					min2:999999999,
					max2:0
				}
			};
			all_dist.dists.push(dist);
		}
    });
    show(all_dist, "all_dist_with_dist");

    db_ctsc.forEach(function(e)
    {
        var nam = e[0];
        var lat = e[1];
        var lng = e[2];
        var c_val = parseFloat(e[3]);
		var s_val = parseFloat(e[4]);
        var dst = e[5];
		var grd= e[6];
        var loc=e[7];
		var sess=e[8];
		if(loc== pLocation && grd == pGrade && sess==pSession)
		{
			all_dist.dists.forEach(function(dist)
			{
				if(dist.name === dst)
				{
					if (dist.ctscs.max1 < c_val)
						dist.ctscs.max1 = c_val;
					if (dist.ctscs.min1 > c_val)
						dist.ctscs.min1 = c_val;

					if (dist.ctscs.max2 < s_val)
						dist.ctscs.max2 = s_val;
					if (dist.ctscs.min2 > s_val)
						dist.ctscs.min2 = s_val;

					var new_ctsc = {
						name: nam,
						lat:lat,
						lng:lng,
						c_value: c_val,
						s_value: s_val,
						grade:grd,
						session:sess,
						schools: {
							school:[],
							min1:999999999,
							max1:0,
							min2:999999999,
							max2:0
						}
					};

					dist.ctscs.ctsc.push(new_ctsc);
				}
			});
		}
    });
    show(all_dist, "all_dist_with_ctsc");

    db_schl.forEach(function(e)
    {
		  var nam = e[0];
		  var lat = e[1];
		  var lng = e[2];
		  var c_val = parseFloat(e[3]);
		  var s_val = parseFloat(e[4]);
		  var cts = e[5];
		  var grd=e[6];
		  var loc=e[7];
		  var sess=e[8];
    	if(loc== pLocation && grd == pGrade && sess==pSession)
		{
			all_dist.dists.forEach(function (dist)
			{
				dist.ctscs.ctsc.forEach(function(ctsc)
				{
					if(ctsc.name == cts)
					{
						if (ctsc.schools.max1 < c_val)
							ctsc.schools.max1 = c_val;
						if (ctsc.schools.min1 > c_val)
							ctsc.schools.min1 = c_val;
						if (ctsc.schools.max2 < s_val)
							ctsc.schools.max2 = s_val;
						if (ctsc.schools.min2 > s_val)
							ctsc.schools.min2 = s_val;

						var school = {
							name: nam,
							lat: lat,
							lng: lng,
							c_value: c_val,
							s_value: s_val,
							grade:grd,
							session:sess
						};
						ctsc.schools.school.push(school);
					}
				});
			});
		}
    });
    show(all_dist, "all_dist_with_school");

   
   

    ///////////////////////////////////
   Draw_Home_Button();

    /*  Draw_Circle() is a recursive function to draw the circles on the page, it calls itself according to level   */
    Draw_Circle(all_dist, 0);
    ///////////////////////////////////


    function Draw_Circle(data, level)
    {
        Draw_Info();

        console.log("Draw_Circle Data Received:" + data);
        var arr = [];
        var subData;
        var location=pLocation;

        if(layer !== null)
            map.removeLayer(layer);

        layer = new L.layerGroup();

        switch (level)
        {
            case 0:     // district
                subData = data.dists;
                info_text = [];
                map.options.maxZoom = 10;
				Enable_Select();  
                break;

            case 1:     // ctsc
                subData = data.ctsc;
                var a = info_text.slice(0, 2);
                var b = info_text.slice(info_text.length-2, 1);
                info_text = a.concat(b);
                map.options.maxZoom = 15;
				Disable_Select();
                break;

            case 2:     // school
                subData = data.school;
                map.options.maxZoom = 25;
				Disable_Select();
                break;
        }

        //var range_color = Get_Range(data.min1, data.max1, parts1);
		var range_color= Get_Range_For_Color();
		console.log("First Get_Range_For_Color value:",range_color);
        //var range_size = Get_Range(data.min2, data.max2, parts2);
		var range_size= Get_Range_For_Size();
		console.log("First range_size value:",range_size);
        
		subData.forEach(function(d)
        {
            console.log("------circle draw start-----");
            arr.push([d.lat, d.lng]);

            var c = Circle([d.lat, d.lng], d.c_value, d.s_value, range_color, range_size);

            var popup_text = '<strong>' +'<b>Name:</b>'+ d.name + '<br>' +'<b>Grade-Subject:</b>'+ d.grade +'<br>'+'<b>Session:</b>'+ d.session + '<br>'  +'</b>Score (%):</b>'+d.c_value+ '</strong> ';
            c.on('click', function ()
            {
                switch (level)
                {
                    case 0:
                        if(location=='Province/District') 
                        {
                        info_text[0] = {name: '<b>District : ' + d.name + '</b>',
                                        c_val: 'Average (%) : <b>' + d.c_value + '</b>'
                                         s_val: 'N : <b>' + d.s_value + '</b>'
                                        };

                        info_text[1] = {name: '<b>Cluster :   </b>', c_val: ''};
                        info_text[2] = {name: '<b>School : </b>', c_val: ''};
                        }
                        else if(location=='Region/Area')
                        {                            
                        info_text[0] = {name: '<b>Area : ' + d.name + '</b>',
                                        c_val: 'Average (%) : <b>' + d.c_value + '</b>'
                                         s_val: 'N : <b>' + d.s_value + '</b>'
                                        };

                        info_text[1] = {name: '<b>Cluster :   </b>', c_val: ''};
                        info_text[2] = {name: '<b>School : </b>', c_val: ''};
                        }
                        pLevel=1;
                        Draw_Circle(d.ctscs, pLevel);
                        Remove_Popup();
                        break;

                    case 1:
                        info_text[1] = {name: '<b>Cluster : ' + d.name + '</b>',
                                        c_val: 'Average(%) :<b>' + d.c_value + '</b>'
                                         s_val: 'N :<b>' + d.s_value + '</b>'
                                        };
                        info_text[2] = {name: '<b>School : </b>', c_val: ''};
                        pLevel=2;
                        Draw_Circle(d.schools, pLevel);
                        Remove_Popup();
                        break;
                    case 2:
                        info_text[2] = {name: '<b>School : ' + d.name + '</b>',
                                        c_val: 'Average(%) :<b>' + d.c_value + '</b>'
                                         s_val: 'N :<b> ' + d.s_value + '</b>'
                                        };
                        Draw_Info();
                        Remove_Popup();
                        break;
                }
				 if(level < maxLevel)
                {
                     user_history.push({data: data, level: level});
                }
                //console.log("User History in DDl:",user_history);
            });

            c.on('mouseover', function ()
            {
                popup = L.popup({offset: [0, -10], closeOnClick: false})
                        .setLatLng([d.lat, d.lng])
                        .setContent(popup_text)
                        .openOn(map);
            });

            c.on('mouseout', function()
            {
                Remove_Popup();
            });

            c.addTo(layer);
            console.log("circle draw end----------------------------");
        });

        
		Draw_Button();
        map.fitBounds(arr);
        map.addLayer(layer);
    }

    function Circle(center, c_value, s_value, c_range, s_range)
    {
        console.log("circle Data Received:" + [center, c_value, s_value, s_range, c_range]);

        var c  = Get_Color(c_range, c_value);
        var r = Get_Radius(s_range, s_value);

        var cr = L.circleMarker(center,
                {
                    radius: r,
                    fillColor: c,
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.5
                });

        console.log("Circle Created : " + cr);
        return cr;
    }

	
    function Draw_Legend2(range, position, title)
    {
        if(legend1 !== null)
            map.removeControl(legend1);

        legend1 = L.control({position: position});

        legend1.onAdd = function ()
        {
            var div = L.DomUtil.create('div', 'info legend'),
                    grades = range,
                    labels = ['<strong>' + title + '</strong>'],
                    from, to;

            for (var i = 0; i < (grades.length-1); i++)
            {
                from = grades[i];
                to = grades[i + 1];

                //console.log(color[i]);
                labels.push(
                        '<i style="background:' + color[i] + '"><font color=' + color[i] + '>___</font></i> ' +
                        (from+1) + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');

            //console.log(div);
            return div;
        };

        legend1.addTo(map);
    }

	function Draw_Legend1(range, position, title)
    {
        if(legend2 !== null)
            map.removeControl(legend2);

        legend2 = L.control({position: position});

        legend2.onAdd = function ()
        {
            var div = L.DomUtil.create('div', 'info legend'),
                    grades = range,
                    labels = ['<strong>' + title + '</strong>'],
                    from, 
					to;

            labels.push('<table>');
            for (var i = 0; i < 3; i++)
            {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                        '<tr><td><img src="' + img[i] + '"/></td> ' +
                        '<td>' + (from + 1) + (to ? '&ndash;' + to : '+') + '</td></tr>');
            }
            labels.push('</table>');
            div.innerHTML = labels;  //.join('<br>');

            //console.log(div);
            return div;
        };

        legend2.addTo(map);
    }

    function Remove_Popup()
    {
        var ele = document.getElementsByClassName('leaflet-popup-close-button');
        for(var i=0; i<ele.length; i++)
            ele[i].click();
    }

    function Draw_Info()
    {
        ids.forEach(function(id)
        {
            document.getElementById(id).innerHTML = "";
        });

        for(var i=0; i<info_text.length; i++)
        {
            document.getElementById(ids[i]).innerHTML = info_text[i].name + '<br/>' + info_text[i].c_val ;
        }
    }

    function Draw_Home_Button()
    {
 		if(button1 !== null)
        {
    		map.removeControl(button1);	
		}
           
        button1=null;
        button1 = L.easyButton('<span> H </span>', function()
        {
            if(user_history.length > 0)
            {
                Set_info_text_Default(pLocation);
                Draw_Circle(all_dist, 0);
            }
        }).addTo(map);
    }

    function Draw_Button()
    {
       if(button !== null)
        {
			map.removeControl(button);	
		}
           
        button=null;
        button = L.easyButton('<span> < </span>', function()
        {
            if(user_history.length > 0)
            {
                Draw_Circle(user_history[user_history.length-1].data, user_history[user_history.length-1].level);

                user_history.pop();
                
            }
        }).addTo(map);
    }

	function Get_Range_For_Color()
	{
		var  ColorRange = [-1,10,20,30,40,50,60,70,80,90,100];
		return ColorRange;
	}
	function Get_Range_For_Size()
	{
		//var SizeRange=[10,50,100,500,1000,2500,5000,7500,10000,100000];
	var SizeRange=[10,50,100,500,1000,2000,3000,4000,5000,6000,8000,10000,100000];
		return SizeRange;
	}
    function Get_Color(range, value)
    {
        console.log("Color Data Received: range:" + range + ", value:" + value);
		
		
        var c = '#000000';

        for(var i=0; i<range.length-1; i++)
        {
            if(value > range[i] && value <= range[i+1])
            {
                c = color[i];
                break;
            }
        }

        console.log("Color Generated: " + c);

        return c;
    }

    function Get_Radius(range, value)
    {
        console.log("Radius Data Received: range:" + range + ",value:" + value);

        var radius = default_radius;

        for(var i=0; i<range.length-1; i++)
        {
            if(value > range[i] && value <= range[i+1])
            {
                radius = (default_radius + radius_increment * i);
                break;
            }
        }

        console.log("Radius Generated: " + radius);

        return radius;
    }

    function Get_Range(min, max, parts)
    {
        console.log("Range Data Received: " + [min,max,parts]);

        min = Math.floor(min) - 1;
        max = Math.ceil(max);

        console.log("Range Data Changed: " + [min,max,parts]);

        var p = Math.round((max - min) / parts);// increment
        console.log("individual : " + p);

        var range = [min];

        for(var i=1; i<=parts; i++)
        {
            min += p;
            range.push(min);
        }

        range[range.length-1] = max;

        if(range[0] > range[range.length-1])
            range = range.reverse();

        range = range.map(function(x)
        {
            return parseInt(x);
        });

        console.log("Range Generated: " + range);
        return range;
    }

    function Set_info_text_Default(location)
    {
       if(location=='Province/District')
        {
        info_text[0] = {name: '<b>District : </b>', c_val: ''};
        info_text[1] = {name: '<b>Cluster : </b>', c_val: ''};
        info_text[2] = {name: '<b>School : </b>', c_val: ''};
        }
        else if(location=='Region/Area') 
        {
        info_text[0] = {name: '<b>Area : </b>', c_val: ''};
        info_text[1] = {name: '<b>Cluster : </b>', c_val: ''};
        info_text[2] = {name: '<b>School : </b>', c_val: ''};
        }
    }
	
		
    function show(data, msg)
    {
        console.log("------------" + msg + "------------");
        console.log(data);
        console.log("------------" + "END" + "------------");
    }
} 
