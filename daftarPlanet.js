fetch('https://swapi.co/api/planets/')
    .then(res => {
        console.log(res)
        var response = res.json()
        response.then(data => {
            console.log(data)
            render(data.results)
        })
    })
    .catch(err => {
        console.log('error')
    })

function render(results) {

    for (var i = 0; i < results.length; i++) {
        planets.innerHTML +=
            "<tr><th>" + (i + 1) +
            "</th><td>" + results[i].name +
            "</td><td>" + results[i].rotation_period +
            "</td><td>" + results[i].orbital_period +
            "</td><td>" + results[i].diameter +
            "</td><td>" + results[i].climate +
            "</td><td>" + results[i].gravity +
            "</td><td>" + results[i].terrain +
            "</td><td>" + results[i].surface_water +
            "</td><td>" + results[i].population +
            "</td><td>" + results[i].residents +
            "</td><td>" + results[i].films +
            "</td><td>" + results[i].created +
            "</td><td>" + results[i].edited +
            "</td><td>" + results[i].url +
            "</td></tr>"
    }
}

function searchFunction() {
    //deklarasi variable yang akan dipakai
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("showTable");
    tr = table.getElementsByTagName("tr");

    //looping untuk menemukan kriteria sesuai text yang diinput user
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}