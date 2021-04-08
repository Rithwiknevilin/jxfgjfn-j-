
name_of_the_paragrapgh_array = [];
    
function submit()
{
    var display_paragrapgh_array = [];

    for (var j = 1; j <= 8; j++) 
    {
        var name_of_the_paragrapgh = document.getElementById("name_of_the_paragrapgh_"+j).value;
        console.log(name_of_the_paragrapgh);
        name_of_the_paragrapgh_array.push(name_of_the_paragrapgh);
    }

    console.log(name_of_the_paragrapgh_array);

    var lenght_of_name_of_paragrapghs_array = name_of_the_paragrapgh_array.length;
    console.log(lenght_of_name_of_paragrapghs_array);

    for (var k = 0; k < lenght_of_name_of_paragrapghs_array; k++) 
    {
        display_paragrapgh_array.push("<h4>NAME - "+ name_of_the_paragrapgh_array[k] + "</h4>");
        console.log(display_paragrapgh_array);
    }

    console.log(display_paragrapgh_array);
    document.getElementById("display_name_with_commas").innerHTML = display_paragrapgh_array;

    var remove_commas = display_paragrapgh_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_the_paragrapgh_array.sort();
    console.log(name_of_the_paragrapgh_array);

    var display_paragrapgh_array_sorting = [];

    var lenght_of_name_of_paragrapghs_array = name_of_the_paragrapgh_array.length;
    console.log(lenght_of_name_of_paragrapghs_array);

    for (var k = 0; k < lenght_of_name_of_paragrapghs_array; k++) 
    {
        display_paragrapgh_array_sorting.push("<h4>NAME - " + name_of_the_paragrapgh_array[k] + "</h4>");
        console.log(display_paragrapgh_array_sorting);
    }

    var remove_commas = display_paragrapgh_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


//Additional activity
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_paragrapgh_array +"</h1>";
}





