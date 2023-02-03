# Architecture

- Controller - a Next.js app which displays a rover controller, rover ID input (which rover would you like to control?), and commands queue with submission
- Rover viewer - a visual representation of the rover, which accepts commands, and carries them out in order, handling collision and movement on a sphere
- Wrapper app - an app with the two other apps iframed, just for a simpler visualisation of the system. Important here is to keep the two apps separate
- Rover Driver API - async app which has an API which accepts rover commands and puts the commands to DynamoDB
- Controller Driver - an app which accepts stream events from DynamoDB, and publishes them to Rover viewer websocket connection

Hopefully, this will be all in a monorepo, not really for performance, but for ease for sharing with others and DX.
