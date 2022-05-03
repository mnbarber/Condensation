### Link to your GH repository
https://github.com/mnbarber/Video-Games/blob/main/README.md

### Your chosen game 
Reverse engineering of the Steam application. Video game database with function to create new game or edit/delete games.

### Basic User stories
- view game index
- create new game
- edit games
- delete games 

MVP GOALS:

    game index is viewable
    can create new game that pulls info from API
    can edit game info or delete game

STRETCH GOALS:

    create users
    create reviews on game page


### Wireframes 

### SCHEMA: 
![image](https://user-images.githubusercontent.com/34723980/165345336-9f14da3a-92a2-4f6b-a2d0-a47f0ba7e1fc.png)

### ROUTES: 
/games - GET - index - retrieves all games and lists title and photo
/games/new - GET - new - form to create a new game 
/games/:id - GET - show - retrieve one game with more info 
/games/:id/edit - GET - edit - retrieve one game with form to edit current info 
/games - POST - create - sends new game data
/games/:id - PUT - update - sends edited game data to existing game 
/games/:id - DELETE - destroy - delete game from existence

![image](https://user-images.githubusercontent.com/34723980/165330119-df7cb894-a463-447d-b7df-83ddf01e0ba6.png)
![image](https://user-images.githubusercontent.com/34723980/165330159-1bbed93e-375e-4e44-bb99-8cd0bd055769.png)
![image](https://user-images.githubusercontent.com/34723980/165330193-6f8bd19a-f8a8-43fc-9499-9c68a870a27f.png)
![image](https://user-images.githubusercontent.com/34723980/165330226-b695fe7c-c867-4d5e-a74d-10a6ebdb3a6b.png)
![image](https://user-images.githubusercontent.com/34723980/165330257-53bb93b5-cb9f-4360-ad56-95e4e81e15b5.png)


### Your Models & Associations

![image](https://user-images.githubusercontent.com/34723980/165330084-1c64cd6a-31ee-4168-9d37-37c4fddfbcb7.png)
