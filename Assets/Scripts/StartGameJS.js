#pragma strict
var Difficulty : int;
var SpawnPoint : Transform;
var SpawnName : String;


function Start () {
    Difficulty = 1;
}

function Update () {

}

function onClick ()

{ 
    Application.LoadLevel("Game");
}

function onCredits ()

{

    Application.LoadLevel("Credits");
}

function onMenu()
{
    Application.LoadLevel("startScreen");
}

function onClickEasy ()

{ 
    Application.LoadLevel("Game");
    Difficulty = 1;
    SpawnName = "PlayerSpawnEasy";
    print("Difficulty is " + Difficulty);
    if(this.tag == "Player") 
    { transform.position = SpawnPoint.position; }
}

function onClickMedium ()

{ 
    Application.LoadLevel("Game");
    Difficulty = 2;
    SpawnName = "PlayerSpawnMedium";
    print("Difficulty is " + Difficulty);
    if(this.tag == "Player") 
    { transform.position = SpawnPoint.position; }
}

function onClickHard ()

{ 
    Application.LoadLevel("Game");
    Difficulty = 3;
    SpawnName = "PlayerSpawnHard";
    print("Difficulty is " + Difficulty);
    if(this.tag == "Player") 
    { transform.position = SpawnPoint.position; }
}



