const openModal = document.querySelector('#submit-button')
const closeModal = document.querySelector('#close-modal')
const modal = document.querySelector('#confirm-modal')

openModal.addEventListener('click', () => {
modal.showModal()
})

closeModal.addEventListener('click', () => {
modal.close()
})
