import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { commentpost, likepost } from '../../actions/methods';

const PostCard = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.feeds?.posts);
  const userAvatar = "profile.png";
  const user = useSelector((state) => state?.feeds?.user);
  
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [postLikes, setPostLikes] = useState({});
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({}); // New state for toggling comments
  const [newComment, setNewComment] = useState({}); // Separate state for new comment input

  // Initialize states for all posts
  useEffect(() => {
    if (posts?.length) {
      const initialLikes = {};
      const initialComments = {};
      const initialLikedPosts = {};
      const initialShowComments = {};
      const initialNewComments = {};
      
      posts.forEach(post => {
        initialLikes[post._id] = post.likesCount || 0;
        initialComments[post._id] = post.comments || [];
        initialLikedPosts[post._id] = post.likes?.includes(user.id) || false;
        initialShowComments[post._id] = false;
        initialNewComments[post._id] = "";
      });

      setPostLikes(initialLikes);
      setComments(initialComments);
      setLikedPosts(initialLikedPosts);
      setShowComments(initialShowComments);
      setNewComment(initialNewComments);
    }
  }, [posts,user]);

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    
    setPostLikes(prev => ({
      ...prev,
      [postId]: prev[postId] + (likedPosts[postId] ? -1 : 1)
    }));
    dispatch(likepost({ id: postId, user: user._id }));
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleComments = (postId) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleNewComment = (postId, value) => {
    setNewComment(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const submitComment = (postId) => {
    if (newComment[postId]?.trim()) {
      // Add the new comment to the existing comments
      const newCommentObj = {
        _id: Date.now(), // Temporary ID for new comment
        text: newComment[postId],
        user: {
          _id: user._id,
          username: user.username,
          avatar: userAvatar
        },
        createdAt: new Date().toISOString()
      };

      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newCommentObj]
      }));

      // Clear the input
      setNewComment(prev => ({
        ...prev,
        [postId]: ""
      }));

      dispatch(commentpost({ id: postId, user: user._id, text: newComment[postId] }));
    }
  };

  if (!posts?.length || !user) {
    return <p className="text-center text-gray-500">No posts available</p>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg shadow-md max-w-xl mx-auto">
          {/* Post Header */}
          <div className="flex items-center p-4">
            <img
              src={userAvatar}
              alt={post.user.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <h2 className="font-semibold text-gray-900">{post.username}</h2>
              <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="relative">
            <img
              src={`http://localhost:3001/${post.image.url}`}
              alt="Post content"
              className="w-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(post._id)}
                  className="flex items-center focus:outline-none group"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      likedPosts[post._id]
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600 group-hover:text-red-500'
                    }`}
                  />
                </button>
                <button 
                  onClick={() => toggleComments(post._id)}
                  className="flex items-center focus:outline-none"
                >
                  <MessageCircle 
                    className={`w-6 h-6 ${
                      showComments[post._id]
                        ? 'text-blue-500'
                        : 'text-gray-600 hover:text-blue-500'
                    }`}
                  />
                </button>
                <button className="flex items-center focus:outline-none">
                  <Share2 className="w-6 h-6 text-gray-600 hover:text-green-500" />
                </button>
              </div>
              <button 
                onClick={() => handleSave(post._id)} 
                className="flex items-center focus:outline-none"
              >
                <Bookmark
                  className={`w-6 h-6 ${
                    savedPosts[post._id]
                      ? 'fill-yellow-500 text-yellow-500'
                      : 'text-gray-600 hover:text-yellow-500'
                  }`}
                />
              </button>
            </div>

            {/* Likes Count */}
            <div className="mb-2">
              <p className="font-semibold text-sm">
                {postLikes[post._id] !== undefined ? postLikes[post._id] : post.likesCount || 0} likes
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold mr-2">{post.user.username}</span>
                {post.description}
              </p>
            </div>

            {/* Comments Section */}
            {showComments[post._id] && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-semibold text-gray-500">
                  {comments[post._id]?.length || 0} comments
                </p>
                <div className="max-h-48 overflow-y-auto space-y-3">
                  {comments[post._id]?.map((comment) => (
                    <div key={comment._id} className="flex items-start space-x-2">
                      <img
                        src={ userAvatar}
                        alt={comment.user.username}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{comment.user.username}</span>{' '}
                          {comment.text}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comment Input */}
            <div className="mt-4 flex items-center">
              <input
                type="text"
                value={newComment[post._id] || ""}
                onChange={(e) => handleNewComment(post._id, e.target.value)}
                placeholder="Add a comment..."
                className="w-full text-sm border-none focus:ring-0 focus:outline-none"
              />
              <button 
                onClick={() => submitComment(post._id)}
                className={`text-sm font-semibold ml-2 ${
                  newComment[post._id]
                    ? 'text-blue-500 hover:text-blue-600' 
                    : 'text-blue-300 cursor-not-allowed'
                }`}
                disabled={!newComment[post._id]}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;