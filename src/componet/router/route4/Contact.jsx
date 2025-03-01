import React from 'react';

function Contact() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-6 hover:text-blue-500'>
        Contact Us
      </h1>
      <p className='text-lg text-gray-600 mb-6'>
        We’d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us.
      </p>
      
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          Get In Touch
        </h2>

        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-gray-700 mb-2'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your name'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-gray-700 mb-2'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-gray-700 mb-2'>
              Your Message
            </label>
            <textarea
              id='message'
              rows='4'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Write your message here'
            ></textarea>
          </div>

          <div>
            <button
              type='submit'
              className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <div className='mt-8'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Our Location
        </h2>
        <p className='text-lg text-gray-600'>
          You can visit us at our office located at:
        </p>
        <address className='text-lg text-gray-800'>
          1234 Street Name, City, Country
        </address>
      </div>
    </div>
  );
}

export default Contact;

