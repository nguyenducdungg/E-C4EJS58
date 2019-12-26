let persons = [
    {
      'name': "Hùng",
      'age': 20,
      'school': "ĐHBK",
    },
    {
      'name': "Tùng",
      'age': 22,
      'school': "ĐHHN",
    },
    {
      'name': "Quang",
      'age': 25,
      'school': "ĐHCN",
    },
]
for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    let html = `
    <tr>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.school}</td>
    </tr>
      `
      document.getElementById('aaa').innerHTML += html;
}
function display () {
    let ul = getElementById("infor") ;
    ul.innerHTML = ''
}
