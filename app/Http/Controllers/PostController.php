<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index() 
    {
        $posts = Post::paginate(10);
        
        // return view
        return inertia('Posts/Index', ['posts' => $posts]);
    }

    public function create() 
    {
        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        Post::create([
            'title' => $request->title,
            'content' => $request->content
        ]);

        // redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Post $post) 
    {
        return inertia('Posts/Edit', [
            'post' => $post
        ]);
    }

    public function update(Request $request, Post $post) 
    {
        // set validation 
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        // update data
        $post->update([
            'title' => $request->title,
            'content' => $request->content
        ]);

        return redirect()->route('posts.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        // redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
