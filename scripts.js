document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('filterInput');
    const projectsList = document.getElementById('projectsList');
    const projects = projectsList.getElementsByTagName('li');

    filterInput.addEventListener('keyup', function() {
        const filterValue = filterInput.value.toLowerCase();
        for (let i = 0; i < projects.length; i++) {
            const tech = projects[i].getAttribute('data-tech').toLowerCase();
            if (tech.indexOf(filterValue) > -1) {
                projects[i].style.display = '';
            } else {
                projects[i].style.display = 'none';
            }
        }
    });
});
