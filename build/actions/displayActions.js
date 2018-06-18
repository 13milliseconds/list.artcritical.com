module.exports = {
    displayCity: function ($numero) {
        if ($numero < "20" && $numero >= "10") {
            return "Tribeca";

        } else if ($numero < "30" && $numero >= "20") {

            return "Lower East Side";

        } else if ($numero < "60" && $numero >= "30") {

            return "Soho & Noho & East Village";

        } else if ($numero < "170" && $numero >= "60") {

            return "West Village & Chelsea";

        } else if ($numero < "220" && $numero >= "170") {

            return "Midtown & Uptown & Harlem";

        } else if ($numero < "270" && $numero >= "220") {

            return "Brooklyn";

        } else if ($numero < "300" && $numero >= "270") {

            return "Queens & Bronx & Staten Island";

        } else if ($numero < "310" && $numero >= "300") {

            return "Long Island";

        } else if ($numero < "320" && $numero >= "310") {

            return "Upstate New York";

        } else if ($numero < "330" && $numero >= "320") {

            return "New Jersey";

        } else if ($numero < "370" && $numero >= "330") {

            return "Philadelphia";

        } else {
            return "";
        }
    },
    displayCityNum: function ($num) {
        const allCities = [10, 20, 30, 60, 170, 220, 270, 300, 310, 320, 330]
        let winner
        for (let itt of allCities){
            let diff = $num - itt
            if (diff > 0) {
                winner = itt
            } else if (diff == 0){
                return itt
            } else {
                return winner
            }
        }
    },
    displayNeighborhood: function ($numero) { 
        
        if ($numero < "20" && $numero >= "10") {
            return "Tribeca and below";
        }
        else if($numero < "30" && $numero >= "20") {
            return "Lower East Side";
        }
        else if($numero < "40" && $numero >= "30") {
            return "Soho";
        }
        else if($numero < "60" && $numero >= "40") {
            return "Noho/East Village";
        }
        else if($numero < "70" && $numero >= "60") {
            return "West Village";
        }
        else if($numero < "80" && $numero >= "70") {
            return "19th St and below";
        }
        else if($numero < "90" && $numero >= "80") {
            return "20th St and nearby";
        }
        else if($numero < "100" && $numero >= "90") {
            return "21st St and nearby";
        }
        else if($numero < "110" && $numero >= "100") {
            return "22nd St and nearby";
        }
        else if($numero < "120" && $numero >= "110") {
            return "23rd St and nearby";
        }
        else if($numero < "130" && $numero >= "120") {
            return "24th St and nearby";
        }
        else if($numero < "140" && $numero >= "130") {
            return "25th St and nearby";
        }
        else if($numero < "150" && $numero >= "140") {
            return "26th St and nearby";
        }
        else if($numero < "160" && $numero >= "150") {
            return "27th St and above";
        }
        else if($numero < "170" && $numero >= "160") {
            return "Flatiron/Gramercy Park";
        }
        else if($numero < "180" && $numero >= "170") {
            return "Midtown";
        }
        else if($numero < "190" && $numero >= "180") {
            return "57th Street and nearby";
        }
        else if($numero < "200" && $numero >= "190") {
            return "Upper East Side";
        }
        else if($numero < "210" && $numero >= "200") {
            return "Upper West Side";
        }
        else if($numero < "220" && $numero >= "210") {
            return "Harlem";
        }
        else if($numero < "230" && $numero >= "220") {
            return "Brooklyn South";
        }
        else if($numero < "235" && $numero >= "230") {
            return "Dumbo/Downtown";
        }
        else if($numero < "240" && $numero >= "235") {
            return "Fort Greene";
        }
        else if($numero < "250" && $numero >= "240") {
            return "Bushwick/Bed-stuy";
        }
        else if($numero < "260" && $numero >= "250") {
            return "Williamsburg / Greenpoint";
        }
        else if($numero < "270" && $numero >= "260") {
            return "Brooklyn (Other)";
        }
        else if($numero < "272" && $numero >= "270") {
            return "Ridgewood";
        }
        else if($numero < "274" && $numero >= "272") {
            return "Long Island City/Astoria";
        }
        else if($numero < "280" && $numero >= "274") {
            return "Queens (Other)";
        }
        else if($numero < "290" && $numero >= "280") {
            return "The Bronx";
        }
        else if($numero < "300" && $numero >= "290") {
            return "Staten Island";
        }
        else if($numero < "310" && $numero >= "300") {
            return "Long Island";
        }
        else if($numero < "320" && $numero >= "310") {
            return "Upstate New York";
        }
        else if($numero < "330" && $numero >= "320") {
            return "New Jersey";
        }
        else if($numero < "340" && $numero >= "330") {
            return "Philadelphia";
        }
        else if($numero < "350" && $numero >= "340") {
            return "Old City";
        }
        else if($numero < "360" && $numero >= "350") {
            return "West Philadelphia";
        }
        else if($numero < "370" && $numero >= "360") {
            return "North Philadelphia";
        } else {
            return "Other";
        }
    },
    
};