# terminal-timer

## Motivation
A simple terminal timer that incorporates some of the ideas that Dr. Andrew Huberman was sharing in his podcasts:

1. The optimal single working session time is ~1.5 hours: https://www.youtube.com/watch?v=5HINgMMTzPE.
2. You will be more productive within the session if you make three short stops (~10 seconds attention switches/rests) at random times during the working session: https://www.youtube.com/shorts/akYXRHysdNc.

## Installlation
```
npm i -g terminal-timer
```

## How to use
To start the timer:
```
$ terminal-timer
```
or just:
```
$ tt
```

The default session is 1.5 hours, but you can change it using the argument as your session length **in minutes**:
```
$ tt 120
```

The timer will put random 3 stops during your session. The beeping sound will play at each stop. You can change the stop quantity by adding another argument.
For example, to have a 120 minute session with 5 random stops:
```
$ tt 90 5
```
Or you can disable these random stops completely by setting them to 0:
```
$ tt 90 0
```
At the end of the session, the timer will play a longer beeping sound.
