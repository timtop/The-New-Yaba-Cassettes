import React from "react";

import Header from "./Header";
// import Sermons from "./Sermons";
import "./styles/app.css";

// Images Import
// import builder1 from "./imgs/Builders-1.jpg";
// import builder2 from "./imgs/Builders-2.jpg";
// import builder3 from "./imgs/Builders-3.jpg";
// import builder4 from "./imgs/Builders-4.jpg";
// import builder5 from "./imgs/Builders-5.jpg";
// import builder6 from "./imgs/Builders-6.jpg";
// import movement1 from "./imgs/Movement-1.jpg";
// import goshen from "./imgs/goshen.jpg";
// import royal from "./imgs/Royal.jpg";
// import lovesme from "./imgs/lovesme.jpg";
// import direction from "./imgs/Confused.jpg";
import Sample from "./Sermons1";
import inhisname from "./imgs/in-his-name.jpg";
import thejoycode from "./imgs/the-joy-code.jpeg";
import commadeer from "./imgs/commandeer.jpg";
import symphony from "./imgs/Symphony.jpeg";
import audacity from "./imgs/audacity.jpg";
import commune from "./imgs/The Commune 2.0.jpg";
import thanks from "./imgs/thanksgiving.jpg";
import love1 from "./imgs/love1.jpg";
import tango from "./imgs/tango.jpg";
import lovenigeria from "./imgs/love-nigeria.jpg";
import alabaster from "./imgs/Alabaster.png";
import alabaster2 from "./imgs/alabaster2.png";

