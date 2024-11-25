import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Postcreation = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user=useSelector((state) => state?.feeds.user);
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };
  console.log(user,'user')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create FormData object to send files
    // const formData ={image:selectedImage,
    //   description:description
    // } 
    
    // console.log(formData,'hjhjh',selectedImage,description);
    try {
      if (!selectedImage || !description) {
        alert('Both image and description are required!');
        return;
      }

      const formData = new FormData();
    formData.append('image', selectedImage); // Append the image file
    formData.append('description', description);
    formData.append('user', user.id); // Append the image file
    formData.append('username', user.username);
     // Append the description

    // Send the FormData using axios
      console.log(user,'user')
    
    const response = await axios.post('http://localhost:3001/user/postcreate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the correct content type
      },
    });
      console.log(response,'klkl');
    ;
      // Reset form after successful upload
      setDescription('');
      setSelectedImage(null);
      setPreviewUrl(null);
      
      // Show success message
      alert('Post uploaded successfully!');
     dispatch(getposts());
    } catch (error) {
      console.error('Error uploading post:', error);
      alert('Error uploading post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {Object.keys(user).length ? ( <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          
          {!previewUrl ? (
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600">Click to upload an image</p>
                </div>
              </label>
            </div>
          ) : (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Write a description for your post..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedImage || !description || isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Uploading...' : 'Post'}
        </button>
      </form>): (<h1>login first</h1>)}
     
    </div>
  );
};

export default Postcreation;