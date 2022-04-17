import React, { useState, useEffect } from 'react';
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import axios from 'axios';
import data from '../../data.js';


function Body() {
  const [book, setBook] = useState(data);


  useEffect(() => {

    // axios({
    //   method: 'get',
    //   url: 'http://localhost:3004/posts',
    // })
    //   .then(function (response) {
    //     persons = response.data;
    //     console.log(response.data);

    //   });

  }, [])


  return (

    <div>
      <div className='  w-full absolute shadow-lg hidden lg:block '>
        <img src="library-with-books.jpg" className='absolute' />
        <div className='m-12 grid grid-cols-[85px_3fr_1fr] p-2 
                  bg-white mt-80  z-10  max-h-max relative'>
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
                <h3 className=' text-another-one-100 text-2xl font-medium'>
                  {book.posts[9].titre}  {/*book title*/}
                </h3>
                <div className='grid grid-cols-[2fr_3fr]  my-4'>  {/* column img*/}
                  <div>
                    <img src={book.posts[9].image} alt="une image" className=' shadow-boxshadow shadow-md' />
                  </div> {/* column info book*/}
                  <div>
                    <ul className=" leading-6">

                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Langue originale </strong>
                        <p>{book.posts[9].langueoriginale}</p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Titre originale </strong>
                        <p>{book.posts[9].titre}</p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Première publication</strong>
                        <p>{book.posts[9].premierpublication}</p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Auteur(s)</strong>
                        <p> {book.posts[9].auteurs}</p>
                      </li>
                      <hr className='m-4' />
                      <li className="mb-4">
                        <strong className=' text-first-color-100 uppercase'>Thèmes</strong>
                        <p>{book.posts[9].thèmes}</p>

                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            {/*Forum*/}

            <div className=' mb-8 shadow-boxshadow shadow-md rounded-md'>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md'>
                <h3 >Conversation sur le Forum</h3>
              </div> {/*body des conversations*/}
              <div className='p-4 '>
                <h4 className=' text-2xl m-2'>Discussions</h4>

                <div className=' rounded-md  '>
                  <ul className=' leading-8 '>
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p className=''> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20 ' />
                    </li>
                    <hr className='m-2' />
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20 ' />
                    </li>
                    <hr className='m-2' />
                    <li className='px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>
                    <hr className='m-2' />
                    <li className='px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>
                    <hr className='m-2' />
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            {/*Meilleurs vente de livre*/}
            <div className='mb-8 shadow-boxshadow shadow-md rounded-md'>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Meilleurs vente de livre</h3>
              </div>
              <div className='grid grid-cols-[3fr_3fr] m-2 p-4'>{/*body qui rassemble les meilleurs vente*/}
                <div>{/*wrapper*/}
                  <div className='h-auto'>{/*panel*/}
                    <div className='flex border p-4 m-2 rounded '>{/*panel body*/}
                      <div className='absolute border rounded-md border-another-one2-100 bg-another-one2-100 text-white p-2 m-2'>{/**index*/}
                        <span>1</span></div>
                      <div>
                        <img src={book.posts[4].image} alt="une image" className=' shadow-boxshadow shadow-md' />
                      </div>
                      <div className=' mt-10 ml-4 '>{/*text*/}
                        <table>
                          <tr className=''>
                            <th className='border border-second-color-100  bg-third-color-100 text-white'>Titre</th>
                            <td className='border border-second-color-100'>{book.posts[4].titre}</td>
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white'>Thèmes</th>
                            <td className='border border-second-color-100'> {book.posts[4].thèmes}</td>
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white'> Auteur</th>
                            <td className='border border-second-color-100'> {book.posts[4].auteurs}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>


                <div>{/*wrapper*/}
                  <div>{/*panel*/}
                    <div className='flex border p-4 m-2 rounded'>{/*panel body*/}
                      <div className='absolute border rounded-md border-another-one2-100 bg-another-one2-100 text-white p-2 m-2'>{/**index*/}
                        <span>2</span></div>
                      <div>
                        <img src={book.posts[3].image} alt="une image"
                          className='shadow-boxshadow shadow-md h-48' />
                      </div>
                      <div className=' mt-10 ml-4 '>{/*text*/}
                        <table>
                          <tr className=''>
                            <th className='border border-second-color-100  bg-third-color-100 text-white'>Titre</th>
                            <td className='border border-second-color-100'>{book.posts[3].titre}</td>
                          </tr>

                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white'> Thèmes</th>
                            <td className='border border-second-color-100'>{book.posts[3].thèmes}</td>
                          </tr>

                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white'> Auteurs</th>
                            <td className='border border-second-color-100'>{book.posts[3].auteurs}</td>
                          </tr>


                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/*operation */}
            <div className='mb-8 shadow-boxshadow shadow-md rounded-md '>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Opération "Lire avant tout le monde"</h3>

              </div>

              <div className='p-4  '>{/*Body carousel */}
                <div className=''>{/*affichage des livres*/}
                  <div className='flex overflow-x-auto '>{/*regroupement des livres*/}

                    <div className='p-1'>
                      <img src={book.posts[0].image} alt="" srcset=""
                        className='shadow-boxshadow shadow-md ' />
                    </div>
                    <div className='p-1'>
                      <img src={book.posts[9].image} alt="" srcset=""
                        className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-1'>
                      <img src={book.posts[8].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-1'>
                      <img src={book.posts[5].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-1'>
                      <img src={book.posts[7].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>


                  </div>

                  <div className='flex justify-between'>
                    <div>
                      <a> + d'infos sur l'opération lire avant tout le monde</a>
                    </div>
                    <div>
                      <a> Consulter l'espace lire avant tout le monde</a>
                    </div>
                  </div>
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
                          <img src={book.posts[1].image} alt="" srcset=""
                            className='shadow-boxshadow shadow-md' />
                        </div>
                        <div className='p-1'>
                          <img src={book.posts[8].image} alt="" srcset=""
                            className='shadow-boxshadow shadow-md' />
                        </div>

                        <div className='p-1'>
                          <img src={book.posts[9].image} alt="" srcset=""
                            className='shadow-boxshadow shadow-md' />
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
                    <img src="amour2.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Amour</p>
                  </div>
                  <div className=' '>{/*col-2*/}
                    <img src="aventure2.jpg" alt="" className='h-3/4  w-full p-2 ' />
                    <p className=' text-center'>Aventure</p>
                  </div>

                  <div>{/*col-3*/}
                    <img src="policier.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Policier</p>
                  </div>
                  <div>{/*col-4*/}
                    <img src="fantastique.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Fantastique</p>
                  </div>
                  <div>{/*col-5*/}
                    <img src="science-fiction2.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Science-fiction</p>
                  </div>
                  <div>{/*col-6*/}
                    <img src="fantasy.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Fantasy</p>
                  </div>
                  <div className=''>{/*col-7*/}
                    <img src="young-adult.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Young-adult</p>
                  </div>
                  <div>{/*col-8*/}
                    <img src="manga2.jpg" alt="" className=' h-2/3 w-full ' />
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
                    <img src={book.posts[0].image} alt="" className='h-20 ' /></div>
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
                    <img src={book.posts[9].image} alt="" className='h-20 ' /></div>
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
                    <img src={book.posts[3].image} alt="" className='h-20 ' /></div>
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
                    <img src={book.posts[4].image} alt="" className='h-20 ' /></div>
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

      <div className='  w-full absolute shadow-lg block lg:hidden'>

        <div className=' bg-white  z-10 max-h-max '>

          <div className=' mx-4 top-7  max-h-max relative'>{/*div globale*/}
            <div className=' mb-8 shadow-boxshadow shadow-md rounded-md '>
              <div className='rounded-t-md bg-another-one-100 px-2 py-2'>
                <h3 className='  text-white text-base'>Livre du moment</h3>
              </div>
              <div className='p-4 '> {/* body book infor*/}
                <h3 className=' text-another-one-100 text-2xl font-medium'>
                  <a href="#">Il était une frangirl, Tom 3 : Rosie la bete </a> {/*book title*/}
                </h3>
                <div className='grid grid-cols-[40%_2fr]  my-4'>  {/* column img*/}
                  <div>
                    <img src="img-1.jpg" alt="une image" className=' shadow-boxshadow shadow-md' />
                  </div> {/* column info book*/}
                  <div>
                    <ul className="  ml-4 leading-6">

                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Langue originale </strong>
                        <p>Anglais</p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Titre originale </strong>
                        <p>Bookish and the Beast</p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Première publication</strong>
                        <p>10 Mars 2022 </p>
                      </li>
                      <hr className='m-4' />
                      <li className='mb-4'>
                        <strong className=' text-first-color-100 uppercase'>Auteur(s)</strong>
                        <p> Ashley Poston</p>
                      </li>
                      <hr className='m-4' />
                      <li className="mb-4">
                        <strong className=' text-first-color-100 uppercase'>Thèmes</strong>
                        <p>Littérature contemporaine, Conte revisité, Romance</p>

                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            {/*Forum*/}

            <div className=' mb-8 shadow-boxshadow shadow-md rounded-md'>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md'>
                <h3 >Conversation sur le Forum</h3>
              </div> {/*body des conversations*/}
              <div className='p-4 '>
                <h4 className=' text-2xl m-2'>Discussion</h4>

                <div className=' rounded-md  '>
                  <ul className=' leading-8 '>
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p className=''> Un commentaire </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20 ' />
                    </li>
                    <hr className='m-2' />
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20 ' />
                    </li>
                    <hr className='m-2' />
                    <li className='px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>
                    <hr className='m-2' />
                    <li className='px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>
                    <hr className='m-2' />
                    <li className=' px-2 py-2 grid grid-cols-[45px_5fr_1fr]'>
                      <AiOutlineComment className=' text-second-color-100 text-2xl' />
                      <p> Pourriez-vous créer la série Collines cachées de Eva Lang </p>
                      <AiOutlineUser className=' text-second-color-100 text-2xl ml-20' />
                    </li>

                  </ul>
                </div>
              </div>
            </div>


            <div className='mb-8 shadow-boxshadow shadow-md rounded-md'>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Meilleurs vente de livre</h3>
              </div>
              <div className='  m-2 p-4'>{/*body qui rassemble les meilleurs vente*/}
                <div>{/*wrapper*/}
                  <div className='h-auto'>{/*panel*/}
                    <div className='border p-4 m-2 rounded '>{/*panel body*/}
                      <div className='absolute border rounded-md border-another-one2-100 bg-another-one2-100 text-white p-2 m-2'>{/**index*/}
                        <span>1</span></div>
                      <div>
                        <img src={book.posts[0].image} alt="Écoute, jolie Marcia" className='shadow-boxshadow shadow-md w-full' />
                      </div>
                      <div className=' mt-5  '>{/*text*/}
                        <table className='w-full'>
                          <tr className=' '>
                            <th className='border border-second-color-100  bg-third-color-100 text-white p-2'>Titrejjh</th>
                            <td className='border border-second-color-100 pl-2' >Titreww 3</td>
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white p-2'>Genre</th>
                            <td className='border border-second-color-100 pl-2'> Genre dukhk livre</td>
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white p-2'> Auteur</th>
                            <td className='border border-second-color-100 pl-2'> Auteur du livre</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>


                <div>{/*wrapper*/}
                  <div>{/*panel*/}
                    <div className=' border p-4 m-2 rounded'>{/*panel body*/}
                      <div className='absolute border rounded-md border-another-one2-100 bg-another-one2-100 text-white p-2 m-2'>{/**index*/}
                        <span>200</span></div>
                      <div>
                        <img src={book.posts[1].image} alt="From Blood and Ash, Tome 1 : Le Sang et la Cendre " className='shadow-boxshadow shadow-md w-full' />
                      </div>
                      <div className=' mt-5 '>{/*text*/}
                        <table className='w-full'>
                          <tr className=''>
                            <th className='border border-second-color-100  bg-third-color-100 text-white p-2'>Titre</th>
                            {/* <td className='border border-second-color-100 pl-2'>Titre du livre  </td> */}
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white p-2'>Genre</th>
                            <td className='border border-second-color-100 pl-2'> Genre du livre</td>
                          </tr>
                          <tr>
                            <th className='border  bg-third-color-100 border-second-color-100 text-white p-2'> Auteur</th>
                            <td className='border border-second-color-100 pl-2'> Auteur du livre</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/*operation lire avant tout le monde */}
            <div className='mb-8 shadow-boxshadow shadow-md rounded-md '>
              <div className='bg-another-one-100 px-2 py-2 text-white rounded-t-md p-4'>
                <h3>Opération "Lire avant tout le monde"</h3>

              </div>

              <div className='p-4 '>{/*Body carousel */}
                <div>{/*affichage des livres*/}
                  <div className='flex overflow-x-auto'>{/*regroupement des livres*/}
                    <div className='p-2'>
                      <img src={book.posts[0].image} alt="" srcset="" className='shadow-boxshadow shadow-md ' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[1].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[2].image} alt="" srcset="" className='shadow-boxshadow shadow-md ' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[3].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[4].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[5].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>
                    <div className='p-2'>
                      <img src={book.posts[6].image} alt="" srcset="" className='shadow-boxshadow shadow-md' />
                    </div>

                  </div>


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

                        <div className=' p-1'>
                          <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                        </div>
                        <div className=' p-1'>
                          <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                        </div>
                        <div className=' p-1'>
                          <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                        </div>
                        <div className=' p-1'>
                          <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
                        </div>
                        <div className=' p-1'>
                          <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-md' />
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
                    <img src="amour2.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Amour</p>
                  </div>
                  <div className=' '>{/*col-2*/}
                    <img src="aventure2.jpg" alt="" className='h-3/4  w-full p-2 ' />
                    <p className=' text-center'>Aventure</p>
                  </div>

                  <div>{/*col-3*/}
                    <img src="policier.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Policier</p>
                  </div>
                  <div>{/*col-4*/}
                    <img src="fantastique.jpg" alt="" className=' h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Fantastique</p>
                  </div>
                  <div>{/*col-5*/}
                    <img src="science-fiction2.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Science-fiction</p>
                  </div>
                  <div>{/*col-6*/}
                    <img src="fantasy.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Fantasy</p>
                  </div>
                  <div className=''>{/*col-7*/}
                    <img src="young-adult.jpg" alt="" className='h-3/4 w-full p-2 ' />
                    <p className=' text-center'>Young-adult</p>
                  </div>
                  <div>{/*col-8*/}
                    <img src="manga2.jpg" alt="" className=' h-2/3 w-full ' />
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
                    <img src={book.posts[0].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>De soleil et de sang </p>
                    </li>
                    <li>
                      <p>Commenté il ya 3h</p>
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
                    <img src={book.posts[3].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>De soleil et de sang </p>
                    </li>
                    <li>
                      <p>Commenté il ya 10 min</p>
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
                    <img src={book.posts[6].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>De soleil et de sang </p>
                    </li>
                    <li>
                      <p>Commenté il ya 2h</p>
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
                    <img src={book.posts[9].image} alt="" className='h-20 ' /></div>
                  <ul className='ml-2'>
                    <li>
                      <p>De soleil et de sang </p>
                    </li>
                    <li>
                      <p>Commenté il ya 3h</p>
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



    </div>






  )
}


export default Body