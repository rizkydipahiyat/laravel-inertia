import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import Layout from '../../Layouts/Default';

function CreatePost({ errors }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/posts', {
      title: title,
      content: content
    })
  }
  return (
    <Layout>
      <div className="row" style={{ marginTop: '100px'}}>
        <div className="col-12">
          <div className="card border-0 rounded shadow-sm border-top-success">
            <div className="card-header">
              <span className="font-weight-bold">Tambah Post</span>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Title</label>
                  {errors.title && (
                    <p className='text-danger'>
                      <i>*{errors.title}</i>
                    </p>
                  )}
                  <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Judul Post" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Content</label>
                  {errors.content && (
                    <p className="text-danger">
                      <i>*{errors.content}</i>
                    </p>
                  )}
                  <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Judul Post" rows={4}></textarea>
                </div>

                <div>
                  <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                  <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePost