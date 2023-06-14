const buttons = document.getElementsByTagName('button');

let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=')
         {
            string = eval(string);
            document.querySelector('h2').innerHTML = string;
        }

        else if (event.target.innerHTML === "Reset") 
        {
            string = "";
            document.querySelector('h2').innerHTML = string;
        }

        else if (event.target.innerHTML === "DEL") 
        {
            string = string.toString().slice(0,-1);
            document.querySelector('h2').innerHTML = string;
        }

        else {
            if (string == "" && (event.target.innerHTML == '+' || event.target.innerHTML == '-' || event.target.innerHTML == '*' || event.target.innerHTML == '/' || event.target.innerHTML == 'DEL'))
             {
                document.querySelector('h2').innerHTML = '';
            }

            else {
                string = string + event.target.innerHTML;
                document.querySelector('h2').innerHTML = string;
            }
        }
    })
})