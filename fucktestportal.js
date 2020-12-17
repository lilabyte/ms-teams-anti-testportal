const blurSpyFunction = Array.from(document.querySelectorAll('body script')).find(script => script.text.includes('var onBlurHandler = function () {')).text.trim().substring(4, 12)
eval(`${blurSpyFunction} = () => {
    console.log('Fuck testportal')
    document.forms["questionForm"]["wb"].value = 0;
    setEndTimeCookie();
    eraseCookie('blurs');
}`)
document.getElementById('honestRespondentBlockade_popup').remove()
window['honestRespondentBlockade_popup'] = undefined
window.onerror = () => true