class App extends React.Component {
  render() {
    const sermons = [
      {
        title: "Alabaster 2",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 19th March 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1679304059/Yaba%20Messages/Alabaster_Sunday_19th_March_2023_mixdown11_fs4bs1.mp3",
        name: "Alabaster - 19/03/23",
        img: alabaster2,
      },
      {
        title: "Alabaster",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 12th March 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1678692737/Yaba%20Messages/12-03-2023_new_2_pwberl.mp3",
        name: "Alabaster - 12/03/23",
        img: alabaster,
      },
      {
        title: "Love for the Country",
        preacher: "Pst. Jide Oladokun",
        date: "Sunday 20th February 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1676896255/Yaba%20Messages/Love_for_the_country_service_19_Feb_mp3_mixdown_totqgh.mp3",
        name: "Love for the Country - 20/02/23",
        img: lovenigeria,
      },
      {
        title: "Tango (It takes two)",
        preacher: "Pst. Jide and Deborah 'Jide Oladokun",
        date: "Sunday 12th February 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1676280480/Yaba%20Messages/12th_Feburary_Tango_compressed_jqwfoo.mp3",
        name: "Tango - 12/02/23",
        img: tango,
      },
      {
        title: "Love is Wounded",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 6th February 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1675667372/Yaba%20Messages/Love_is_wounded_service_Feb_6_usrope.mp3",
        name: "Love is Wounded - 06/02/23",
        img: love1,
      },
      {
        title: "16:34 A Thanksgiving Expereince",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 29th January 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1675078209/Yaba%20Messages/Sunday_29th_January_2023_Thanksgiving_cnupzb.mp3",
        name: "A Thanksgiving Expereince - 29/01/23",
        img: thanks,
      },
      {
        title: "The Commune 2.0",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 22nd January 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1674491300/Yaba%20Messages/The_Commune_2_yhffzb.mp3",
        name: "The Commune 2.0 - 22/01/23",
        img: commune,
      },
      {
        title: "The Emboldened Matrix",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 15th January 2023",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1674245284/Yaba%20Messages/150123_The_Emboldened_Matrix_qnwe5t.mp3",
        name: "The Emboldened Matrix - 15/01/23",
        img: audacity,
      },
      {
        title: "In His Name",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 6th November 2022",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1670748232/Yaba%20Messages/061122_In_His_Name_hbbj6i.mp3",
        name: "In His Name - 6/11/22",
        img: inhisname,
      },
      {
        title: "The Joy Code",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 27th November 2022",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1670869158/Yaba%20Messages/271122_thulyz.mp3",
        name: "The Joy Code - 27/11/22",
        img: thejoycode,
      },
      {
        title: "Commandeer",
        preacher: "Pst. Olajide Oladokun",
        date: "Sunday 11th December 2022",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1670868620/Yaba%20Messages/121222_-_Commandeer_The_Language_of_Faith_ivlcxx.mp3",
        name: "Commandeer - 11/12/22",
        img: commadeer,
      },
      {
        title: "Symphony",
        preacher: "Pst. Deborah 'Jide Oladokun",
        date: "Sunday 18th December 2022",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1671555117/Yaba%20Messages/symphony_g4j5jq.mp3",
        name: "Symphony - 18/12/22",
        img: symphony,
      },
      // {
      //   title: "The Builders",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 6th June 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624613525/Messages/060621_-_The_Builders_1_hic1uz.mp3",
      //   name: "The Builders I - 06/06/21",
      //   img: builder1,
      // },
      // {
      //   title: "The Builders II",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 13th June 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624537131/Messages/130621_-_Allignment_with_The_Builder_rza5hx.mp3",
      //   name: "The Builders II - 13/06/21",
      //   img: builder2,
      // },
      // {
      //   title: "The Builders III",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 20th June 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624830384/Messages/200621_-_The_Heart_Of_A_Builder_iivzpe.mp3",
      //   name: "The Builders III - 20/06/21",
      //   img: builder3,
      // },
      // {
      //   title: "The Builders IIII",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 27th June 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1625415070/Messages/The_Builders_px6j2j.mp3",
      //   name: "The Builders III - 20/06/21",
      //   img: builder4,
      // },
      // {
      //   title: "Building from the Ruins",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 4th July 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1625414586/Messages/Builing_from_the_Ruins_nwaadg.mp3",
      //   name: "The Builders III - 20/06/21",
      //   img: builder5,
      // },
      // {
      //   title: "Tear Down and Rebuild (Panel Section)",
      //   preacher: "Pst. Deborah Elijah",
      //   date: "Sunday 11th July 2021",
      //   link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1626024565/Messages/11th_July_2021_Sunday_Service_i4uwzi.mp3",
      //   name: "The Builders III - 20/06/21",
      //   img: builder6,
      // },
    ];

    // const sermons2022 = [
    //   //   {
    //   //     title: "The Movement",
    //   //     preacher: "Pst. Deborah Elijah",
    //   //     date: "Sunday 16th January 2022",
    //   //     link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1642976327/Messages/160122_The_Movement_-_Pastor_Debbie_ty9tzs.mp4",
    //   //     name: "The Movement - 16/01/22",
    //   //     img: movement1,
    //   //   },
    //   //   {
    //   //     title: "Knowing who you are in Christ",
    //   //     preacher: "Pst. Deborah Elijah",
    //   //     date: "Sunday 23rd January 2022",
    //   //     link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1643070124/Messages/230122_Knowing_who_you_are_in_Christ_wdsvkz.mp3",
    //   //     name: "Goshen Experiecne - 23/01/22",
    //   //     img: goshen,
    //   //   },
    //   //   {
    //   //     title: "A Royal Preisthood",
    //   //     preacher: "Pst. Deborah Elijah",
    //   //     date: "Sunday 30th January 2022",
    //   //     link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1644577984/Messages/310122_Knowing_who_you_are_in_Christ_2_bzv9vl.mp3",
    //   //     name: "Goshen Experiecne - 30/01/22",
    //   //     img: royal,
    //   //   },
    //   //   {
    //   //     title: "Love loves me",
    //   //     preacher: "Pst. Deborah Elijah",
    //   //     date: "Sunday 6th Februray 2022",
    //   //     link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1644577953/Messages/060222_Love_Loves_Me_ytgvom.mp3",
    //   //     name: "Goshen Experiecne - 23/01/22",
    //   //     img: lovesme,
    //   //   },
    //   //   {
    //   //     title: "Confused ? (Receiving Divine Direction)",
    //   //     preacher: "Pst. Tobi Olajiga",
    //   //     date: "Sunday 20th Februray 2022",
    //   //     link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1645386653/Messages/200222_Recieving_Divine_Direction_k93jqh.mp3",
    //   //     name: "Goshen Experiecne - 23/01/22",
    //   //     img: direction,
    //   //   },
    // ];

    return (
      <div className="wrapper">
        <Header />
        {/* <Sermons sermons={sermons} sermons2022={sermons2022} /> */}
        <Sample sermons={sermons} />
      </div>
    );
  }
}

export default App;
