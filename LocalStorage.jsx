import React, { useEffect, useState } from 'react'
import './LocalStorage.css';
import { RiBook2Fill } from 'react-icons/ri'
import { View } from './View';
export const LocalStorage = () => {
    const [Bookno, setBookno] = useState('');
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');

    const getData = () => {
        const data = localStorage.getItem("books");
        console.log(data);
        if (data) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }
    // console.log(getData());

    //set Data in local storage
    const [books, setbooks] = useState(getData())
    const addDataHandler = (e) => {
        e.preventDefault();
        let NewBook = {
            Bookno,
            title,
            author,
        }
        setbooks([...books, NewBook]);
          setBookno("");
          setauthor("");
          settitle("");
          console.log(books);
    }
    console.log(books);
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (

        <>
            <header>
                <h2 className='header'> <RiBook2Fill />  BOOK STORE <RiBook2Fill /> </h2>
            </header>
            <div className='main__div'>
                <div className='heading__div'>
                    <h3>Add your Books</h3>
                    <form action="" onSubmit={addDataHandler} className='table__div' >

                        <table cellPadding={8} cellSpacing={13} className='center main__table'>
                            <tr>
                                <td className='book_no'><b>Book no:</b></td>
                                <input value={Bookno} type='text' required onChange={(e) => setBookno(e.target.value)} /><br></br>
                            </tr>
                            <tr>
                                <td><b>Title:</b></td><br></br>
                                <input value={title} type='text' required onChange={(e) => settitle(e.target.value)} /><br></br><br></br>
                            </tr>
                            <tr>
                                <td><b>Auther:</b></td>
                                <input value={author} type='text' required onChange={(e) => setauthor(e.target.value)} /><br></br>
                            </tr>

                        </table>

                        <button type='submit' className='btn'>Add Book</button>
                    </form>
                </div>
                {books.length > 0 && <div className='table__data'>
                    <table className='center ' cellPadding={8} cellSpacing={13} >
                        <thead  >
                            <tr>
                                <th>BOOK NO.</th>
                                <th>AUTHOR</th>
                                <th>TITLE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody cellPadding={10}>
                            <View books={books} setBooks={setbooks} />
                        </tbody>
                    </table>

                    <button onClick={() => { setbooks([]) }} className='btn1' >remove all</button>
                </div>}

                {books.length < 1 && <div className='data__div'><h3 className='no__data'>No book added yet</h3></div>}
            </div>

           
        </>
    )
}
