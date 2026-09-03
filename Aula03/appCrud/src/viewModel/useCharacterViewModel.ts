import { useState } from "react";
import { CharacterModel } from "@/model/CharacterModel";

export function useCharacterViewModel() {
    const [characters, setCharacters] = useState<CharacterModel[]>([]);

    function addCharacter(character: CharacterModel) {
        
    }

    
    
}

