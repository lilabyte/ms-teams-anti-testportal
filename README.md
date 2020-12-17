# ms-teams-anti-testportal
Tutorial how to use ms-teams-anti-testportal with Microsoft Teams

# Introduction
First of all, the notification to the teacher about changing the window is a lie. The teacher does not have such data. The testportal simply sends your test if you reach the maximum number of window changes set by the teacher. Secondly you have to do it manually because I will not pay for the microsoft developer account to make extension for teams.

# Tutorial

At first before you will open the test open "Show Hidden Items" in your windows.

![Show Hidden items](https://i.imgur.com/Q8GMKAk.png)

Then click Microsoft Teams icon 7 times (with normal left mouse button click)

![Microsoft Teams Icon](https://i.imgur.com/eX4OsFJ.png)

After that join to test (don't start it yet) right click the Microsoft Teams icon and select `DevTools` > `Open DevTools (Select WebContents)` > `webview`
![DevTools Selection](https://i.imgur.com/Bg0q11r.png)
![Webview](https://i.imgur.com/fpeHPrR.png)

At this moment you should've opened DevTools Console if not, open it.
![Console](https://i.imgur.com/J6Quxvk.png)

and change the console level to extension-tab-frame 
![Level](https://i.imgur.com/sgEilg4.png)

Finally you can start your test and run the code below in your console

**YOU MUST RUN THIS CODE FOR EVERY QUESTION ON YOUR TEST SINCE THE BLURSPY FUNCTION AND WHOLE IFRAME CHANGES RANDOMLY WITH THE QUESTION**
```js
const blurSpyFunction = Array.from(document.querySelectorAll('body script')).find(script => script.text.includes('var onBlurHandler = function () {')).text.trim().substring(4, 12)
eval(`${blurSpyFunction} = () => {
    console.log('Fuck testportal')
    document.forms["questionForm"]["wb"].value = 0;
    setEndTimeCookie();
    eraseCookie('blurs');
}`)
window['honestRespondentBlockade_popup'] = undefined
window.onerror = () => true
```
