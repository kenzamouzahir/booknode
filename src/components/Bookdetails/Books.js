import React,{useState, useEffect} from 'react';
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillAmazonSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation, useParams } from "react-router-dom";
import data from '../../data';


import axios from 'axios';
function Books() {
 
  const [book, setBook] = useState(data);
  const { id } = useParams()
 console.log(book);
  console.log(book.posts);
 useEffect(()=>{

  // axios({
  //   method: 'get',
  //   url: 'http://localhost:3004/posts',
  // })
  //   .then(function (response) {
  //     // persons = response.data;
  //     // console.log(persons.image);
  //     setBook(response.data);
  //     console.log(book);
  //   });
 },[])

  return (

    <div className='  w-full absolute shadow-lg '>
      
      <img src="/library-with-books.jpg" className='absolute' />
      <div className='m-12 grid grid-cols-[85px_2fr_1fr] p-2 bg-white mt-80  z-10 max-h-max relative'>
        {/* row */}

        <div className='   top-7 relative '>
          
            
        {book.posts.map((book,index) => <Link to={`/books/${index}`} >
              <img src={"/" + book.image}
                className='mb-2 border-b-2 shadow-boxshadow shadow-md ' />
            </Link>)}
          
          

              
            


          </div>
        <div className=' mx-4 top-7  max-h-max relative'>{/*div globale*/}
          <div className=' mb-8 shadow-boxshadow shadow-md rounded-md '>
            <div className='rounded-t-md bg-another-one-100 px-2 py-2'>
              <h3 className='  text-white text-base'>Livre du moment</h3>
            </div>
            <div className='p-4 '> {/* body book infor*/}
              <h3 className=' text-another-one-100 text-4xl font-medium'>
                {book.posts[id].titre} {/*book title*/}
              </h3>
              <div className='grid grid-cols-[2fr_3fr]  my-4'>  {/* column img*/}
                <div>
                  <img src={"/"+book.posts[id].image} alt="une image" 
                  className=' shadow-boxshadow shadow-xl h-full w-3/4' />
                </div> {/* column info book*/}
                <div>
                  <ul className="">
                    <h3 className=' text-3xl'>
                      {book.posts[id].auteurs}
                      </h3>
                    <hr className='m-4' />
                    <li className="">
                      <h4 className=' leading-10 text-2xl'>Achat Neuf</h4>
                      <p className='flex border-2 justify-between w-1/2 p-2 rounded-md hover:bg-search-100 mb-4'>
                        <span className=' text-second-color-100'>14.90€</span> Amazon
                        <AiFillAmazonSquare className="text-second-color-100 text-2xl " />

                      </p>
                      <p className='flex border-2 justify-between w-1/2 p-2 rounded-md hover:bg-search-100 mb-4'>
                        <span className=' text-second-color-100'>15.20€</span> Fnac
                        <AiFillAmazonSquare className="text-second-color-100 text-2xl " />

                      </p>
                    </li>

                    <li className="">
                      <h4 className='leading-10 text-2xl '>Achat Occasion</h4>
                      <p className='flex border-2 justify-between w-1/2 p-2 rounded-md hover:bg-search-100 '>
                        <span className=' text-second-color-100'>14.90€</span> Amazon
                        <AiFillAmazonSquare className="text-second-color-100 text-2xl " />

                      </p>
                    </li>
                  </ul>

                </div>

              </div>
              <div className='m-4'>
                <h4 className='text-first-color-100  leading-10 text-2xl'>Résumé</h4>
                <p className=''>
                {book.posts[id].résumé}


                </p>

              </div>
            </div>
          </div>

        </div>




        <div className='  top-7 relative px-2'>{/*groupement de la colonne*/}
        <div> {/*derniere colonne*/}
              <div className='mb-8 shadow-boxshadow shadow-md rounded-md '> {/*Info*/}
                <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>{/*titre*/}
                  <h3>La crème des livres</h3>
                </div>

                <div className='p-4 '>{/*Body*/}
                  <div>
                    <div>
                      <div className='flex'>{/*regroupement des livres*/}

                        <div className='p-1'>
                        <Link to="/books/1">
                          <img src={"/"+book.posts[1].image} alt="" srcset="" 
                          className='shadow-boxshadow shadow-md' />
                          </Link>
                        </div>
                        
                        <div className='p-1'>
                          <Link to="/books/8">
                          <img src={"/"+book.posts[8].image} alt="" srcset="" 
                          className='shadow-boxshadow shadow-md' />
                          </Link>
                        </div>
                       
                        <div className='p-1'>
                          <Link to="/books/9">
                          <img src={"/"+book.posts[9].image} alt="" srcset="" 
                          className='shadow-boxshadow shadow-md' />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>


          {/*Classement par thèmes*/}
          <div className='mb-8 shadow-boxshadow shadow-md rounded-md' >
            <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
              <h3>Classement par thèmes</h3>
            </div>
            <div>{/*body du classement*/}
              <div className='grid grid-cols-2 '>{/*row*/}
                <div className=' '>{/*col-1*/}
                  <img src="/amour2.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Amour</p>
                </div>
                <div className=' '>{/*col-2*/}
                  <img src="/aventure2.jpg" alt="" className='h-3/4  w-full p-2 ' />
                  <p className=' text-center'>Aventure</p>
                </div>

                <div>{/*col-3*/}
                  <img src="/policier.jpg" alt="" className='h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Policier</p>
                </div>
                <div>{/*col-4*/}
                  <img src="/fantastique.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Fantastique</p>
                </div>
                <div>{/*col-5*/}
                  <img src="/science-fiction2.jpg" alt="" className='h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Science-fiction</p>
                </div>
                <div>{/*col-6*/}
                  <img src="/fantasy.jpg" alt="" className='h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Fantasy</p>
                </div>
                <div className=''>{/*col-7*/}
                  <img src="/young-adult.jpg" alt="" className='h-3/4 w-full p-2 ' />
                  <p className=' text-center'>Young-adult</p>
                </div>
                <div>{/*col-8*/}
                  <img src="/manga2.jpg" alt="" className=' h-2/3 w-full ' />
                  <p className=' text-center'>Manga</p>
                </div>


              </div>

            </div>
          </div>

          <div className='mb-8 shadow-boxshadow shadow-md rounded-md '>{/*livre sponsorises*/}
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Livre sponsorisés</h3>
              </div>
              <div className='p-2'>
                <div className=' shadow-boxshadow shadow-md  mt-4 mb-3'>{/*body des livres sponsorises*/}
                  <div className=' float-right '>
                    <img  src={"/"+book.posts[0].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>Écoute, jolie Marcia</p>
                    </li>
                    <li>
                      <p>Commenté il ya 5 min</p>
                    </li>
                    <li>
                      <p className=' text-xs'>Par Bob1945</p>
                    </li>
                  </ul>
                  <br />

                  <div className='grid grid-cols-[3fr_3fr_3fr] ml-10 '>{/*Footer*/}
                    <span className=' mb-2 flex'><AiOutlineComment className=' text-second-color-100 text-2xl' /> 19</span>
                    <span className=' mb-2 flex'><AiOutlineBook className=' text-second-color-100 text-2xl' />0</span>
                    <span className='  mb-2 flex'><AiOutlineRead className=' text-second-color-100 text-2xl' />167</span>

                  </div>
                </div>

                <div className=' shadow-boxshadow shadow-md  mt-4 mb-3'>{/*body des livres sponsorises*/}
                  <div className=' float-right '>
                    <img src={"/"+book.posts[9].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>Là où commence la fin du monde</p>
                    </li>
                    <li>
                      <p>Commenté il ya 10 min</p>
                    </li>
                    <li>
                      <p className=' text-xs'>Par Nano5</p>
                    </li>
                  </ul>
                  <br />

                  <div className='grid grid-cols-[3fr_3fr_3fr] ml-10 '>{/*Footer*/}
                    <span className=' mb-2 flex'><AiOutlineComment className=' text-second-color-100 text-2xl' /> 19</span>
                    <span className=' mb-2 flex'><AiOutlineBook className=' text-second-color-100 text-2xl' />0</span>
                    <span className='  mb-2 flex'><AiOutlineRead className=' text-second-color-100 text-2xl' />167</span>

                  </div>
                </div>

                <div className=' shadow-boxshadow shadow-md  mt-4 mb-3'>{/*body des livres sponsorises*/}
                  <div className=' float-right '>
                    <img src={"/"+book.posts[3].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>Apprends d'hier</p>
                    </li>
                    <li>
                      <p>Commenté il ya 2 h</p>
                    </li>
                    <li>
                      <p className=' text-xs'>Par chris324</p>
                    </li>
                  </ul>
                  <br />

                  <div className='grid grid-cols-[3fr_3fr_3fr] ml-10 '>{/*Footer*/}
                    <span className=' mb-2 flex'><AiOutlineComment className=' text-second-color-100 text-2xl' /> 19</span>
                    <span className=' mb-2 flex'><AiOutlineBook className=' text-second-color-100 text-2xl' />0</span>
                    <span className='  mb-2 flex'><AiOutlineRead className=' text-second-color-100 text-2xl' />167</span>

                  </div>
                </div>

                <div className=' shadow-boxshadow shadow-md  mt-4 mb-3'>{/*body des livres sponsorises*/}
                  <div className=' float-right '>
                    <img src={"/"+book.posts[4].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>Mort cruelle  </p>
                    </li>
                    <li>
                      <p>Commenté il ya 3 jours</p>
                    </li>
                    <li>
                      <p className=' text-xs'>Par Bob1945</p>
                    </li>
                  </ul>
                  <br />

                  <div className='grid grid-cols-[3fr_3fr_3fr] ml-10 '>{/*Footer*/}
                    <span className=' mb-2 flex'><AiOutlineComment className=' text-second-color-100 text-2xl' /> 20</span>
                    <span className=' mb-2 flex'><AiOutlineBook className=' text-second-color-100 text-2xl' />0</span>
                    <span className='  mb-2 flex'><AiOutlineRead className=' text-second-color-100 text-2xl' />100</span>

                  </div>
                </div>

              </div>



            </div>

          <div className='mb-8 shadow-boxshadow shadow-md rounded-md'>{/*Nouveau membre*/}
            <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
              <h3>Nouveaux Membres</h3>
            </div>
            <div>{/*body*/}
              <div>
                <div className='grid grid-cols-2'>
                  <div className='border-2 m-2'>{/*portrait*/}
                    <div className='ml-2'> {/*panel body*/}

                      <div className='flex'>{/*text*/}
                        <AiOutlineUser className=' text-second-color-100 text-2xl mr-2' />
                        <p>Fangetout</p>
                      </div>
                      <div className='flex'>{/*text*/}
                        <AiOutlineRead className=' text-second-color-100 text-2xl mr-2' />
                        <p>3 livres</p>
                      </div>
                      <div>
                        <p className=' text-xs'>il y a 3 heures</p>
                      </div>

                    </div>

                  </div>

                  <div className='border-2 m-2'>{/*portrait*/}
                    <div className='ml-2'>{/*panel body*/}

                      <div className='flex'>{/*text*/}
                        <AiOutlineUser className=' text-second-color-100 text-2xl mr-2' />
                        <p>Fangetout</p>
                      </div>
                      <div className='flex'>{/*text*/}
                        <AiOutlineRead className=' text-second-color-100 text-2xl mr-2' />
                        <p>3 livres</p>
                      </div>
                      <div>
                        <p className=' text-xs'>il y a 3 heures</p>
                      </div>

                    </div>

                  </div>

                  <div className='border-2 m-2'>{/*portrait*/}
                    <div className='ml-2'>{/*panel body*/}

                      <div className='flex'>{/*text*/}
                        <AiOutlineUser className=' text-second-color-100 text-2xl mr-2' />
                        <p>Fangetout</p>
                      </div>
                      <div className='flex'>{/*text*/}
                        <AiOutlineRead className=' text-second-color-100 text-2xl mr-2' />
                        <p>3 livres</p>
                      </div>
                      <div>
                        <p className=' text-xs'>il y a 3 heures</p>
                      </div>

                    </div>

                  </div>

                  <div className='border-2 m-2'>{/*portrait*/}
                    <div className='ml-2'> {/*panel body*/}

                      <div className='flex'>{/*text*/}
                        <AiOutlineUser className=' text-second-color-100 text-2xl mr-2' />
                        <p>Fangetout</p>
                      </div>
                      <div className='flex'>{/*text*/}
                        <AiOutlineRead className=' text-second-color-100 text-2xl mr-2' />
                        <p>3 livres</p>
                      </div>
                      <div>
                        <p className=' text-xs'>il y a 3 heures</p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className='shadow-boxshadow shadow-md rounded-md mb-8'>{/*livre recemment ajoutes*/}
            <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
              <h3>Livre récemment ajoutés</h3>
            </div>

            <div>
              <ul >
                <li className=' leading-10 flex border-b-2 m-2'>
                  <AiOutlinePlus className=' text-second-color-100 text-2xl mr-2 mt-1' />
                  <strong>Questions de parents</strong>
                </li>
                <li className=' leading-10 flex border-b-2 m-2'>
                  <AiOutlinePlus className=' text-second-color-100 text-2xl mr-2 mt-1' />
                  <strong>Les Colocs'</strong>
                </li>
                <li className=' leading-10 flex border-b-2 m-2'>
                  <AiOutlinePlus className=' text-second-color-100 text-2xl mr-2 mt-1' />
                  <strong>Froid comme l'enfer</strong>
                </li>
                <li className=' leading-10 flex border-b-2 m-2'>
                  <AiOutlinePlus className=' text-second-color-100 text-2xl mr-2 mt-1' />
                  <strong>La peste blanche</strong>
                </li>
              </ul>
            </div>
          </div>



          <div className='mb-8 shadow-boxshadow shadow-md rounded-md'>
            <div >{/*auteur recemment ajoutes*/}
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Auteur récemment ajoutés</h3>
              </div>

              <div>
                <ul>
                  <li className=' leading-10 flex border-b-2 m-2'>
                    <AiOutlineUserAdd className=' text-second-color-100 text-2xl mr-2 mt-1' />
                    <strong>Meteora</strong>
                  </li>
                  <li className=' leading-10 flex border-b-2 m-2'>
                    <AiOutlineUserAdd className=' text-second-color-100 text-2xl mr-2  mt-1' />
                    <strong>Inumajin</strong>
                  </li>
                  <li className=' leading-10 flex border-b-2 m-2'>
                    <AiOutlineUserAdd className=' text-second-color-100 text-2xl mr-2 mt-1' />
                    <strong>Nathalie</strong>
                  </li>
                  <li className=' leading-10 flex border-b-2 m-2'>
                    <AiOutlineUserAdd className=' text-second-color-100 text-2xl mr-2 mt-1' />
                    <strong>Leslie</strong>
                  </li>
                </ul>
              </div>




            </div>










          </div>
        </div>
      </div>
    </div>
  )
}


export default Books