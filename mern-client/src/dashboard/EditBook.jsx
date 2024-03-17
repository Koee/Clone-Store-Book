import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from "react-router-dom"
const EditBook = () => {
  const bookCategories = [
    "Fiction",
    "Dramma",
    "Detected",
    "Take/Note"
  ];
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl, price } = useLoaderData();
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleSelectedValue = (e) => {
    console.log(e.target.value)
    setSelectedBookCategory(e.target.value)
  }

  //handle submit btn 
  const handleOnSubmitUpdate = (e) => {

    e.preventDefault();
    const form = e.target;
    console.log(e.preventDefault())

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;
    const objBook = {
      bookTitle, authorName, imageURL, bookDescription, bookPdfUrl, category, price
    }
    console.log(objBook)
    //test send update data form 
    fetch(`http://localhost:4001/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objBook),
    }).then(res => res.json()).then(data =>{
      alert("Update Book Successfully!")
    });

  }
  return (
    <div className='px-4 my-12'>
      <h2 mb-8 text-3xl font-bold>UPDATE A BOOK DATA</h2>
      <form onSubmit={handleOnSubmitUpdate} action="" className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="bookTitle" placeholder="Book name" required defaultValue={bookTitle}/>
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name" />
            </div>
            <TextInput id="authorName" type="authorName" placeholder="Author Name" required defaultValue={authorName}/>
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" type="imageURL" placeholder="Image URL" required defaultValue={imageURL}/>
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="category"
                value="category" />
            </div>
            <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleSelectedValue} defaultValue={category}>{
              bookCategories.map((option) => <option>{option}</option>)
            }</select>
          </div>
        </div>
        <div className='lg:w-ful'>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>
          <Textarea id="bookDescription" type="bookDescription" placeholder="Book Description" required rows={5}  defaultValue={bookDescription}/>
        </div>

        <div className='lg:w-full'>
          <Label
            htmlFor="bookPdfUrl"
            value="bookPdfUrl" />
          <TextInput id="bookPdfUrl" type="bookPdfUrl" placeholder="Book PdfUrl" required  defaultValue={bookPdfUrl}/>
        </div>
        <div className='lg:w-full'>
          <Label
            htmlFor="price"
            value="price" />
          <TextInput id="price" type="price" placeholder="Book Price" required defaultValue={price}/>
        </div>
        <Button type='submit' className='rounded mt-5'>ACCEPT</Button>
      </form>
    </div>
  )
}

export default EditBook