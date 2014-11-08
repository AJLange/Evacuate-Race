#pragma strict

var clockIsPaused : boolean = false;
var startTime : float; 
var timeRemaining : float;
//time is in seconds

function Awake () {
    startTime = Time.time + 20.0;
}

function Update () {
    if(!clockIsPaused)
    {
        doCountdown();
    }
}

function doCountdown()
{
    timeRemaining = startTime - Time.time;
    if (timeRemaining < 0)
    {
        timeRemaining = 0;
        clockIsPaused = true;
        TimeIsUp();
    }
    ShowTime();

}

function PauseClock()
{
    clockIsPaused = true;
}

function unPauseClock()
{
    clockIsPaused = false;
}

function ShowTime()
{
    var minutes : int;
    var seconds : int;
    var timeStr : String;
    minutes = timeRemaining/60;
    seconds = timeRemaining % 60;
    timeStr = minutes.ToString() + ":";
    timeStr += seconds.ToString("D2");
    guiText.text = timeStr;
}

function TimeIsUp()
{
    print("Time is UP");
    Application.LoadLevel("gameOver");
}

function OnGUI () {

    print("Timer start");

}

