import React from 'react';
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillAmazonSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

import axios from 'axios';
function Books() {

  axios({
    method: 'get',
    url: 'http://localhost:3004/',
    responseType: 'stream'
  })
    .then(function (response) {
      console.log(response)
    });

  return (

    <div className='  w-full absolute shadow-lg '>
      <img src="bgi.jpg" className='absolute' />
      <div className='m-12 grid grid-cols-[85px_2fr_1fr] p-2 
                  bg-white mt-80  z-10 max-h-max relative'>
        {/* row */}

        <div className='   top-7 relative '>
          <Link to="/books">
            <img src=" ecoute_jolie_marcia.jpg"
              alt="ecoute jolie marcia"
              mclassName='mb-2 border-b-2 shadow-boxshadow shadow-md ' />
          </Link>
          <Link to="/books">
            <img src="from_blood_and_ash_tome_1_le_sang_et_la_cendre.jpg"
              alt="le sang et la cendre"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="katel_des_forestieres.jpg"
              alt="katel des forestieres"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="apprends_dhier.png"
              alt="apprend d'hier"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link className=''
            to="/books">
            <img src="yakuzas_tome_1_mort_cruelle.jpg" alt="mort cruelle" className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="treize_raisons.jpg"
              alt="treize raison"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link className=''
            to="/books">
            <img src="mortelle_adele_tome_18_toi_je_te_zut.jpg"
              alt="mortelle adele tome 18 toi je te zut"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link className=''
            to="/books">
            <img src="la_mariee_au_collier_rouge.jpg"
              alt="la mariee au collier rouge"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="le_monde_selon_garp.jpg"
              alt="le monde selon garp"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="harry_potter_tome_1_harry_potter_a_lecole_des_sorciers.png"
              alt="harry potter a lecole des sorciers"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>
          <Link to="/books">
            <img src="la_ou_commence_la_fin_du_monde.jpg"
              alt="la ou commence la fin du monde"
              className=' mb-2 border-b-2 shadow-boxshadow shadow-md' />
          </Link>



        </div>
        <div className=' mx-4 top-7  max-h-max relative'>{/*div globale*/}
          <div className=' mb-8 shadow-boxshadow shadow-md rounded-md '>
            <div className='rounded-t-md bg-another-one-100 px-2 py-2'>
              <h3 className='  text-white text-base'>Livre du moment</h3>
            </div>
            <div className='p-4 '> {/* body book infor*/}
              <h3 className=' text-another-one-100 text-4xl font-medium'>
                <a href="#">Il était une frangirl, Tom 3 : Rosie la bete </a> {/*book title*/}
              </h3>
              <div className='grid grid-cols-[2fr_3fr]  my-4'>  {/* column img*/}
                <div>
                  <img src="img-1.jpg" alt="une image" className=' shadow-boxshadow shadow-xl' />
                </div> {/* column info book*/}
                <div>
                  <ul className="">
                    <h3 className=' text-3xl'>Ashley Poston</h3>
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
                  "J'ai accumulé depuis quarante ans un nombre considérable d'histoires, d'embryons de récits, 
                  de points de départ intrigants... Tout un stock d'envies que j'ai développées pour mon seul plaisir, 
                  persuadé qu'elles ne deviendraient jamais des livres publiés. À ma plus grande surprise, année après année, 
                  ces histoires rêvées, ces personnages fantasmés, ces aventures qui me hantent depuis des décennies prennent vie. 
                  Ce stock de récits dormant dans ma mémoire est loin, très loin d'être épuisé."
                  On l'appelle "le maître du twist". Depuis Nymphéas noirs, Michel Bussi enchaîne les best-sellers. 
                  Dans un récit captivant, il nous fait découvrir pour la première fois l'envers de son décor en nous 
                  ouvrant les portes de son imaginaire et de la création de ses plus grands romans.


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

                      <div className=' p-1'>
                        <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-xl' />
                      </div>
                      <div className=' p-1'>
                        <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-xl' />
                      </div>
                      <div className=' p-1'>
                        <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-xl' />
                      </div>
                      <div className=' p-1'>
                        <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-xl' />
                      </div>
                      <div className=' p-1'>
                        <img src="img-1.jpg" alt="" srcset="" className='shadow-boxshadow shadow-xl' />
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
              <h3>Commentaires</h3>
            </div>
            <div className='p-2'>
              <div className=' shadow-boxshadow shadow-md  mt-4 mb-3'>{/*body des livres sponsorises*/}
                <div className=' float-right '><img src="img-1.jpg " alt="" className='h-20 ' /></div>
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
                <div className=' float-right '><img src="img-1.jpg " alt="" className='h-20 ' /></div>
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
                <div className=' float-right '><img src="img-1.jpg " alt="" className='h-20 ' /></div>
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
                <div className=' float-right '><img src="img-1.jpg " alt="" className='h-20 ' /></div>
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
  )
}


export default Books