<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use App\Models\User;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }

    public function show($id)
    {
        return Note::find($id);
    }

    public function store(Request $request)
    {
    
        $note = new Note;
        $note->title = $request->title;
        $note->content = $request->content;
        $note->user_id = $request->user_id;
    
        $note->save();
    
        return $note;
    }

    public function update(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->update($request->all());

        return $note;
    }

    public function delete(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->delete();

        return 204;
    }
}
