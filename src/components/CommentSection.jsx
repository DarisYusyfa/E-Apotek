import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { FaCheckCircle } from 'react-icons/fa';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  // Fetch Comments with Pagination
  const fetchComments = async (page = 1) => {
    const start = (page - 1) * commentsPerPage;
    const end = start + commentsPerPage - 1;

    const { data, error } = await supabase.from('comments').select('*', { count: 'exact' }).order('created_at', { ascending: false }).range(start, end);

    if (error) console.error('Error fetching comments:', error);
    else setComments(data);
  };

  // Add Comment
  const addComment = async () => {
    if (name && comment) {
      const { error } = await supabase.from('comments').insert([{ name, comment }]);

      if (error) console.error('Error adding comment:', error);
      else {
        setName('');
        setComment('');
        fetchComments(currentPage); // Refresh comments
      }
    } else {
      alert('Nama dan komentar harus diisi!');
    }
  };

  useEffect(() => {
    fetchComments(currentPage);
  }, [currentPage]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Komentar</h2>

      {/* Form Input Komentar */}
      <div className="mb-4">
        <input type="text" className="w-full p-2 mb-2 border rounded" placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="w-full p-2 mb-2 border rounded" rows="3" placeholder="Tulis komentar Anda" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addComment}>
          Kirim
        </button>
      </div>

      {/* Daftar Komentar */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="p-4 border rounded shadow bg-gray-50">
            <div className="flex items-center border-b pb-2 mb-2">
              <p className="font-bold flex items-center">
                {c.name || 'Anonim'}
                <FaCheckCircle className="ml-2 text-blue-500" />
              </p>
              <span className="ml-auto text-sm text-gray-500">{new Date(c.created_at).toLocaleString()}</span>
            </div>
            <div className="pl-2">
              <p className="text-gray-700">{c.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white" onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
