function showModal(projectName) {
    const modal = document.getElementById(`${projectName}-modal`);
    modal.style.display = "block";

    const closeModal = modal.querySelector('.close-modal');
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
    function highlightText(element) {
        element.classList.toggle('highlighted');
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
