export function getAllNotes (req, res) {
    res.status(200).send("you just fetched the notes");
}

export function createNotes(res, req) {
    res.status(201).json("Note created succesfully");
}

export function updateNotes(res, req) {
    res.status(200).json("Note updated succesfully")
}

export function deleteNotes(res, req)  { 
    res.status(200).json("Note deleted succesfully")
}
