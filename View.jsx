import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
export const View = ({books,setBooks}) => {

  const deleteBook=(index)=>{
    const del =books.filter((value,ind)=>{
      return ind!==index;
    });
    setBooks(del)

  }
  return (
    <>
        {books.map((value,index)=>{
        return(
            <tr key={index}>
                <td>{value.Bookno}</td>
                <td>{value.title}</td>
                <td>{value.author}</td>
                <td onClick={()=>{deleteBook(index)}}><RiDeleteBin6Line/></td>
            </tr>
        )
        })}
    </>
  )
}
