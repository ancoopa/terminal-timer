# terminal-timer

## Motivation
A simple terminal timer that incorporates some of the ideas that Dr. Andrew Huberman was sharing in his podcasts:

1. The optimal single working session time is ~1.5 hours: https://www.youtube.com/watch?v=5HINgMMTzPE.
2. You will be more productive within the session if you make three short stops (~10 seconds attention switches/rests) at random times during the working session: https://www.youtube.com/shorts/akYXRHysdNc.

## Installlation
```
$ npm i -g terminal-timer
```
### Tested on:
* MacOS Monterey v12.7.6 with the Node.js v20
* Android smartphone with Termux and Node.js v22

## How to use
To start the timer:
```
$ terminal-timer
```
or just:
```
$ tt
```
![Default](readme-media/default.gif)

The default session is 1.5 hours, but you can change it using the argument as your session length **in minutes**:
```
$ tt 120
```
![Customize time](readme-media/customize-time.gif)

The timer will put random 3 stops during your session. The beeping sound will play at each stop. You can change the stop quantity by adding another argument.
For example, to have a 90 minute session with 5 random stops:
```
$ tt 90 5
```
![Customize time and stops](readme-media/customize-time-and-stops.gif)
Or you can disable these random stops completely by setting them to 0:
```
$ tt 90 0
```
Because of how the random logic is implemented, it's possible that sometimes you may have fewer stops than you specified.

At the end of the session, the timer will play a longer beeping sound.
