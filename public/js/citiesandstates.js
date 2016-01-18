$(function(){

var myJson = {
    "state": [
        {
            "name": "Alabama",
            "id": "1",
            "cities": [
                {
                    "name": "Birmingham",
                    "id": "1"
                },
                {
                    "name": "Huntsville",
                    "id": "2"
                },
                {
                    "name": "Mobile",
                    "id": "3"
                },
                {
                    "name": "Montgomery",
                    "id": "4"
                },
                {
                    "name": "Tuscaloosa",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Alaska",
            "id": "2",
            "cities": [
                {
                    "name": "Anchorage",
                    "id": "1"
                },
                {
                    "name": "Fairbanks",
                    "id": "2"
                },
                {
                    "name": "Juneau",
                    "id": "3"
                },
                {
                    "name": "Ketchikan",
                    "id": "4"
                },
                {
                    "name": "Sitka",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Arizona",
            "id": "3",
            "cities": [
                {
                    "name": "Glendale",
                    "id": "1"
                },
                {
                    "name": "Mesa",
                    "id": "2"
                },
                {
                    "name": "Phoenix",
                    "id": "3"
                },
                {
                    "name": "Scottsdale",
                    "id": "4"
                },
                {
                    "name": "Tucson",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Arkansas",
            "id": "4",
            "cities": [
                {
                    "name": "Fayetteville",
                    "id": "1"
                },
                {
                    "name": "Fort Smith",
                    "id": "2"
                },
                {
                    "name": "Jonesboro",
                    "id": "3"
                },
                {
                    "name": "Little Rock",
                    "id": "4"
                },
                {
                    "name": "North Little Rock",
                    "id": "5"
                }
            ]
        },
        {
            "name": "California",
            "id": "5",
            "cities": [
                {
                    "name": "Long Beach",
                    "id": "1"
                },
                {
                    "name": "Los Angeles",
                    "id": "2"
                },
                {
                    "name": "San Diego",
                    "id": "3"
                },
                {
                    "name": "San Francisco",
                    "id": "4"
                },
                {
                    "name": "San Jose",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Colordao",
            "id": "6",
            "cities": [
                {
                    "name": "Aurora",
                    "id": "1"
                },
                {
                    "name": "Colorado Springs",
                    "id": "2"
                },
                {
                    "name": "Denver",
                    "id": "3"
                },
                {
                    "name": "Fort Collins",
                    "id": "4"
                },
                {
                    "name": "Lakewood",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Connecticut",
            "id": "7",
            "cities": [
                {
                    "name": "Bridgeport",
                    "id": "1"
                },
                {
                    "name": "Hartford",
                    "id": "2"
                },
                {
                    "name": "New Haven",
                    "id": "3"
                },
                {
                    "name": "Stamford",
                    "id": "4"
                },
                {
                    "name": "Waterbury",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Deleware",
            "id": "8",
            "cities": [
                {
                    "name": "Dover",
                    "id": "1"
                },
                {
                    "name": "Milforrd",
                    "id": "2"
                },
                {
                    "name": "Newark",
                    "id": "3"
                },
                {
                    "name": "Seaford",
                    "id": "4"
                },
                {
                    "name": "Wilmington",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Florida",
            "id": "9",
            "cities": [
                {
                    "name": "Hilaeah",
                    "id": "1"
                },
                {
                    "name": "Jacksonville",
                    "id": "2"
                },
                {
                    "name": "Miami",
                    "id": "3"
                },
                {
                    "name": "St. Petersburg",
                    "id": "4"
                },
                {
                    "name": "Tampa",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Georgia",
            "id": "10",
            "cities": [
                {
                    "name": "Atlanta",
                    "id": "1"
                },
                {
                    "name": "Athens-Clarke County",
                    "id": "2"
                },
                {
                    "name": "Augusta-Richmond County",
                    "id": "3"
                },
                {
                    "name": "Columbus",
                    "id": "4"
                },
                {
                    "name": "Savannah",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Hawaii",
            "id": "11",
            "cities": [
                {
                    "name": "Hilo",
                    "id": "1"
                },
                {
                    "name": "Honolulu",
                    "id": "2"
                },
                {
                    "name": "Kailua",
                    "id": "3"
                },
                {
                    "name": "Kaneohe",
                    "id": "4"
                },
                {
                    "name": "Waipahu",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Idaho",
            "id": "12",
            "cities": [
                {
                    "name": "Boise",
                    "id": "1"
                },
                {
                    "name": "Idaho Falls",
                    "id": "2"
                },
                {
                    "name": "Meridian",
                    "id": "3"
                },
                {
                    "name": "Nampa",
                    "id": "4"
                },
                {
                    "name": "Pocatello",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Illinois",
            "id": "13",
            "cities": [
                {
                    "name": "Aurora",
                    "id": "1"
                },
                {
                    "name": "Chicago",
                    "id": "2"
                },
                {
                    "name": "Naperville",
                    "id": "3"
                },
                {
                    "name": "Peoria",
                    "id": "4"
                },
                {
                    "name": "Rockford",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Indiana",
            "id": "14",
            "cities": [
                {
                    "name": "Evansville",
                    "id": "1"
                },
                {
                    "name": "Fort Wayne",
                    "id": "2"
                },
                {
                    "name": "Gary",
                    "id": "3"
                },
                {
                    "name": "Indianapolis",
                    "id": "4"
                },
                {
                    "name": "South Bend",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Iowa",
            "id": "15",
            "cities": [
                {
                    "name": "Cedar Rapids",
                    "id": "1"
                },
                {
                    "name": "Davenport",
                    "id": "2"
                },
                {
                    "name": "Des Moines",
                    "id": "3"
                },
                {
                    "name": "Sioux City",
                    "id": "4"
                },
                {
                    "name": "Waterloo",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Kansas",
            "id": "16",
            "cities": [
                {
                    "name": "Kansas City",
                    "id": "1"
                },
                {
                    "name": "Olathe",
                    "id": "2"
                },
                {
                    "name": "Overland Park",
                    "id": "3"
                },
                {
                    "name": "Topeka",
                    "id": "4"
                },
                {
                    "name": "Wichita",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Kentucky",
            "id": "17",
            "cities": [
                {
                    "name": "Bowling Green",
                    "id": "1"
                },
                {
                    "name": "Covington",
                    "id": "2"
                },
                {
                    "name": "Lexington-Fayette",
                    "id": "3"
                },
                {
                    "name": "Louiseville",
                    "id": "4"
                },
                {
                    "name": "Owensboro",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Louisiana",
            "id": "18",
            "cities": [
                {
                    "name": "Baton Rouge",
                    "id": "1"
                },
                {
                    "name": "Lafayette",
                    "id": "2"
                },
                {
                    "name": "Lake Charles",
                    "id": "3"
                },
                {
                    "name": "New Orleans",
                    "id": "4"
                },
                {
                    "name": "Shreveport",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Maine",
            "id": "19",
            "cities": [
                {
                    "name": "Auburn",
                    "id": "1"
                },
                {
                    "name": "Bangor",
                    "id": "2"
                },
                {
                    "name": "Lewiston",
                    "id": "3"
                },
                {
                    "name": "Portland",
                    "id": "4"
                },
                {
                    "name": "South Portland",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Maryland",
            "id": "20",
            "cities": [
                {
                    "name": "Baltimore",
                    "id": "1"
                },
                {
                    "name": "Bowie",
                    "id": "2"
                },
                {
                    "name": "Frederick",
                    "id": "3"
                },
                {
                    "name": "Gaithersburg",
                    "id": "4"
                },
                {
                    "name": "Rockville",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Massachusetts",
            "id": "21",
            "cities": [
                {
                    "name": "Boston",
                    "id": "1"
                },
                {
                    "name": "Cambridge",
                    "id": "2"
                },
                {
                    "name": "Lowell",
                    "id": "3"
                },
                {
                    "name": "Springfield",
                    "id": "4"
                },
                {
                    "name": "Worcester",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Michigan",
            "id": "22",
            "cities": [
                {
                    "name": "Detroit",
                    "id": "1"
                },
                {
                    "name": "Flint",
                    "id": "2"
                },
                {
                    "name": "Grand Rapids",
                    "id": "3"
                },
                {
                    "name": "Sterling Heights",
                    "id": "4"
                },
                {
                    "name": "Warren",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Minnesota",
            "id": "23",
            "cities": [
                {
                    "name": "Bloomington",
                    "id": "1"
                },
                {
                    "name": "Duluth",
                    "id": "2"
                },
                {
                    "name": "Minneapolis",
                    "id": "3"
                },
                {
                    "name": "Rochester",
                    "id": "4"
                },
                {
                    "name": "St. Paul",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Mississippi",
            "id": "24",
            "cities": [
                {
                    "name": "Biloxi",
                    "id": "1"
                },
                {
                    "name": "Greenville",
                    "id": "2"
                },
                {
                    "name": "Gulfport",
                    "id": "3"
                },
                {
                    "name": "Hattiesburg",
                    "id": "4"
                },
                {
                    "name": "Jackson",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Missouri",
            "id": "25",
            "cities": [
                {
                    "name": "Columbia",
                    "id": "1"
                },
                {
                    "name": "Independence",
                    "id": "2"
                },
                {
                    "name": "Kansas City",
                    "id": "3"
                },
                {
                    "name": "Springfield",
                    "id": "4"
                },
                {
                    "name": "St. Louis",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Montana",
            "id": "26",
            "cities": [
                {
                    "name": "Billings",
                    "id": "1"
                },
                {
                    "name": "Butte-Silver Bow",
                    "id": "2"
                },
                {
                    "name": "Bozeman",
                    "id": "3"
                },
                {
                    "name": "Great Falls",
                    "id": "4"
                },
                {
                    "name": "Missoula",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Nebraska",
            "id": "27",
            "cities": [
                {
                    "name": "Bellevue",
                    "id": "1"
                },
                {
                    "name": "Grand Island",
                    "id": "2"
                },
                {
                    "name": "Kearney",
                    "id": "3"
                },
                {
                    "name": "Lincoln",
                    "id": "4"
                },
                {
                    "name": "Omaha",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Nevada",
            "id": "28",
            "cities": [
                {
                    "name": "Henderson",
                    "id": "1"
                },
                {
                    "name": "North Las Vegas",
                    "id": "2"
                },
                {
                    "name": "Las Vegas",
                    "id": "3"
                },
                {
                    "name": "Reno",
                    "id": "4"
                },
                {
                    "name": "Sparks",
                    "id": "5"
                }
            ]
        },
        {
            "name": "New Hampshire",
            "id": "29",
            "cities": [
                {
                    "name": "Concord",
                    "id": "1"
                },
                {
                    "name": "Derry",
                    "id": "2"
                },
                {
                    "name": "Manchester",
                    "id": "3"
                },
                {
                    "name": "Nashua",
                    "id": "4"
                },
                {
                    "name": "Rochester",
                    "id": "5"
                }
            ]
        },
        {
            "name": "New Jersey",
            "id": "30",
            "cities": [
                {
                    "name": "Edison",
                    "id": "1"
                },
                {
                    "name": "Eilzabeth",
                    "id": "2"
                },
                {
                    "name": "Jersey City",
                    "id": "3"
                },
                {
                    "name": "Newark",
                    "id": "4"
                },
                {
                    "name": "Paterson",
                    "id": "5"
                }
            ]
        },
        {
            "name": "New Mexico",
            "id": "31",
            "cities": [
                {
                    "name": "Albuquerque",
                    "id": "1"
                },
                {
                    "name": "Las Cruces",
                    "id": "2"
                },
                {
                    "name": "Rio Rancho",
                    "id": "3"
                },
                {
                    "name": "Rosewell",
                    "id": "4"
                },
                {
                    "name": "Sante Fe",
                    "id": "5"
                }
            ]
        },
        {
            "name": "New York",
            "id": "32",
            "cities": [
                {
                    "name": "Buffalo",
                    "id": "1"
                },
                {
                    "name": "New York",
                    "id": "2"
                },
                {
                    "name": "Rochester",
                    "id": "3"
                },
                {
                    "name": "Syracuse",
                    "id": "4"
                },
                {
                    "name": "Yonkers",
                    "id": "5"
                }
            ]
        },
        {
            "name": "North Carolina",
            "id": "33",
            "cities": [
                {
                    "name": "Charlotte",
                    "id": "1"
                },
                {
                    "name": "Durham",
                    "id": "2"
                },
                {
                    "name": "Greensboro",
                    "id": "3"
                },
                {
                    "name": "Raleigh",
                    "id": "4"
                },
                {
                    "name": "Winston-Salem",
                    "id": "5"
                }
            ]
        },
        {
            "name": "North Dakota",
            "id": "34",
            "cities": [
                {
                    "name": "Bismarck",
                    "id": "1"
                },
                {
                    "name": "Fargo",
                    "id": "2"
                },
                {
                    "name": "Grand Forks",
                    "id": "3"
                },
                {
                    "name": "Mandan",
                    "id": "4"
                },
                {
                    "name": "Minot",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Ohio",
            "id": "35",
            "cities": [
                {
                    "name": "Akron",
                    "id": "1"
                },
                {
                    "name": "Cincinnati",
                    "id": "2"
                },
                {
                    "name": "Cleveland",
                    "id": "3"
                },
                {
                    "name": "Columbus",
                    "id": "4"
                },
                {
                    "name": "Toledo",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Oklahoma",
            "id": "36",
            "cities": [
               {
                    "name": "Broken Arrow",
                    "id": "1"
                },
                {
                    "name": "Lawton",
                    "id": "2"
                },
                {
                    "name": "Norman",
                    "id": "3"
                },
                {
                    "name": "Oklahoma City",
                    "id": "4"
                },
                {
                    "name": "Tulsa",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Oregon",
            "id": "37",
            "cities": [
                {
                    "name": "Beaverton",
                    "id": "1"
                },
                {
                    "name": "Eugene",
                    "id": "2"
                },
                {
                    "name": "Gresham",
                    "id": "3"
                },
                {
                    "name": "Portland",
                    "id": "4"
                },
                {
                    "name": "Salem",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Pennsylvania",
            "id": "38",
            "cities": [
                {
                    "name": "Allentown",
                    "id": "1"
                },
                {
                    "name": "Erie",
                    "id": "2"
                },
                {
                    "name": "Philadelphia",
                    "id": "3"
                },
                {
                    "name": "Pittsburgh",
                    "id": "4"
                },
                {
                    "name": "Upper Darby",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Rhode Island",
            "id": "39",
            "cities": [
                {
                    "name": "Cranston",
                    "id": "1"
                },
                {
                    "name": "East Providence",
                    "id": "2"
                },
                {
                    "name": "Pawtucket",
                    "id": "3"
                },
                {
                    "name": "Providence",
                    "id": "4"
                },
                {
                    "name": "Warwick",
                    "id": "5"
                }
            ]
        },
        {
            "name": "South Carolina",
            "id": "40",
            "cities": [
                {
                    "name": "Charleston",
                    "id": "1"
                },
                {
                    "name": "Columbia",
                    "id": "2"
                },
                {
                    "name": "Greenville",
                    "id": "3"
                },
                {
                    "name": "North Charleston",
                    "id": "4"
                },
                {
                    "name": "Rock Hill",
                    "id": "5"
                }
            ]
        },
        {
            "name": "South Dakota",
            "id": "41",
            "cities": [
                {
                    "name": "Aberdeen",
                    "id": "1"
                },
                {
                    "name": "Brookings",
                    "id": "2"
                },
                {
                    "name": "Rapid City",
                    "id": "3"
                },
                {
                    "name": "Sioux Falls",
                    "id": "4"
                },
                {
                    "name": "Watertown",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Tennessee",
            "id": "42",
            "cities": [
                {
                    "name": "Chattanooga",
                    "id": "1"
                },
                {
                    "name": "Clarksville",
                    "id": "2"
                },
                {
                    "name": "Knoxville",
                    "id": "3"
                },
                {
                    "name": "Memphis",
                    "id": "4"
                },
                {
                    "name": "Nashville",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Texas",
            "id": "43",
            "cities": [
                {
                    "name": "Austin",
                    "id": "1"
                },
                {
                    "name": "Dallas",
                    "id": "2"
                },
                {
                    "name": "El Paso",
                    "id": "3"
                },
                {
                    "name": "Houston",
                    "id": "4"
                },
                {
                    "name": "San Antonio",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Utah",
            "id": "44",
            "cities": [
                {
                    "name": "Orem",
                    "id": "1"
                },
                {
                    "name": "Provo",
                    "id": "2"
                },
                {
                    "name": "Salt Lake City",
                    "id": "3"
                },
                {
                    "name": "Sandy",
                    "id": "4"
                },
                {
                    "name": "West Valley City",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Vermont",
            "id": "45",
            "cities": [
                {
                    "name": "Burlington",
                    "id": "1"
                },
                {
                    "name": "Colchester",
                    "id": "2"
                },
                {
                    "name": "Essex",
                    "id": "3"
                },
                {
                    "name": "Rutland",
                    "id": "4"
                },
                {
                    "name": "South Burlington",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Virginia",
            "id": "46",
            "cities": [
                {
                    "name": "Chesapeake",
                    "id": "1"
                },
                {
                    "name": "Newport News",
                    "id": "2"
                },
                {
                    "name": "Norfolk",
                    "id": "3"
                },
                {
                    "name": "Richmond",
                    "id": "4"
                },
                {
                    "name": "Virginia",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Washington",
            "id": "47",
            "cities": [
                {
                    "name": "Bellevue",
                    "id": "1"
                },
                {
                    "name": "Seattle",
                    "id": "2"
                },
                {
                    "name": "Spokane",
                    "id": "3"
                },
                {
                    "name": "Tacoma",
                    "id": "4"
                },
                {
                    "name": "Vancouver",
                    "id": "5"
                }
            ]
        },
        {
            "name": "West Virginia",
            "id": "48",
            "cities": [
                {
                    "name": "Charleston",
                    "id": "1"
                },
                {
                    "name": "Huntington",
                    "id": "2"
                },
                {
                    "name": "Morgantown",
                    "id": "3"
                },
                {
                    "name": "Parkersburg",
                    "id": "4"
                },
                {
                    "name": "Wheeling",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Wisconsin",
            "id": "49",
            "cities": [
                {
                    "name": "Green Bay",
                    "id": "1"
                },
                {
                    "name": "Kenosha",
                    "id": "2"
                },
                {
                    "name": "Madison",
                    "id": "3"
                },
                {
                    "name": "Milwaukee",
                    "id": "4"
                },
                {
                    "name": "Racine",
                    "id": "5"
                }
            ]
        },
        {
            "name": "Wyoming",
            "id": "50",
            "cities": [
                {
                    "name": "Casper",
                    "id": "1"
                },
                {
                    "name": "Cheyenne",
                    "id": "2"
                },
                {
                    "name": "Gillette",
                    "id": "3"
                },
                {
                    "name": "Laramie",
                    "id": "4"
                },
                {
                    "name": "Rock Springs",
                    "id": "5"
                }
            ]
        }
     ]
}

    $.each(myJson.state, function(index, value) {
        $("#state").append('<option value="'+value.name+'">'+value.name+'</option>');
    });

    $('#state').on('change', function(){
        for(var i = 0; i < myJson.state.length; i++) {
            if(myJson.state[i].name == $(this).val()){
                $('#city').html('<option value="000"> - Select City </option>');
                $.each(myJson.state[i].cities, function(index, value) {
                    $('#city').append('<option value="'+value.name+'">'+value.name+'</option>');
                });
            }
        }
    });

});
