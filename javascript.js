
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = '';
            }
        })
        function myFunction() {
            let input = Number(document.getElementById("input").value);
            let result;
            if (input >= 35) {
                result = `Your Enter ${input} which is greater than 35 So it's Hot Day.`
                document.getElementById("output").style.background = "brown"

            }
            else if (input < 35 && input > 25) {
                result = `Your Enter ${input} which is less than 35 and greater then 25 So it's Pleasant Day.`
                document.getElementById("output").style.background = "green"

            }
            else {
                result = `Your Enter ${input} which is less than 25 So it's Cool Day.`
                document.getElementById("output").style.background = "purple"
            }

            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;






        }