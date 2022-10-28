window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (placeholder, text) => {
        const element = document.getElementById(placeholder)
        if (element) element.innerText = text
    }

    for (const package of ['node', 'chrome', 'electron', 'electron-forge']) {
        replaceText(`${package}-version`, process.versions[package])
    }
})