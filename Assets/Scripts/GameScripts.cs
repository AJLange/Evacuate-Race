using UnityEngine;
using System.Collections;

public class GameScripts : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void OnTriggerEnter(Collider other)
	{
		if (other.tag == "Player") {
			VictoryGame();
			return;
		}

		else
		{
			Destroy (gameObject);
		}
	}

		void VictoryGame(){
		Application.LoadLevel ("WinScreen");
		}
}


