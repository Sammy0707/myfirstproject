function filmChecker(FilmList){
    for (i in FilmList){
        if (FilmList[i] != "Ghost Busters"){
            console.log("I want ghost busters")
        } else{
            console.log("Yeah!")
            break
        }
    }
}

let Films = ["Despicable Me", "Blade", "Ghost Busters", "Pokemon"]
Films.push("Avatar", "Endgame V2.0")
filmChecker(Films)