
    const form = document.getElementById('contactForm');
    const contactsTableBody = document.getElementById('contactsTableBody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${phone}</td>`;
        contactsTableBody.appendChild(row);

        form.reset();
    });
