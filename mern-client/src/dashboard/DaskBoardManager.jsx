import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const DaskBoardManager = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4001/all-book',).then(res => res.json()).then(data => setAllBooks(data))
  }, []);
  const handleDelete = (id) => {
    // console.log(id)
    fetch(`http://localhost:4001/book/${id}`, { method: "DELETE" }).then(res => res.json()).then(data => {
      alert("Book is delete successfully !")
      // setAllBooks(data)
    })
  };
  return (
    <div className='px-4 my-12'>
      <h2 mb-8 text-3xl font-bold>MANAGER A BOOk</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Name Book</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="font-medium text-gray-900 dark:text-white whitespace-break-spaces max-w-60">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell className='whitespace-break-spaces max-w-60'>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.price ? book.price : Math.floor(Math.random() * 1000) + `$`}</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-300 '>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
      </Table>
    </div>
  )
}

export default DaskBoardManager