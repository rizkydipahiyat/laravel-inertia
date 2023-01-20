import React from 'react'
import Layout from '../../Layouts/Default';
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import Pagination from '../../Components/Pagination';

function PostIndex({ posts, session}) {

  const handleDelete = async (id) => {
    e.preventDefault();
    Inertia.delete(`/posts/${id}`);
  }
  console.log("data", posts)
  return (
    <Layout>
      <div style={{ marginTop: '100px'}}>
        <Link href='/posts/create' className='btn btn-success btn-md mb-3'>Tambah Post</Link>
        {session.success && (
          <div className="alert alert-success border-0 shadow-sm rounded-3">
            {session.success}
          </div>
        )}
        <div className="card border-0 rounded shadow-sm">
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>CONTENT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                  posts.data.map((post, index) => {
                    return (
                      <tr key={index}>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td className='text-center'>
                          <Link href={`/posts/${post.id}/edit`} className="btn btn-warning btn-sm me-2 text-white">Edit</Link>
                          <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm me-2 text-white">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <Pagination links={posts}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostIndex