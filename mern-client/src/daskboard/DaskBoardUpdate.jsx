import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const DaskBoardUpdate = () => {
  const bookCategories = [
    "Fiction",
    "Dramma",
    "Detected"
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleSelectedValue = (e) => {
    console.log(e.target.value)
    setSelectedBookCategory(e.target.value)
  }
  //handle submit btn 
  const handleOnSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    console.log(e.preventDefault())

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const objBook = {
      bookTitle, authorName, imageURL, bookDescription, bookPdfUrl, category
    }
    console.log(objBook)
    //test send data form 
    // fetch('http://localhost:4001/upload-book', {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(objBook),
    // }).then(res => res.json()).then(data =>{
    //   alert("Create Book Successfully!")
    // });

  }
  return (
    <div className='px-4 my-12'>
      <h2 mb-8 text-3xl font-bold>UPDATE A BOOK</h2>
      <form onSubmit={handleOnSubmit} action="" className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="bookTitle" placeholder="Book name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name" />
            </div>
            <TextInput id="authorName" type="authorName" placeholder="Author Name" required />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" type="imageURL" placeholder="Image URL" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="category"
                value="category" />
            </div>
            <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleSelectedValue}>{
              bookCategories.map((option) => <option>{option}</option>)
            }</select>
          </div>
        </div>
        <div className='lg:w-ful'>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>
          <Textarea id="bookDescription" type="bookDescription" placeholder="Book Description" required rows={5} />
        </div>

        <div className='lg:w-full'>
          <Label
            htmlFor="bookPdfUrl"
            value="bookPdfUrl" />
          <TextInput id="bookPdfUrl" type="bookPdfUrl" placeholder="Book PdfUrl" required />
        </div>
        <Button type='submit' className='rounded mt-5'>UPDATE BOOK</Button>
      </form>
    </div>
  )
}

export default DaskBoardUpdate