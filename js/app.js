const checkbox = document.querySelector('#checkbox');

if (window.matchMedia('(prefers-color-scheme: dark)')) {
    checkbox.setAttribute('checked', true)
    document.body.classList.toggle('is-dark-mode')
}

checkbox.addEventListener('change', function(event) {
        document.body.classList.toggle('is-dark-mode')
})