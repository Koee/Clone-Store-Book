import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4001/all-book").then(res => res.json()).then(data =>
            /*console.log(data)*/
            setBooks(data.slice(0, 8)))
    }, [])
    return (
        <div>
            <BookCard books={books} headline="Best Seller Books"></BookCard>
        </div>
    )
}

export default BestSellerBooks