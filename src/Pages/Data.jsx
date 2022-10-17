import React from 'react'
import { createContext,useState } from 'react'
export const store = createContext();

const Data = (props) => {
const [details,setdetails] = useState([{
    'id': 1 ,
    'name1' : 'Amir Khan',
    'image1' : <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkZ9n1SV0ALx_E6cUg-MfMsujvB0KjE9GYLUA8FQ3OMukB_ajJ' className='img-fluid shadow-4' alt='...' />,
    'info1': 'Aamir Khan’s latest release Laal Singh Chaddha failed to bring audience to the theatres, perhaps striking the biggest blow on an already hurting Hindi film industry that has seen a number of prestige titles flopping at the box office. The actor has been missing from the scene as speculation about the film continues in the industry circles.'
},
{
  'id': 2 ,
  'name2' : 'Shahrukh Khan',
  'image2' : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg' className='img-fluid shadow-4' alt='...' />,
  'info2': 'Shah Rukh Khan also known by the initialism SRK, is an Indian actor, film producer, and television personality who works in Hindi films. Referred to in the media as the "Baadshah of Bollywood" (in reference to his 1999 film Baadshah), "King of Bollywood" and "King Khan", he has appeared in more than 80 films, and earned numerous accolades, including 14 Filmfare Awards. The Government of India has awarded him the Padma Shri, and the Government of France has awarded him the Ordre des Arts et des Lettres and the Legion of Honour. Khan has a significant following in Asia and the Indian diaspora worldwide. In terms of audience size and income, he has been described as one of the most successful film stars in the world.'
},
{
  'id': 3 ,
  'name3' : 'Ajay Devgan',
  'image3' : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajay_Devgn_.jpg/1024px-Ajay_Devgn_.jpg' className='img-fluid shadow-4' alt='...' />,
  'info3': "Vishal Veeru Devgan (born 2 April 1969), known professionally as Ajay Devgn, is an Indian actor, film director and producer who works in Hindi cinema. Devgn has appeared in over a hundred films and has won numerous accolades, including four National Film Awards and four Filmfare Awards. In 2016, he was honoured by the Government of India with the Padma Shri, the fourth-highest civilian honour of the country."
},{
  'id': 4 ,
  'name4' : 'Salman Khan',
  'image4' : <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/Salman_Khan_filmfare.jpg' className='img-fluid shadow-4' alt='...' />,
  'info4': " Salman Khan is an Indian actor, film producer, and television personality who works in Hindi films. In a film career spanning over thirty years, Khan has received numerous awards, including two National Film Awards as a film producer, and two Filmfare Awards as an actor.[3] He is cited in the media as one of the most commercially successful actors of Indian cinema.[4][5] Forbes included him in their 2015 list of Top-Paid 100 Celebrity Entertainers in the world. Khan tied with Amitabh Bachchan for No. 71 on the list, both with earnings of $33.5 million.[6][7] According to the Forbes list in 2018, Khan was the highest-ranked Indian, placing 82nd, with earnings of $37.7 million.[8][9] He has been hosting the reality show Bigg Boss since 2010"
},{
  'id': 5 ,
  'name5' : 'Sanjay Balraj Dutt',
  'image5' : <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Sanjay_Dutt_snapped_promoting_his_film_%E2%80%98Bhoomi%E2%80%99.jpg' className='img-fluid shadow-4' alt='...' />,
  'info5': " Sanjay Balraj Dutt is an Indian actor who primarily works in Hindi films. He is the recipient of several awards, including two Filmfare Awards and three Screen Awards. In his career spanning over 40 years, Dutt has acted in 187 films, ranging from romance to comedy genres, but is usually typecast in action genres, and has established himself as one of the most popular Hindi film actors of the later 1980s to 2020s. Dutt's life receives considerable media coverage in India, and in 2018, Sanju, a biopic based on his life (which also saw a special appearance by him), was released to positive reviews and emerged as one of the highest-grossers of Indian cinema"
},{
  'id': 6 ,
  'name6' : 'Cell Phone',
  'image6' : <img src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Mobile_Phone_Evolution_1992_-_2014.jpg' className='img-fluid shadow-4' alt='...' />,
  'info6':'A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone, sometimes shortened to simply mobile, cell, or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area. The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network architecture and, therefore, mobile telephones are called cellular telephones or cell phones in North America. In addition to telephony, digital mobile phones (2G) support a variety of other services, such as text messaging, MMS, email, Internet access, short-range wireless communications (infrared, Bluetooth), business applications, video games and digital photography. Mobile phones offering only those capabilities are known as feature phones; mobile phones which offer greatly advanced computing capabilities are referred to as smartphones'
},
{
  'id': 7,
  'name7' : 'Artificial Inteligence',
  'image7' : <img src='https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/artificial-intelligence-AI.png' className='img-fluid shadow-4' alt='...' />,
  'info7':'Before 1949, computers could execute commands, but they could not remember what they did as they were not able to store these commands. In 1950, Alan Turing discussed how to build intelligent machines and test this intelligence in his paper “Computing Machinery and Intelligence.” Five years later, the first AI program was presented at the Dartmouth Summer Research Project on Artificial Intelligence (DSPRAI). This event catalyzed AI research for the next few decades.Computers became faster, cheaper, and more accessible between 1957 and 1974. Machine learning algorithms improved and, in 1970, one of the hosts of DSPRAI told Life Magazine that there would be a machine with the general intelligence of an average human being in three to eight years. Despite their success, computers’ inability to efficiently store or quickly process information created obstacles in the pursuit of artificial intelligence for the next ten years.'
},{
  'id': 8,
  'name8' : 'Solar Panel',
  'image8' : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/From_a_solar_cell_to_a_PV_system.svg/800px-From_a_solar_cell_to_a_PV_system.svg.png' className='img-fluid shadow-4' alt='...' />,
  'info8':'In 1839, the ability of some materials to create an electrical charge from light exposure was first observed by the French physicist Edmond Becquerel.Though these initial solar panels were too inefficient for even simple electric devices, they were used as an instrument to measure light.The observation by Becquerel was not replicated again until 1873, when the English electrical engineer Willoughby Smith discovered that the charge could be caused by light hitting selenium. After this discovery, William Grylls Adams and Richard Evans Day published "The action of light on selenium" in 1876, describing the experiment they used to replicate Smith results.In 1881, the American inventor Charles Fritts created the first commercial solar panel, which was reported by Fritts as "continuous, constant and of considerable force not only by exposure to sunlight but also to dim, diffused daylight." However, these solar panels were very inefficient, especially compared to coal-fired power plants.In 1939, Russell Ohl created the solar cell design that is used in many modern solar panels. He patented his design in 1941.In 1954, this design was first used by Bell Labs to create the first commercially viable silicon solar cell'
},{
  'id': 9,
  'name9' : 'GPS',
  'image9' : <img src='https://cdn.vox-cdn.com/thumbor/vu7NALMrjJ8jjPM2hylpKQs4790=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/49276747/shutterstock_154744394.0.jpg' className='img-fluid shadow-4' alt='...' />,
  'info9':'The Global Positioning System (GPS), originally Navstar GPS,[2] is a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force.[3] It is one of the global navigation satellite systems (GNSS) that provides geolocation and time information to a GPS receiver anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.[4] It does not require the user to transmit any data, and operates independently of any telephonic or Internet reception, though these technologies can enhance the usefulness of the GPS positioning information. It provides critical positioning capabilities to military, civil, and commercial users around the world. Although the United States government created, controls and maintains the GPS system, it is freely accessible to anyone with a GPS receiver.'
},
{
  'id': 10,
  'name10' : 'Internet',
  'image10' : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Internet_map_1024_-_transparent%2C_inverted.png/800px-Internet_map_1024_-_transparent%2C_inverted.png' className='img-fluid shadow-4' alt='...' />,
  'info10':'The Internet is the global system of interconnected computer networks that uses the Internet protocol suite to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.The origins of the Internet date back to the development of packet switching and research commissioned by the United States Department of Defense in the 1960s to enable time-sharing of computers.[2] The primary precursor network, the ARPANET, initially served as a backbone for interconnection of regional academic and military networks in the 1970s. The funding of the National Science Foundation Network as a new backbone in the 1980s, as well as private funding for other commercial extensions, led to worldwide participation in the development of new networking technologies, and the merger of many networks.[3] The linking of commercial networks and enterprises by the early 1990s marked the beginning of the transition to the modern Internet,[4] and generated a sustained exponential growth as generations of institutional, personal, and mobile computers were connected to the network. Although the Internet was widely used by academia in the 1980s, commercialization incorporated its services and technologies into virtually every aspect of modern life.'
},{
  'id': 11,
  'name11' : 'Yahya Abdul-Mateen II ',
  'image11' : <img src='https://images.hindustantimes.com/img/2022/09/01/550x309/Yahya_Abdul-Mateen_1662038935830_1662038940223_1662038940223.jpg' className='img-fluid shadow-4' alt='...' />,
  'info11':'Yahya Abdul-Mateen II has worked in critical successes like The Trial of the Chicago 7 and The Handmaid’s Tale and also in commercial blockbusters like The Matrix Resurrections. Apart from Aquaman, he has also played a superhero in the HBO series Watchmen. He is set to reprise his Aquaman role in the sequel Aquaman: The Lost Kingdom.In an interview with Variety, the actor spoke about the difference in working in both kinds of storytelling. “Everything should be about getting to the truth. But sometimes you got to know which movie or genre you are in. Something like Aquaman, thats clown work. Aquaman is not The Trial of the Chicago 7. You have got to get over yourself,” he said.'
},{
  'id': 12,
  'name12' : 'Doctor Strange: Mr Fantastic',
  'image12' : <img src='https://images.hindustantimes.com/img/2022/09/01/550x309/John_Krasinski_1662036596913_1662036605851_1662036605851.jpg' className='img-fluid shadow-4' alt='...' />,
  'info12':'Doctor Strange in the Multiverse of Madness was fan service of the highest order. Not only did the film bring back some popular faces in familiar Marvel roles, but it also introduced some actors in roles fan had been asking for. One such was John Krasinski who made his MCU debut in a cameo is Reed Richards aka Mr Fantastic. However, the film’s screenwriter has revealed that the character was to be introduced in Marvel films years ago.'
},
{
  'id': 13,
  'name13' : 'Thor',
  'image13' : <img src='https://images.hindustantimes.com/img/2022/09/01/550x309/Chris_Hemsworth_1662023099125_1662023119375_1662023119375.jpg' className='img-fluid shadow-4' alt='...' />,
  'info13':'Thor is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility. Besides Old Norse Þórr, the deity occurs in Old English as Þunor, in Old Frisian as Thuner, in Old Saxon as Thunar, and in Old High German as Donar, all ultimately stemming from the Proto-Germanic theonym *Þun(a)raz, meaning Thunder.Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the Germanic expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, emblems of his hammer, Mjölnir, were worn and Norse pagan personal names containing the name of the god bear witness to his popularity.'
},
{
  'id': 14,
  'name14' : 'Top Gun: Maverick',
  'image14' : <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info14':'Top Gun: Maverick is a 2022 American action film directed by Joseph Kosinski. It is the sequel to the 1986 film Top Gun and the second installment in the Top Gun film series. Written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie, the film is based on a story by Peter Craig and Justin Marks. It stars Tom Cruise and Val Kilmer reprising their roles from the original film, alongside Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, and Ed Harris. In the film, Maverick confronts his past while training a group of younger TOPGUN graduates, including the son of his deceased best friend, for a dangerous mission.'
},
{
  'id': 15,
  'name15' : 'Spider-Man: No Way Home',
  'image15' : <img src='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info15':'Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the multiverse is broken open, which allows visitors from alternate realities to enter Parkers universe.'
},
{
  'id': 16,
  'name16' : 'Running for fitness',
  'image16' : <img src='https://mk0healthista7wl964d.kinstacdn.com/wp-content/uploads/2019/02/running-for-fitness-running-with-a-friend.jpg' className='img-fluid shadow-4' alt='...' />,
  'info16': 'Running can significantly improve physical and mental health. As a form of aerobic exercise, running can reduce stress, improve heart health, and even help alleviate symptoms of depression. Some researchers think running may be so good for us because its something we evolved to do.'
},{
  'id': 17,
  'name17' : 'Spider-Man: No Way Home',
  'image17' : <img src='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info17': ''
},{
  'id': 18,
  'name18' : 'Spider-Man: No Way Home',
  'image18' : <img src='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info18': ''
},{
  'id': 19,
  'name19' : 'Spider-Man: No Way Home',
  'image19' : <img src='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info19': ''
},{
  'id': 20,
  'name20' : 'Assess your fitness level',
  'image20' : <img src='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg' className='img-fluid shadow-4' alt='...' />,
  'info20': ''
},{
  'id': 21,
  'name21' : ' Lasagna',
  'image21' : <img src='https://i.ndtvimg.com/i/2017-10/lasagna_620x350_81508846322.jpg' className='img-fluid shadow-4' alt='...' />,
  'info21': 'The ultimate Italian dish has to be this recipe of Lasagna. A secret to the best lasagna recipe lies in the perfectly made, home made bolognese sauce and this bacon and lamb lasagna boasts of a delicious one! Loaded with parmesan cheese and layered with a mix of vegetables, bacon strips and minced lamb, this lasagna recipe is nothing short of perfect.'
},{
  'id': 22,
  'name22' : ' Pasta Con Pomodoro E Basilico',
  'image22' : <img src='https://i.ndtvimg.com/i/2017-09/pasta-con-pomodoro-e-basilico_625x350_51506418092.jpg' className='img-fluid shadow-4' alt='...' />,
  'info22': 'This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook. This one boats of being among the original Italian recipes of pasta. easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kid tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine.'
},{
  'id': 23,
  'name23' : 'Mushroom Risotto',
  'image23' : <img src='https://i.ndtvimg.com/i/2017-09/risotto_625x350_81506418041.jpg' className='img-fluid shadow-4' alt='...' />,
  'info23': 'A plateful of buttery risotto with the goodness of mushrooms. A healthy bowl of mushroom risotto has benefits more than you can think. A great source of protein, powerful antioxidant and even has cancer-fighting properties. This risotto recipe with mushrooms is a delicious recipe besides being easy and quick! Great to feed a hungry horde!'
},{
  'id': 24,
  'name24' : 'Margherita Pizza',
  'image24' : <img src='https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg' alt='...' />,
  'info24': 'Fancy a pipping hot pizza, fresh out of the oven? Create one at home! Margherita Pizza is to many the true Italian flag. One of the most loved Italian dishes, it just takes a few simple ingredients and you get insanely delicious results! You just can not go wrong with that tomato, basil and fresh mozzarella combo.'
},{
  'id': 25,
  'name25' : 'Italian Cuisines',
  'image25' : <img src='https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg' alt='...' />,
  'info25': 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. In the North of Italy, fish (such as cod, or baccalà), potatoes, rice, corn (maize), sausages, pork, and different types of cheese are the most common ingredients.'
},
]);
  return (
    <div>
      <store.Provider value={[details,setdetails]}>
      {props.children}
      </store.Provider>
    </div>
  )
}

export default Data