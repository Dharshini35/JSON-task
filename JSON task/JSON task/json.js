
document.getElementById('personalForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const personalData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value, 
        number: document.getElementById('number').value, 
        department: document.getElementById('department').value,
        college: document.getElementById('college').value, 
    }
    localStorage.setItem('personalData', JSON.stringify(personalData));
    alert('Personal details saved successfully');
});
document.getElementById('printBtn').addEventListener('click', () => {
    const personalData = JSON.parse(localStorage.getItem('personalData'));
    if (personalData) {
        const print = window.open('', '_blank');
        print.document.write(`Name: ${personalData.name}<br>`);
        print.document.write(`Age: ${personalData.age}<br>`);
        print.document.write(`Mobile: ${personalData.number}<br>`);
        print.document.write(`Department: ${personalData.department}<br>`);
        print.document.write(`College: ${personalData.college}<br>`);
        print.document.close();
    } 
    else {
        alert('No personal data found');
    }
});