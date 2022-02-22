// We have to first import `useState` with React in order to take advantage of the hook
import React from 'react';
import './HomeCards.css';
import img from '../components/images/books.jpg';

const Home = [
  { clubName: "Hadis Parsa", id: 123, userName: "Cool DEVELOPER" },
  { clubName: "Captain Marvel", id: 234, userName: "Carol Danvers" },
  { clubName: "Multiverse of Madness", id: 345, userName: "Doctor Stephen, Strange" },
]
function CardItem() {


  return (
    Home.map(club => (

      <>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3">
            <div className='cards__item__link'>

              <figure className='cards__item__pic-wrap' data-category={club.clubName}>
                <img
                  className='cards__item__img'
                  alt='book'
                  src={img}
                />
              </figure>

              <div className='cards__item__info'>
                <h2 className='cards__item__text'>{club.userName}</h2>
              </div>
            </div>
          </div>
        </div>


      </>

    ))

  );
}

export default CardItem;