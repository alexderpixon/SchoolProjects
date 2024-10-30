const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
}

person["age"] = 22;
person["city"] = "Lviv";
person.greet = function() {
    return "Witaj, " + this.firstName + " " + this.lastName + "!";
}
person.isAdult = function() {
    return this.age >= 18;
}

document.getElementById("gowno").innerHTML = person.greet() + "</br>" + "Osoba jest pelnoletnia: " + person.isAdult();


document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); 
    
    function Human(first, last, id, age, city) {
        this.firstName = first;
        this.lastName = last;
        this.id = id;
        this.age = age;
        this.city = city;
    }

    let firstName = "Imie: " + document.getElementById("firstName").value;
    let lastName = "Nazwisko: " + document.getElementById("lastName").value;
    let ID = "ID: " + document.getElementById("id").value;
    let age = "Wiek: " + document.getElementById("age").value;
    let city = "Miasto: " + document.getElementById("city").value;

    const human = new Human(firstName, lastName, ID, age, city);
    
    let text = "";
    for(let x in human) {
        text += human[x] + ", ";
    }

    document.getElementById("pidor").innerHTML = text;


    
    console.log()
    
});